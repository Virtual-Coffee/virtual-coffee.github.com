import { json } from '@remix-run/node';
import { createMetaData } from '~/util/createMetaData.server';

export const handle = {
	listTitle: 'October, 2022: HacktoberFest!',
	meta: {
		title: 'Monthly Theme & Challenge for October, 2022: HacktoberFest!',
		description:
			'October challenge -> Participate to Hacktoberfest! This month, our members will participate to the DigitalOcean HacktoberFest by being maintainers, contributors, or mentors.',
	},
	date: '2022-10-01',
	hero: {
		heroHeader: '',
	},
};

export async function loader() {
	const { title, description } = handle.meta;
	return json({
		meta: createMetaData({ title, description }),
	});
}

export function meta({ data: { meta } = {} } = {}) {
	return meta;
}

export default function Challenge() {
	return (
		<>
			<h1>
				<small>Monthly Challenge for October 2022:</small> It's Hacktoberfest!
				Participate in open source, learn, and have fun!
			</h1>

			<p className="lead">
				This month we have three tracks: maintainers will provide issues labeled
				for Hacktoberfest, contributors will solve issues, and mentors will help
				contributors and maintainers be successful.
			</p>

			<p>
				<strong>Challenge Team Leads & Facilitators:</strong> BekahHW & Dan Ott
			</p>

			<hr />

			<h2>Theme</h2>
			<p>The 2022 Hacktoberfest!</p>

			<h2>Challenge</h2>

			<strong>Maintainers</strong>
			<p>
				They provide issues labeled Hacktoberfest on their repository(ies),
				review the PRs for these issues, and validate and merge following the
				rules of the contest. They also answer the contributors' questions.
			</p>

			<strong>Contributors</strong>
			<p>
				They find issues labeled Hacktoberfest they want to solve. The goal of
				the contest is to have 4 PRs validated during the month of October.
			</p>

			<strong>Mentors</strong>
			<p>
				They will be paired with a mentee (contributor or maintainer). They
				provide support either on Slack, during a 1:1, a pairing session, or
				whatever works best for the team!
			</p>

			<h2>How to Participate</h2>
			<h4>Before starting</h4>

			<ol>
				<li>
					<strong>Contributors</strong>: Make sure to sign up on the{' '}
					<a href="https://hacktoberfest.com/">
						Hacktoberfest official website
					</a>
					, get in contact with your mentor if you requested one, and check out
					issues on sites with the Hacktoberfest label.
					<br />
					If you've signed up to the VC Hacktoberfest Initiative, you can access
					to your dashboard{' '}
					<a href="https://hacktoberfest.virtualcoffee.io/">here</a>.
				</li>

				<li>
					<strong>Mentors</strong>: Make sure you include "Hacktoberfest" as a
					label in your project's topics section (found in "About" on your
					repository). This is how you opt-in to Hacktoberfest.
				</li>
			</ol>

			<h4>Weekly check-ins</h4>
			<p>
				Let's start the week with an async check-in. What are your goals for
				Hacktoberfest for the week? What support do you need? Do you plan on
				spending time in the Hacktoberfest co-working room, talking to your
				mentor, answering questions as a maintainer?
			</p>
			<p>
				Every Friday of the month, you come to our synchronous check-in, share
				your progress, ask questions, and find help and support. We'll post more
				information in the #open-source Slack channel.
			</p>
			<p>
				Can't come to the check-in? No problem. We'll have an async check-in as
				well!
			</p>

			<h4>How do I share my progress?</h4>
			<p>
				Share your progress in the #open-source channel in Slack. We want to
				know when you get those Pull Requests (PRs) in so we can celebrate along
				with you! And if you need support, we'll be there to help you too. While
				no other platform is imposed, it can be a good idea to also share on
				social media for more reach but only if you are comfortable doing so.
				You can share on Twitter using -or not- the hashtag #VCMonthlyChallenge,
				a personal blog, a post on <a href="https://dev.to/">DEV.to</a>, you get
				the idea!
			</p>

			<p>
				Sharing every time some work is added is a good idea, small progress is
				still progress. No need to write a detailed blog post; a 140 character
				Tweet can be enough. For example:{' '}
				<i>Today I submitted my first PR for Hacktoberfest.</i>
			</p>

			<h4>What if I need help?</h4>
			<p>
				You can ask a question in the #help-and-pairing VC channel, ask for
				ideas in the #open-source channel, or join the Hacktoberfest VC
				co-working room. Asking for help is part of the process!
			</p>

			<p>And remember, we're always here to help ❤️</p>

			<h4>Completing the Challenge!</h4>
			<p>
				Any kind of participation in Hacktoberfest counts as you completing the
				VC October challenge.
			</p>
			<p>
				Remember, VC is here to support you during Hacktoberfest but is not an
				official partner of the event. To get the Hacktoberfest swag, you need
				to have four (4) pull requests accepted.
			</p>

			<h2>Virtual Coffee Approved Repositories!</h2>
			<ul style={{ listStyleType: 'none' }}>
				<li>
					<h3>
						<a href="https://github.com/Virtual-Coffee/virtualcoffee.io">
							Virtual Coffee
						</a>
					</h3>
					<p>Our very own site!</p>
					<p>
						<strong>Maintainer</strong>: Virtual Coffee Maintainers
					</p>
				</li>
				<li>
					<h3>
						<a href="https://github.com/weareinreach/InReach">InReach</a>
					</h3>
					<p>
						InReach is the world’s first tech platform matching LGBTQ+ people
						with safe, verified resources.
					</p>
					<p>
						<strong>Maintainer</strong>: InReach
					</p>
				</li>
				<li>
					<h3>
						<a href="https://github.com/ClJarvis/Hello_There">Hello There</a>
					</h3>
					<p>
						An alternative greeting for learning a new language. Here is a list
						of how to say "Hello There" in several Languages.
					</p>
					<p>
						<strong>Maintainer</strong>: Chris Jarvis
					</p>
				</li>
				<li>
					<h3>
						<a href="https://github.com/stepzen-dev/examples">Stepzen Nuxt</a>
					</h3>
					<p>
						<strong>Maintainer</strong>: Lucia Cerchie
					</p>
				</li>
				<li>
					<h3>
						<a href="https://github.com/freeCodeCamp/Developer_Quiz_Site">
							freeCodeCamp Developer Quiz
						</a>
					</h3>
					<p>
						This is a quiz site filled with over 600+ questions on programming.
					</p>
					<p>
						<strong>Maintainer</strong>: freeCodeCamp
					</p>
				</li>
				<li>
					<h3>
						<a href="https://github.com/deepgram/python-sdk">
							Deepgram Python SDK
						</a>
					</h3>
					<p>
						Official Python SDK for Deepgram's automated speech recognition
						APIs.
					</p>
					<p>
						<strong>Maintainer</strong>: deepgram
					</p>
				</li>
				<li>
					<h3>
						<a href="https://github.com/deepgram/deepgram-node-sdk">
							Deepgram Node.js SDK
						</a>
					</h3>
					<p>
						Official JavaScript SDK for Deepgram's automated speech recognition
						APIs.
					</p>
					<p>
						<strong>Maintainer</strong>: deepgram
					</p>
				</li>
				<li>
					<h3>
						<a href="https://github.com/deepgram/deepgram-dotnet-sdk">
							Deepgram .NET SDK
						</a>
					</h3>
					<p>.NET SDK for Deepgram's automated speech recognition APIs.</p>
					<p>
						<strong>Maintainer</strong>: deepgram
					</p>
				</li>
				<li>
					<h3>
						<a href="https://github.com/novuhq/novu">novu</a>
					</h3>
					<p>
						The open-source notifications infrastructure. A fully-featured
						microservice to send SMS, E-mail, Slack and Push notifications.
						Embeddable notification center for React with real-time updates,
						content management, and much more...
					</p>
					<p>
						<strong>Maintainer</strong>: novuhq
					</p>
				</li>
				<li>
					<h3>
						<a href="https://github.com/strapi/strapi">strapi</a>
					</h3>
					<p>
						Strapi is the leading open-source headless CMS. It’s 100%
						JavaScript, fully customizable and developer-first.
					</p>
					<p>
						<strong>Maintainer</strong>: strapi
					</p>
				</li>
				<li>
					<h3>
						<a href="https://github.com/ToolJet/Tooljet">ToolJet</a>
					</h3>
					<p>
						Extensible low-code framework for building business applications.
						Connect to databases, cloud storages, GraphQL, API endpoints,
						Airtable, etc and build apps using drag and drop application
						builder. Built using JavaScript/TypeScript.
					</p>
					<p>
						<strong>Maintainer</strong>: ToolJet
					</p>
				</li>
			</ul>

			<h2>Resources</h2>
			<ul>
				<li>
					<a href="https://www.iamdeveloper.com/pages/talks/#heading-getting-the-most-out-of-open-source">
						Getting the Most Out of Open Source
					</a>
				</li>
				<li>
					<a href="https://www.iamdeveloper.com/pages/talks/#heading-words-matter:-conventional-comments">
						Words Matter: Conventional Comments
					</a>
				</li>
				<li>
					<a href="https://www.freecodecamp.org/news/writing-good-commit-messages-a-practical-guide/">
						Writing Good Commit Messages, a Practical guide
					</a>
				</li>
				<li>
					<a href="https://dev.to/mishmanners/series/13860">
						GitHub like a Boss Series
					</a>
				</li>
				<li>
					<a href="https://www.youtube.com/watch?v=0mjJS1Y8wrI">
						Hacktoberfest Tutorial
					</a>
				</li>
			</ul>
		</>
	);
}
