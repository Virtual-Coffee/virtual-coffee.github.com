require('dotenv').config();
const { DateTime } = require('luxon');
const fs = require('fs');
const pluginRss = require('@11ty/eleventy-plugin-rss');
const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const pluginNavigation = require('@11ty/eleventy-navigation');
const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');

module.exports = function (eleventyConfig) {
	eleventyConfig.setWatchThrottleWaitTime(100); // in milliseconds
	eleventyConfig.addPlugin(pluginRss);
	eleventyConfig.addPlugin(pluginSyntaxHighlight);
	eleventyConfig.addPlugin(pluginNavigation);

	require('./utils/imgix')(eleventyConfig);
	require('./utils/shortcodes')(eleventyConfig);
	require('./utils/filters')(eleventyConfig);

	eleventyConfig.setDataDeepMerge(true);

	eleventyConfig.addLayoutAlias('post', 'layouts/post.njk');

	eleventyConfig.addCollection('homePageBlocksSmall', function (collectionApi) {
		return collectionApi
			.getAll()
			.filter(
				(post) =>
					post.data.homePageBlocks && post.data.homePageBlocks.type === 'small',
			)
			.sort(
				(a, b) => a.data.homePageBlocks.order - b.data.homePageBlocks.order,
			);
	});

	eleventyConfig.addCollection('homePageBlocksLarge', function (collectionApi) {
		return collectionApi
			.getAll()
			.filter(
				(post) =>
					post.data.homePageBlocks && post.data.homePageBlocks.type === 'large',
			)
			.sort(
				(a, b) => a.data.homePageBlocks.order - b.data.homePageBlocks.order,
			);
	});

	eleventyConfig.addPassthroughCopy('src/img');
	eleventyConfig.addPassthroughCopy('src/service-worker.js');
	eleventyConfig.addPassthroughCopy('src/assets');
	eleventyConfig.addPassthroughCopy('src/css');
	// eleventyConfig.addPassthroughCopy('CODE_OF_CONDUCT.md');

	const markdownItAttrs = require('markdown-it-attrs');

	const linkAfterHeader = markdownItAnchor.permalink.linkAfterHeader({
		style: 'visually-hidden',
		assistiveText: (title) => `Permalink to “${title}”`,
		visuallyHiddenClass: 'sr-only',
	});

	/* Markdown Overrides */
	let markdownLibrary = markdownIt({
		html: true,
		breaks: true,
		linkify: true,
	})
		.use(markdownItAttrs)
		.use(markdownItAnchor, {
			permalink(slug, opts, state, idx) {
				state.tokens.splice(
					idx,
					0,
					Object.assign(new state.Token('div_open', 'div', 1), {
						attrs: [
							[
								'class',
								`header-anchor-wrapper header-anchor-wrapper-${state.tokens[idx].tag}`,
							],
						],
						class: 'header-anchor',
						block: true,
					}),
				);

				state.tokens.splice(
					idx + 4,
					0,
					Object.assign(new state.Token('div_close', 'div', -1), {
						block: true,
					}),
				);

				linkAfterHeader(slug, opts, state, idx + 1);
			},

			level: [2, 3],
		})
		.use(require('markdown-it-toc-done-right'), {
			listType: 'ul',
			level: [2, 3],
		});

	eleventyConfig.setLibrary('md', markdownLibrary);

	// Browsersync Overrides
	eleventyConfig.setBrowserSyncConfig({
		callbacks: {
			ready: function (err, browserSync) {
				const content_404 = fs.readFileSync('_site/404.html');

				browserSync.addMiddleware('*', (req, res) => {
					// Provides the 404 content without redirect.
					res.write(content_404);
					res.end();
				});
			},
		},
		ui: false,
		ghostMode: false,
	});

	return {
		templateFormats: ['md', 'njk', 'html', 'liquid'],

		// If your site lives in a different subdirectory, change this.
		// Leading or trailing slashes are all normalized away, so don’t worry about those.

		// If you don’t have a subdirectory, use "" or "/" (they do the same thing)
		// This is only used for link URLs (it does not affect your file structure)
		// Best paired with the `url` filter: https://www.11ty.dev/docs/filters/url/

		// You can also pass this in on the command line using `--pathprefix`
		// pathPrefix: "/",

		markdownTemplateEngine: 'liquid',
		htmlTemplateEngine: 'njk',
		dataTemplateEngine: 'njk',

		// These are all optional, defaults are shown:
		dir: {
			input: './src',
			includes: '_includes',
			data: '_data',
			output: './_site',
		},
	};
};
