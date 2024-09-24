const { faker } = require('@faker-js/faker');

module.exports = {
	organization: {
		sponsorshipsAsMaintainer: {
			nodes: [
				{
					sponsorEntity: {
						name: faker.person.fullName(),
						login: faker.internet.userName(),
						id: faker.string.uuid(),
						avatarUrl_80: faker.image.avatar(),
						avatarUrl_160: faker.image.avatar(),
						avatarUrl_240: faker.image.avatar(),
						avatarUrl_480: faker.image.avatar(),
						avatarUrl_720: faker.image.avatar(),
						url: `https://github.com/${faker.internet.userName}`,
						description: faker.lorem.sentences(),
						descriptionHTML: `<div>${faker.lorem.sentences()}</div>`,
						websiteUrl: faker.internet.url(),
					},
					tier: {
						id: 'MDEyOlNwb25zb3JzVGllcjcwNjcx',
					},
					tierSelectedAt: '2021-06-16T19:19:34Z',
				},
				{
					sponsorEntity: {
						name: faker.person.fullName(),
						login: faker.internet.userName(),
						id: faker.string.uuid(),
						avatarUrl_80: faker.image.avatar(),
						avatarUrl_160: faker.image.avatar(),
						avatarUrl_240: faker.image.avatar(),
						avatarUrl_480: faker.image.avatar(),
						avatarUrl_720: faker.image.avatar(),
						url: `https://github.com/${faker.internet.userName}`,
						description: faker.lorem.sentences(),
						descriptionHTML: `<div>${faker.lorem.sentences()}</div>`,
						websiteUrl: faker.internet.url(),
					},
					tier: {
						id: 'MDEyOlNwb25zb3JzVGllcjcwNjcx',
					},
					tierSelectedAt: '2021-06-11T16:34:21Z',
				},
				{
					sponsorEntity: {
						name: faker.person.fullName(),
						login: faker.internet.userName(),
						id: faker.string.uuid(),
						avatarUrl_80: faker.image.avatar(),
						avatarUrl_160: faker.image.avatar(),
						avatarUrl_240: faker.image.avatar(),
						avatarUrl_480: faker.image.avatar(),
						avatarUrl_720: faker.image.avatar(),
						url: `https://github.com/matthew-${faker.internet.userName}`,
						description: faker.lorem.sentences(),
						descriptionHTML: `<div>${faker.lorem.sentences()}</div>`,
						websiteUrl: null,
					},
					tier: {
						id: 'ST_kwHOA_eujM4AARof',
					},
					tierSelectedAt: '2021-06-16T20:17:15Z',
				},
				{
					sponsorEntity: {
						name: faker.person.fullName(),
						login: faker.internet.userName(),
						id: faker.string.uuid(),
						avatarUrl_80: faker.image.avatar(),
						avatarUrl_160: faker.image.avatar(),
						avatarUrl_240: faker.image.avatar(),
						avatarUrl_480: faker.image.avatar(),
						avatarUrl_720: faker.image.avatar(),
						url: `https://github.com/${faker.internet.userName}`,
						description: faker.lorem.sentences(),
						descriptionHTML: `<div>${faker.lorem.sentences()}</div>`,
						websiteUrl: faker.internet.url(),
					},
					tier: {
						id: 'MDEyOlNwb25zb3JzVGllcjcwNjcy',
					},
					tierSelectedAt: '2021-06-14T17:39:02Z',
				},
				{
					sponsorEntity: {
						name: faker.person.fullName(),
						login: faker.internet.userName(),
						id: faker.string.uuid(),
						avatarUrl_80: faker.image.avatar(),
						avatarUrl_160: faker.image.avatar(),
						avatarUrl_240: faker.image.avatar(),
						avatarUrl_480: faker.image.avatar(),
						avatarUrl_720: faker.image.avatar(),
						url: `https://github.com/${faker.internet.userName}`,
						description: faker.lorem.sentences(),
						descriptionHTML: `<div>${faker.lorem.sentences()}</div>`,
						websiteUrl: faker.internet.url(),
					},
					tier: {
						id: 'ST_kwHOA_eujM4AARof',
					},
					tierSelectedAt: '2021-06-14T17:29:24Z',
				},
				{
					sponsorEntity: {
						name: faker.person.fullName(),
						login: faker.internet.userName(),
						id: faker.string.uuid(),
						avatarUrl_80: faker.image.avatar(),
						avatarUrl_160: faker.image.avatar(),
						avatarUrl_240: faker.image.avatar(),
						avatarUrl_480: faker.image.avatar(),
						avatarUrl_720: faker.image.avatar(),
						url: `https://github.com/${faker.internet.userName}`,
						description: faker.lorem.sentences(),
						descriptionHTML: `<div>${faker.lorem.sentences()}</div>`,
						websiteUrl: faker.internet.url(),
					},
					tier: {
						id: 'MDEyOlNwb25zb3JzVGllcjcwNjcx',
					},
					tierSelectedAt: '2021-06-15T17:53:17Z',
				},
				{
					sponsorEntity: {
						name: faker.person.fullName(),
						login: faker.internet.userName(),
						id: faker.string.uuid(),
						avatarUrl_80: faker.image.avatar(),
						avatarUrl_160: faker.image.avatar(),
						avatarUrl_240: faker.image.avatar(),
						avatarUrl_480: faker.image.avatar(),
						avatarUrl_720: faker.image.avatar(),
						url: `https://github.com/${faker.internet.userName}`,
						description: faker.lorem.sentences(),
						descriptionHTML: `<div>${faker.lorem.sentences()}</div>`,
						websiteUrl: null,
					},
					tier: {
						id: 'ST_kwHOA_eujM4AARof',
					},
					tierSelectedAt: '2021-06-14T18:55:18Z',
				},
				{
					sponsorEntity: {
						name: faker.person.fullName(),
						login: faker.internet.userName(),
						id: faker.string.uuid(),
						avatarUrl_80: faker.image.avatar(),
						avatarUrl_160: faker.image.avatar(),
						avatarUrl_240: faker.image.avatar(),
						avatarUrl_480: faker.image.avatar(),
						avatarUrl_720: faker.image.avatar(),
						url: `https://github.com/${faker.internet.userName}`,
						description: faker.lorem.sentences(),
						descriptionHTML: `<div>${faker.lorem.sentences()}</div>`,
						websiteUrl: faker.internet.url(),
					},
					tier: {
						id: 'ST_kwHOA_eujM4AARof',
					},
					tierSelectedAt: '2021-06-14T17:58:39Z',
				},
				{
					sponsorEntity: {
						name: faker.person.fullName(),
						login: faker.internet.userName(),
						id: faker.string.uuid(),
						avatarUrl_80: faker.image.avatar(),
						avatarUrl_160: faker.image.avatar(),
						avatarUrl_240: faker.image.avatar(),
						avatarUrl_480: faker.image.avatar(),
						avatarUrl_720: faker.image.avatar(),
						url: `https://github.com/${faker.internet.userName}`,
						description: faker.lorem.sentences(),
						descriptionHTML: `<div>${faker.lorem.sentences()}</div>`,
						websiteUrl: faker.internet.url(),
					},
					tier: {
						id: 'MDEyOlNwb25zb3JzVGllcjcwNjcx',
					},
					tierSelectedAt: '2021-06-15T02:16:22Z',
				},
				{
					sponsorEntity: {
						name: faker.person.fullName(),
						login: faker.internet.userName(),
						id: faker.string.uuid(),
						avatarUrl_80: faker.image.avatar(),
						avatarUrl_160: faker.image.avatar(),
						avatarUrl_240: faker.image.avatar(),
						avatarUrl_480: faker.image.avatar(),
						avatarUrl_720: faker.image.avatar(),
						url: `https://github.com/${faker.internet.userName}`,
						description: faker.lorem.sentences(),
						descriptionHTML: `<div>${faker.lorem.sentences()}</div>`,
						websiteUrl: null,
					},
					tier: {
						id: 'MDEyOlNwb25zb3JzVGllcjcwNjcx',
					},
					tierSelectedAt: '2021-06-15T06:27:25Z',
				},
				{
					sponsorEntity: {
						name: faker.person.fullName(),
						login: faker.internet.userName(),
						id: faker.string.uuid(),
						avatarUrl_80: faker.image.avatar(),
						avatarUrl_160: faker.image.avatar(),
						avatarUrl_240: faker.image.avatar(),
						avatarUrl_480: faker.image.avatar(),
						avatarUrl_720: faker.image.avatar(),
						url: `https://github.com/${faker.internet.userName}`,
						description: faker.lorem.sentences(),
						descriptionHTML: `<div>${faker.lorem.sentences()}</div>`,
						websiteUrl: faker.internet.url(),
					},
					tier: {
						id: 'ST_kwHOA_eujM4AARof',
					},
					tierSelectedAt: '2021-06-17T17:17:27Z',
				},
				{
					sponsorEntity: {
						name: faker.person.fullName(),
						login: faker.internet.userName(),
						id: faker.string.uuid(),
						avatarUrl_80: faker.image.avatar(),
						avatarUrl_160: faker.image.avatar(),
						avatarUrl_240: faker.image.avatar(),
						avatarUrl_480: faker.image.avatar(),
						avatarUrl_720: faker.image.avatar(),
						url: `https://github.com/${faker.internet.userName}`,
						description: faker.lorem.sentences(),
						descriptionHTML: `<div>${faker.lorem.sentences()}</div>`,
						websiteUrl: faker.internet.url(),
					},
					tier: {
						id: 'ST_kwHOA_eujM4AARof',
					},
					tierSelectedAt: '2021-06-14T17:32:12Z',
				},
				{
					sponsorEntity: {
						name: faker.person.fullName(),
						login: faker.internet.userName(),
						id: faker.string.uuid(),
						avatarUrl_80: faker.image.avatar(),
						avatarUrl_160: faker.image.avatar(),
						avatarUrl_240: faker.image.avatar(),
						avatarUrl_480: faker.image.avatar(),
						avatarUrl_720: faker.image.avatar(),
						url: `https://github.com/${faker.internet.userName}`,
						description: faker.lorem.sentences(),
						descriptionHTML: `<div>${faker.lorem.sentences()}</div>`,
						websiteUrl: faker.internet.url(),
					},
					tier: {
						id: 'ST_kwHOA_eujM4AARog',
					},
					tierSelectedAt: '2021-06-14T18:03:22Z',
				},
				{
					sponsorEntity: {
						name: faker.person.fullName(),
						login: faker.internet.userName(),
						id: faker.string.uuid(),
						avatarUrl_80: faker.image.avatar(),
						avatarUrl_160: faker.image.avatar(),
						avatarUrl_240: faker.image.avatar(),
						avatarUrl_480: faker.image.avatar(),
						avatarUrl_720: faker.image.avatar(),
						url: `https://github.com/eclectic-${faker.internet.userName}`,
						description: faker.lorem.sentences(),
						descriptionHTML: `<div>${faker.lorem.sentences()}</div>`,
						websiteUrl: faker.internet.url(),
					},
					tier: {
						id: 'ST_kwHOA_eujM4AARof',
					},
					tierSelectedAt: '2021-06-15T10:35:32Z',
				},
				{
					sponsorEntity: {
						name: faker.person.fullName(),
						login: faker.internet.userName(),
						id: faker.string.uuid(),
						avatarUrl_80: faker.image.avatar(),
						avatarUrl_160: faker.image.avatar(),
						avatarUrl_240: faker.image.avatar(),
						avatarUrl_480: faker.image.avatar(),
						avatarUrl_720: faker.image.avatar(),
						url: `https://github.com/${faker.internet.userName}`,
						description: faker.lorem.sentences(),
						descriptionHTML: `<div>${faker.lorem.sentences()}</div>`,
						websiteUrl: faker.internet.url(),
					},
					tier: {
						id: 'ST_kwHOA_eujM4AARof',
					},
					tierSelectedAt: '2021-06-14T17:36:03Z',
				},
				{
					sponsorEntity: {
						name: faker.person.fullName(),
						login: faker.internet.userName(),
						id: faker.string.uuid(),
						avatarUrl_80: faker.image.avatar(),
						avatarUrl_160: faker.image.avatar(),
						avatarUrl_240: faker.image.avatar(),
						avatarUrl_480: faker.image.avatar(),
						avatarUrl_720: faker.image.avatar(),
						url: `https://github.com/${faker.internet.userName}`,
						description: faker.lorem.sentences(),
						descriptionHTML: `<div>${faker.lorem.sentences()}</div>`,
						websiteUrl: faker.internet.url(),
					},
					tier: {
						id: 'ST_kwHOA_eujM4AARof',
					},
					tierSelectedAt: '2021-06-14T22:52:36Z',
				},
				{
					sponsorEntity: {
						name: faker.person.fullName(),
						login: faker.internet.userName(),
						id: faker.string.uuid(),
						avatarUrl_80: faker.image.avatar(),
						avatarUrl_160: faker.image.avatar(),
						avatarUrl_240: faker.image.avatar(),
						avatarUrl_480: faker.image.avatar(),
						avatarUrl_720: faker.image.avatar(),
						url: `https://github.com/${faker.internet.userName}`,
						description: faker.lorem.sentences(),
						descriptionHTML: `<div>${faker.lorem.sentences()}</div>`,
						websiteUrl: faker.internet.url(),
					},
					tier: {
						id: 'ST_kwHOA_eujM4AARof',
					},
					tierSelectedAt: '2021-06-14T21:58:22Z',
				},
				{
					sponsorEntity: {
						name: faker.person.fullName(),
						login: faker.internet.userName(),
						id: faker.string.uuid(),
						avatarUrl_80: faker.image.avatar(),
						avatarUrl_160: faker.image.avatar(),
						avatarUrl_240: faker.image.avatar(),
						avatarUrl_480: faker.image.avatar(),
						avatarUrl_720: faker.image.avatar(),
						url: `https://github.com/${faker.internet.userName}`,
						description: faker.lorem.sentences(),
						descriptionHTML: `<div>${faker.lorem.sentences()}</div>`,
						websiteUrl: faker.internet.url(),
					},
					tier: {
						id: 'ST_kwHOA_eujM4AASMb',
					},
					tierSelectedAt: '2021-06-15T13:10:37Z',
				},
				{
					sponsorEntity: {
						name: faker.person.fullName(),
						login: faker.internet.userName(),
						id: faker.string.uuid(),
						avatarUrl_80: faker.image.avatar(),
						avatarUrl_160: faker.image.avatar(),
						avatarUrl_240: faker.image.avatar(),
						avatarUrl_480: faker.image.avatar(),
						avatarUrl_720: faker.image.avatar(),
						url: `https://github.com/${faker.internet.userName}`,
						description: faker.lorem.sentences(),
						descriptionHTML: `<div>${faker.lorem.sentences()}</div>`,
						websiteUrl: faker.internet.url(),
					},
					tier: {
						id: 'ST_kwHOA_eujM4AARof',
					},
					tierSelectedAt: '2021-06-15T05:03:32Z',
				},
				{
					sponsorEntity: {
						name: faker.person.fullName(),
						login: faker.internet.userName(),
						id: faker.string.uuid(),
						avatarUrl_80: faker.image.avatar(),
						avatarUrl_160: faker.image.avatar(),
						avatarUrl_240: faker.image.avatar(),
						avatarUrl_480: faker.image.avatar(),
						avatarUrl_720: faker.image.avatar(),
						url: `https://github.com/${faker.internet.userName}`,
						description: faker.lorem.sentences(),
						descriptionHTML: `<div>${faker.lorem.sentences()}</div>`,
						websiteUrl: faker.internet.url(),
					},
					tier: {
						id: 'MDEyOlNwb25zb3JzVGllcjcwNjcx',
					},
					tierSelectedAt: '2021-06-17T14:26:16Z',
				},
				{
					sponsorEntity: {
						name: faker.person.fullName(),
						login: faker.internet.userName(),
						id: faker.string.uuid(),
						avatarUrl_80: faker.image.avatar(),
						avatarUrl_160: faker.image.avatar(),
						avatarUrl_240: faker.image.avatar(),
						avatarUrl_480: faker.image.avatar(),
						avatarUrl_720: faker.image.avatar(),
						url: `https://github.com/${faker.internet.userName}`,
						description: faker.lorem.sentences(),
						descriptionHTML: `<div>${faker.lorem.sentences()}</div>`,
						websiteUrl: faker.internet.url(),
					},
					tier: {
						id: 'MDEyOlNwb25zb3JzVGllcjcwNjcx',
					},
					tierSelectedAt: '2021-06-15T08:47:33Z',
				},
				{
					sponsorEntity: {
						name: faker.person.fullName(),
						login: faker.internet.userName(),
						id: faker.string.uuid(),
						avatarUrl_80: faker.image.avatar(),
						avatarUrl_160: faker.image.avatar(),
						avatarUrl_240: faker.image.avatar(),
						avatarUrl_480: faker.image.avatar(),
						avatarUrl_720: faker.image.avatar(),
						url: `https://github.com/${faker.internet.userName}`,
						description: faker.lorem.sentences(),
						descriptionHTML: `<div>${faker.lorem.sentences()}</div>`,
						websiteUrl: faker.internet.url(),
					},
					tier: {
						id: 'ST_kwHOA_eujM4AARof',
					},
					tierSelectedAt: '2021-06-15T04:53:56Z',
				},
				{
					sponsorEntity: {
						name: faker.person.fullName(),
						login: faker.internet.userName(),
						id: faker.string.uuid(),
						avatarUrl_80: faker.image.avatar(),
						avatarUrl_160: faker.image.avatar(),
						avatarUrl_240: faker.image.avatar(),
						avatarUrl_480: faker.image.avatar(),
						avatarUrl_720: faker.image.avatar(),
						url: `https://github.com/${faker.internet.userName}`,
						description: faker.lorem.sentences(),
						descriptionHTML: `<div>${faker.lorem.sentences()}</div>`,
						websiteUrl: null,
					},
					tier: {
						id: 'ST_kwHOA_eujM4AARog',
					},
					tierSelectedAt: '2021-06-16T18:22:34Z',
				},
				{
					sponsorEntity: {
						name: faker.person.fullName(),
						login: faker.internet.userName(),
						id: faker.string.uuid(),
						avatarUrl_80: faker.image.avatar(),
						avatarUrl_160: faker.image.avatar(),
						avatarUrl_240: faker.image.avatar(),
						avatarUrl_480: faker.image.avatar(),
						avatarUrl_720: faker.image.avatar(),
						url: `https://github.com/${faker.internet.userName}`,
						description: faker.lorem.sentences(),
						descriptionHTML: `<div>${faker.lorem.sentences()}</div>`,
						websiteUrl: faker.internet.url(),
					},
					tier: {
						id: 'ST_kwHOA_eujM4AARof',
					},
					tierSelectedAt: '2021-06-18T03:43:39Z',
				},
				{
					sponsorEntity: {
						name: faker.person.fullName(),
						login: faker.internet.userName(),
						id: faker.string.uuid(),
						avatarUrl_80: faker.image.avatar(),
						avatarUrl_160: faker.image.avatar(),
						avatarUrl_240: faker.image.avatar(),
						avatarUrl_480: faker.image.avatar(),
						avatarUrl_720: faker.image.avatar(),
						url: `https://github.com/${faker.internet.userName}`,
						description: faker.lorem.sentences(),
						descriptionHTML: `<div>${faker.lorem.sentences()}</div>`,
						websiteUrl: faker.internet.url(),
					},
					tier: {
						id: 'ST_kwHOA_eujM4AARoh',
					},
					tierSelectedAt: '2021-06-15T02:07:10Z',
				},
				{
					sponsorEntity: {
						name: faker.person.fullName(),
						login: faker.internet.userName(),
						id: faker.string.uuid(),
						avatarUrl_80: faker.image.avatar(),
						avatarUrl_160: faker.image.avatar(),
						avatarUrl_240: faker.image.avatar(),
						avatarUrl_480: faker.image.avatar(),
						avatarUrl_720: faker.image.avatar(),
						url: `https://github.com/${faker.internet.userName}`,
						description: faker.lorem.sentences(),
						descriptionHTML: `<div>${faker.lorem.sentences()}</div>`,
						websiteUrl: null,
					},
					tier: {
						id: 'ST_kwHOA_eujM4AARog',
					},
					tierSelectedAt: '2021-06-17T20:58:56Z',
				},
			],
		},
		sponsorsListing: {
			tiers: {
				nodes: [
					{
						id: 'MDEyOlNwb25zb3JzVGllcjcwNjcx',
						name: '$5 a month',
						monthlyPriceInDollars: 5,
						monthlyPriceInCents: 500,
						isOneTime: false,
						isCustomAmount: false,
					},
					{
						id: 'ST_kwHOA_eujM4AARof',
						name: '$10 a month',
						monthlyPriceInDollars: 10,
						monthlyPriceInCents: 1000,
						isOneTime: false,
						isCustomAmount: false,
					},
					{
						id: 'ST_kwHOA_eujM4AARog',
						name: '$25 a month',
						monthlyPriceInDollars: 25,
						monthlyPriceInCents: 2500,
						isOneTime: false,
						isCustomAmount: false,
					},
					{
						id: 'MDEyOlNwb25zb3JzVGllcjcwNjcy',
						name: '$100 one time',
						monthlyPriceInDollars: 100,
						monthlyPriceInCents: 10000,
						isOneTime: true,
						isCustomAmount: false,
					},
					{
						id: 'ST_kwHOA_eujM4AARoh',
						name: '$100 a month',
						monthlyPriceInDollars: 100,
						monthlyPriceInCents: 10000,
						isOneTime: false,
						isCustomAmount: false,
					},
					{
						id: 'ST_kwHOA_eujM4AARok',
						name: '$150 a month',
						monthlyPriceInDollars: 150,
						monthlyPriceInCents: 15000,
						isOneTime: false,
						isCustomAmount: false,
					},
					{
						id: 'ST_kwHOA_eujM4AARyO',
						name: '$150 one time',
						monthlyPriceInDollars: 150,
						monthlyPriceInCents: 15000,
						isOneTime: true,
						isCustomAmount: false,
					},
					{
						id: 'ST_kwHOA_eujM4AARom',
						name: '$200 a month',
						monthlyPriceInDollars: 200,
						monthlyPriceInCents: 20000,
						isOneTime: false,
						isCustomAmount: false,
					},
					{
						id: 'ST_kwHOA_eujM4AARot',
						name: '$200 one time',
						monthlyPriceInDollars: 200,
						monthlyPriceInCents: 20000,
						isOneTime: true,
						isCustomAmount: false,
					},
					{
						id: 'ST_kwHOA_eujM4AARor',
						name: '$500 a month',
						monthlyPriceInDollars: 500,
						monthlyPriceInCents: 50000,
						isOneTime: false,
						isCustomAmount: false,
					},
				],
			},
		},
	},
};
