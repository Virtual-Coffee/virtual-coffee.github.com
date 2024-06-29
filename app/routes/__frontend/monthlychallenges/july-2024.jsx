import { json } from '@remix-run/node';
import { createMetaData } from '~/util/createMetaData.server';
import { Link } from '@remix-run/react';

export const handle = {
	listTitle: 'July 2024: Welcoming Community!',
	meta: {
		title: 'Monthly Challenge for July 2024: Welcoming Community!',
		description:
			"July challenge -> Let's bring new friends in and give them warm welcome!",
	},
	date: '2024-07-01',
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
				<small>Monthly Challenge for July 2024:</small> Welcoming Community!
			</h1>

			<p className="lead mt-3">
				Virtual Coffee is known as a welcoming and supportive community of
				developers of all levels. It is, and always will be, a genuine community
				of people who value and prioritize supporting one another.
			</p>

			<h2 className="mt-5">The Challenge</h2>
			<p>
				We love new friends! This month, you can invite{' '}
				<strong>one person</strong> to join our community! ✨
			</p>
			<p>
				During this month, we're also encouraging you to actively welcome our
				new members and show them what Virtual Coffee is all about. A welcoming
				and supportive community. 💖
			</p>

			<h2>Who can Participate?</h2>
			<p>All Virtual Coffee members.</p>

			<h2>How to Participate</h2>
			<ul>
				<li>
					<strong>One member, one invitation:</strong> You may invite one person
					this month. The details for inviting a new member are in the{' '}
					<code>#announcements</code> and <code>#monthly-challenge</code>{' '}
					channels on Slack.
				</li>
				<li>
					<strong>Encouraging introduction:</strong> If you've invited your
					friend to join Virtual Coffee, encourage them to introduce themselves
					in the <code>#welcome</code> channel on Slack after attending their
					first Coffee.
				</li>
				<li>
					<strong>Welcoming message:</strong> When new members introduce
					themselves in the <code>#welcome</code> channel, send a welcome
					message. This can be a personalized message or a friendly hello!
				</li>
				<li>
					<strong>Offering help and support:</strong> This can be anything! For
					example, let them know about any{' '}
					<Link to="/resources/virtual-coffee-handbook/guides-to-virtual-coffee/slack-channels-guide">
						Slack channels
					</Link>{' '}
					they may find interesting or encourage them to attend our Coffee Table
					events and post in Slack. Invite them to hang out in the{' '}
					<code>#co-working-room</code>, too!
				</li>
			</ul>

			<p>
				<strong>
					Please always remember to abide by our{' '}
					<Link to="/code-of-conduct">Code of Conduct</Link>, which we take
					seriously.
				</strong>
			</p>
		</>
	);
}
