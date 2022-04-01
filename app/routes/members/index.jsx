import { json, useLoaderData } from 'remix';
import DefaultLayout from '~/components/layouts/DefaultLayout';
import MemberCards from '~/components/MemberCards';
import UndrawCelebration from '~/svg/UndrawCelebration';
import { qualifiedUrl } from '~/util/url.server';

export const loader = async () => {
	const response = await fetch(
		qualifiedUrl(`/.netlify/functions/data-members`),
	).then((res) => res.json());

	return json(response);
};

export function meta() {
	return {
		title: 'Virtual Coffee Members',
		description: 'Meet our amazing members!',
	};
}

export default function EventsIndex() {
	const { core, members } = useLoaderData();

	return (
		<DefaultLayout
			Hero="UndrawTeamSpirit"
			heroHeader="Virtual Coffee Members"
			heroSubheader="A community is only as awesome as its members!"
		>
			<div className="bg-light py-5">
				<div className="container-xl">
					<h2 className="mb-sm-3 mb-md-4 display-5">Core Team</h2>
					<MemberCards data={core} />
					{/* {{ membercards(members.memberData.core) }} */}

					<h2 className="mb-sm-3 mb-md-5 display-5">Our Members</h2>
					<MemberCards data={members} />
					<div className="member-footer">
						<h2 className="mb-sm-3 mb-md-5 display-4">Go Team!</h2>
						<UndrawCelebration />
					</div>
				</div>
			</div>
		</DefaultLayout>
	);
}
