import { Link } from '@remix-run/react';

type PostListItem = {
	href?: string;
	to?: string;
	title: string;
	description?: string;
	children?: PostListItem[] | null;
};

type TitleProps = {
	className: 'postlist-title';
} & Pick<PostListItem, 'href' | 'to'>;

export function PostListItemTitle({ item }: { item: PostListItem }) {
	let Component: React.ElementType = 'div';
	const props: TitleProps = {
		className: 'postlist-title',
	};

	if (item.href) {
		Component = 'a';
		props.href = item.href;
	}

	if (item.to) {
		Component = Link;
		props.to = item.to;
	}

	return <Component {...props}>{item.title}</Component>;
}

export default function PostList({ items }: { items?: PostListItem[] }) {
	if (!items) {
		return null;
	}
	return (
		<ul className="postlist">
			{items.map((item, key) => {
				return (
					<li className="postlist-item" key={key}>
						<PostListItemTitle item={item} />
						{item.description && (
							<p className="postlist-description">{item.description}</p>
						)}
						{item.children && <PostList items={item.children} />}
					</li>
				);
			})}
		</ul>
	);
}

type FileListItem = {
	meta: {
		title: string;
		description: string;
	};
	slug: string;
	children: FileListItem[];
};

export function formatFileListItemsForPostList(
	items: FileListItem[],
): PostListItem[] | null {
	return items
		? items.map(
				(item): PostListItem => ({
					title: item.meta.title,
					description: item.meta.description,
					to: `/${item.slug}`,
					children: formatFileListItemsForPostList(item.children),
				}),
		  )
		: null;
}
