import VirtualCoffeeFullBanner from '@/svg/VirtualCoffeeFullBanner';
import HomePageBlock from '@/components/HomePageBlock';
import PostList from '@/components/PostList';

export const homePageLinks = [
	{
		href: '/join',
		title: 'Join Virtual Coffee',
		description: 'Learn how to join our community',
	},
	{
		href: '/about',
		title: 'About Virtual Coffee',
		description: `Our Mission, Core Values, History, and more.`,
	},
	{
		href: '/code-of-conduct',
		title: 'Code of Conduct',
		description: `In order to create a welcoming and inclusive community, we ask our members to abide by our Code of Conduct.`,
	},
	{
		href: '/members',
		title: 'Our Members',
		description: `Meet our amazing members!`,
	},
	{
		href: '/monthlychallenges',
		title: 'Monthly Challenges',
		description: `Every month, we create a challenge for our Virtual Coffee members to complete together`,
	},
	{
		href: 'https://store.virtualcoffee.io',
		title: 'Merch Store',
		description: `Support Virtual Coffee and show your love ❤️`,
	},
	{
		href: 'https://github.com/Virtual-Coffee',
		title: 'VC GitHub',
		description: `Join our Open Source efforts!`,
	},
	{
		href: 'https://youtube.com/c/virtualcoffeeio',
		title: 'VC Videos',
		description: `Recordings of Virtual Coffee Events and Live Streams.`,
	},
	{
		href: 'https://twitter.com/VirtualCoffeeIO',
		title: 'VC Twitter',
		description: `Stay up to date and join in the fun!`,
	},
];

export default function Home() {
	return (
		<>
			<div className="hero">
				<div className="container pt-5 pb-5 pt-sm-6">
					<h1>
						{/* @ts-ignore */}
						<VirtualCoffeeFullBanner />
					</h1>

					<h2 className="pt-5">
						<span>An intimate tech community for all,</span>{' '}
						<span>
							optimized for{' '}
							<strong className="gradient-text-primary">you</strong>
						</span>
					</h2>
				</div>

				<div className="container pt-3 pb-5">
					<div className="bodycopy lead">
						<p>
							Virtual Coffee is a tech community where friendships are formed
							and support is given to people at all stages of their journey.
							Join our laid-back twice-weekly conversations and our online
							events to connect with people who share your passion for
							technology.
						</p>

						<p>
							Anyone can join! Whether you&apos;re thinking about getting into tech
							or have been in it for decades.
						</p>
					</div>
				</div>
			</div>
      <main id="maincontent">
				<div className="container-lg py-5">
					<h2 className="text-center mb-5">What we&apos;re up to</h2>
					<div className="homepageblocks homepageblocks-wide">
						{/* @ts-ignore */}
						<HomePageBlock
							Hero="UndrawCelebration"
							id="about"
							title="All Things Virtual Coffee"
							subtitle="Links and Goodies!"
							wide
						>
							<PostList items={homePageLinks} />
						</HomePageBlock>
					</div>
					<div className="homepageblocks">
						<HomePageBlock
							Hero="UndrawConferenceCall"
							id="about"
							title="Community Events"
							subtitle="See our upcoming events!"
							linkTo="/events"
							footer="See more Community Events"
						>
Events
            </HomePageBlock>
          </div></div></main>
		</>
	);
}