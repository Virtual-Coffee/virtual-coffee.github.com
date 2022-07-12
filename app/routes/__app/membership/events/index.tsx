import { json } from '@remix-run/node';
import type { LoaderFunction } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import { authenticate } from '~/auth/auth.server';
import { CmsActions } from '~/api/cms.server';
import PageHeader from '~/components/app/PageHeader';
import { Fragment } from 'react';
import {
	CalendarIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
	DotsHorizontalIcon,
	LocationMarkerIcon,
	ChevronDownIcon,
	ClockIcon,
} from '@heroicons/react/solid';
import { Menu, Transition } from '@headlessui/react';
import classNames from 'classnames';
import { DateTime } from 'luxon';

const meetings = [
	{
		id: 1,
		date: 'January 10th, 2022',
		time: '5:00 PM',
		datetime: '2022-01-10T17:00',
		name: 'Leslie Alexander',
		imageUrl:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		location: 'Starbucks',
	},
	// More meetings...
];
const days = [
	{ date: '2021-12-27' },
	{ date: '2021-12-28' },
	{ date: '2021-12-29' },
	{ date: '2021-12-30' },
	{ date: '2021-12-31' },
	{ date: '2022-01-01', isCurrentMonth: true },
	{ date: '2022-01-02', isCurrentMonth: true },
	{ date: '2022-01-03', isCurrentMonth: true },
	{ date: '2022-01-04', isCurrentMonth: true },
	{ date: '2022-01-05', isCurrentMonth: true },
	{ date: '2022-01-06', isCurrentMonth: true },
	{ date: '2022-01-07', isCurrentMonth: true },
	{ date: '2022-01-08', isCurrentMonth: true },
	{ date: '2022-01-09', isCurrentMonth: true },
	{ date: '2022-01-10', isCurrentMonth: true },
	{ date: '2022-01-11', isCurrentMonth: true },
	{ date: '2022-01-12', isCurrentMonth: true, isToday: true },
	{ date: '2022-01-13', isCurrentMonth: true },
	{ date: '2022-01-14', isCurrentMonth: true },
	{ date: '2022-01-15', isCurrentMonth: true },
	{ date: '2022-01-16', isCurrentMonth: true },
	{ date: '2022-01-17', isCurrentMonth: true },
	{ date: '2022-01-18', isCurrentMonth: true },
	{ date: '2022-01-19', isCurrentMonth: true },
	{ date: '2022-01-20', isCurrentMonth: true },
	{ date: '2022-01-21', isCurrentMonth: true },
	{ date: '2022-01-22', isCurrentMonth: true, isSelected: true },
	{ date: '2022-01-23', isCurrentMonth: true },
	{ date: '2022-01-24', isCurrentMonth: true },
	{ date: '2022-01-25', isCurrentMonth: true },
	{ date: '2022-01-26', isCurrentMonth: true },
	{ date: '2022-01-27', isCurrentMonth: true },
	{ date: '2022-01-28', isCurrentMonth: true },
	{ date: '2022-01-29', isCurrentMonth: true },
	{ date: '2022-01-30', isCurrentMonth: true },
	{ date: '2022-01-31', isCurrentMonth: true },
	{ date: '2022-02-01' },
	{ date: '2022-02-02' },
	{ date: '2022-02-03' },
	{ date: '2022-02-04' },
	{ date: '2022-02-05' },
	{ date: '2022-02-06' },
];

type CalendarDate = {
	date: string;
	isCurrentMonth: boolean;
	isToday: boolean;
	isSelected?: boolean;
	events: any[];
};

export const loader: LoaderFunction = async ({ request }) => {
	await authenticate(request);

	let api = new CmsActions();
	await api.authenticate(request);

	const calendars = await api.getCalendars();

	const url = new URL(request.url);
	const currentMonth = new Date().getMonth() + 1;

	let monthParam = parseInt(url.searchParams.get('month') || '');
	let dayParam = parseInt(url.searchParams.get('day') || '');

	const month = isNaN(monthParam) ? currentMonth : monthParam;

	const day = isNaN(dayParam) ? new Date().getDate() : dayParam;

	// first day of the month
	let loopDate: DateTime = DateTime.now().set({ month, day: 1 });

	console.log(loopDate.toISODate());

	// find the first monday before that
	while (loopDate.weekday !== 1) {
		loopDate = loopDate.minus({ days: 1 });
		console.log(loopDate.toISODate());
	}

	let dates: CalendarDate[] = [];
	for (let i = 0; i < 42; i++) {
		const dateObj = {
			date: loopDate.toISO(),
			isCurrentMonth: loopDate.month === currentMonth,
			isToday: loopDate.hasSame(DateTime.now(), 'day'),
			isSelected: loopDate.day === day,
			events: [],
		};

		dates = [...dates, dateObj];

		loopDate = loopDate.plus({ days: 1 });
	}

	const selectedDate = dates.find((day) => day.isSelected);

	return json({
		calendars,
		dates,
		settings: {
			selectedDate,
			month,
			day,
		},
	});
};

export function getCalendarUrl({
	day,
	month,
}: {
	day?: string | number;
	month?: string | number;
}) {
	return `/membership/events?day=${day}&month=${month}`;
}

export default function Page() {
	const {
		calendars,
		dates,
		settings,
	}: {
		calendars: InstanceType<typeof CmsActions>['getCalendars'];
		dates: CalendarDate[];
		settings: {
			selectedDate: CalendarDate;
			month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
			day: number;
		};
	} = useLoaderData();

	const today = DateTime.now();

	const calDate = DateTime.now().set({
		month: settings.month,
		day: settings.day,
	});

	console.log({ dates });

	return (
		<>
			<PageHeader title="Events" />
			<div className="lg:h-0 lg:min-h-[768px]">
				<div className="lg:flex lg:h-full lg:flex-col">
					<header className="relative z-20 flex items-center justify-between border-b border-gray-200 py-4 px-6 lg:flex-none">
						<h1 className="text-lg font-semibold text-gray-900">
							<time dateTime={calDate.toFormat('y-MM')}>
								{calDate.toLocaleString({
									month: 'long',
									year: 'numeric',
								})}
							</time>
						</h1>
						<div className="flex items-center">
							<div className="flex items-center rounded-md shadow-sm md:items-stretch">
								<Link
									to={getCalendarUrl({
										month: calDate.minus({ month: 1 }).month,
									})}
									className="flex items-center justify-center rounded-l-md border border-r-0 border-gray-300 bg-white py-2 pl-3 pr-4 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50"
								>
									<span className="sr-only">Previous month</span>
									<ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
								</Link>
								<Link
									to={getCalendarUrl({ month: today.month, day: today.day })}
									className="hidden border-t border-b border-gray-300 bg-white px-3.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 focus:relative md:flex items-center"
								>
									Today
								</Link>
								<span className="relative -mx-px h-5 w-px bg-gray-300 md:hidden" />
								<Link
									to={getCalendarUrl({
										month: calDate.plus({ month: 1 }).month,
									})}
									className="flex items-center justify-center rounded-r-md border border-l-0 border-gray-300 bg-white py-2 pl-4 pr-3 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50"
								>
									<span className="sr-only">Next month</span>
									<ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
								</Link>
							</div>
							<div className="hidden md:ml-4 md:flex md:items-center">
								<Menu as="div" className="relative">
									<Menu.Button
										type="button"
										className="flex items-center rounded-md border border-gray-300 bg-white py-2 pl-3 pr-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
									>
										Month view
										<ChevronDownIcon
											className="ml-2 h-5 w-5 text-gray-400"
											aria-hidden="true"
										/>
									</Menu.Button>

									<Transition
										as={Fragment}
										enter="transition ease-out duration-100"
										enterFrom="transform opacity-0 scale-95"
										enterTo="transform opacity-100 scale-100"
										leave="transition ease-in duration-75"
										leaveFrom="transform opacity-100 scale-100"
										leaveTo="transform opacity-0 scale-95"
									>
										<Menu.Items className="focus:outline-none absolute right-0 mt-3 w-36 origin-top-right overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
											<div className="py-1">
												<Menu.Item>
													{({ active }) => (
														<a
															href="#"
															className={classNames(
																active
																	? 'bg-gray-100 text-gray-900'
																	: 'text-gray-700',
																'block px-4 py-2 text-sm',
															)}
														>
															Day view
														</a>
													)}
												</Menu.Item>
												<Menu.Item>
													{({ active }) => (
														<a
															href="#"
															className={classNames(
																active
																	? 'bg-gray-100 text-gray-900'
																	: 'text-gray-700',
																'block px-4 py-2 text-sm',
															)}
														>
															Week view
														</a>
													)}
												</Menu.Item>
												<Menu.Item>
													{({ active }) => (
														<a
															href="#"
															className={classNames(
																active
																	? 'bg-gray-100 text-gray-900'
																	: 'text-gray-700',
																'block px-4 py-2 text-sm',
															)}
														>
															Month view
														</a>
													)}
												</Menu.Item>
												<Menu.Item>
													{({ active }) => (
														<a
															href="#"
															className={classNames(
																active
																	? 'bg-gray-100 text-gray-900'
																	: 'text-gray-700',
																'block px-4 py-2 text-sm',
															)}
														>
															Year view
														</a>
													)}
												</Menu.Item>
											</div>
										</Menu.Items>
									</Transition>
								</Menu>
								<div className="ml-6 h-6 w-px bg-gray-300" />
								<button
									type="button"
									className="focus:outline-none ml-6 rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
								>
									Add event
								</button>
							</div>
							<Menu as="div" className="relative ml-6 md:hidden">
								<Menu.Button className="-mx-2 flex items-center rounded-full border border-transparent p-2 text-gray-400 hover:text-gray-500">
									<span className="sr-only">Open menu</span>
									<DotsHorizontalIcon className="h-5 w-5" aria-hidden="true" />
								</Menu.Button>

								<Transition
									as={Fragment}
									enter="transition ease-out duration-100"
									enterFrom="transform opacity-0 scale-95"
									enterTo="transform opacity-100 scale-100"
									leave="transition ease-in duration-75"
									leaveFrom="transform opacity-100 scale-100"
									leaveTo="transform opacity-0 scale-95"
								>
									<Menu.Items className="focus:outline-none absolute right-0 mt-3 w-36 origin-top-right divide-y divide-gray-100 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
										<div className="py-1">
											<Menu.Item>
												{({ active }) => (
													<a
														href="#"
														className={classNames(
															active
																? 'bg-gray-100 text-gray-900'
																: 'text-gray-700',
															'block px-4 py-2 text-sm',
														)}
													>
														Create event
													</a>
												)}
											</Menu.Item>
										</div>
										<div className="py-1">
											<Menu.Item>
												{({ active }) => (
													<a
														href="#"
														className={classNames(
															active
																? 'bg-gray-100 text-gray-900'
																: 'text-gray-700',
															'block px-4 py-2 text-sm',
														)}
													>
														Go to today
													</a>
												)}
											</Menu.Item>
										</div>
										<div className="py-1">
											<Menu.Item>
												{({ active }) => (
													<a
														href="#"
														className={classNames(
															active
																? 'bg-gray-100 text-gray-900'
																: 'text-gray-700',
															'block px-4 py-2 text-sm',
														)}
													>
														Day view
													</a>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<a
														href="#"
														className={classNames(
															active
																? 'bg-gray-100 text-gray-900'
																: 'text-gray-700',
															'block px-4 py-2 text-sm',
														)}
													>
														Week view
													</a>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<a
														href="#"
														className={classNames(
															active
																? 'bg-gray-100 text-gray-900'
																: 'text-gray-700',
															'block px-4 py-2 text-sm',
														)}
													>
														Month view
													</a>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<a
														href="#"
														className={classNames(
															active
																? 'bg-gray-100 text-gray-900'
																: 'text-gray-700',
															'block px-4 py-2 text-sm',
														)}
													>
														Year view
													</a>
												)}
											</Menu.Item>
										</div>
									</Menu.Items>
								</Transition>
							</Menu>
						</div>
					</header>
					<div className="shadow ring-1 ring-black ring-opacity-5 lg:flex lg:flex-auto lg:flex-col">
						<div className="grid grid-cols-7 gap-px border-b border-gray-300 bg-gray-200 text-center text-xs font-semibold leading-6 text-gray-700 lg:flex-none">
							<div className="bg-white py-2">
								M<span className="sr-only sm:not-sr-only">on</span>
							</div>
							<div className="bg-white py-2">
								T<span className="sr-only sm:not-sr-only">ue</span>
							</div>
							<div className="bg-white py-2">
								W<span className="sr-only sm:not-sr-only">ed</span>
							</div>
							<div className="bg-white py-2">
								T<span className="sr-only sm:not-sr-only">hu</span>
							</div>
							<div className="bg-white py-2">
								F<span className="sr-only sm:not-sr-only">ri</span>
							</div>
							<div className="bg-white py-2">
								S<span className="sr-only sm:not-sr-only">at</span>
							</div>
							<div className="bg-white py-2">
								S<span className="sr-only sm:not-sr-only">un</span>
							</div>
						</div>
						<div className="flex bg-gray-200 text-xs leading-6 text-gray-700 lg:flex-auto">
							<div className="hidden w-full lg:grid lg:grid-cols-7 lg:grid-rows-6 lg:gap-px">
								{dates.map((day) => {
									const dayDate = new Date(day.date);
									return (
										<div
											key={day.date}
											className={classNames(
												day.isCurrentMonth
													? 'bg-white'
													: 'bg-gray-50 text-gray-500',
												'relative py-2 px-3',
											)}
										>
											<time
												dateTime={day.date}
												className={
													day.isToday
														? 'flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white'
														: undefined
												}
											>
												{dayDate.getDate()}
											</time>
											{day.events.length > 0 && (
												<ol className="mt-2">
													{day.events.slice(0, 2).map((event) => (
														<li key={event.id}>
															<a href={event.href} className="group flex">
																<p className="flex-auto truncate font-medium text-gray-900 group-hover:text-indigo-600">
																	{event.name}
																</p>
																<time
																	dateTime={event.datetime}
																	className="ml-3 hidden flex-none text-gray-500 group-hover:text-indigo-600 xl:block"
																>
																	{event.time}
																</time>
															</a>
														</li>
													))}
													{day.events.length > 2 && (
														<li className="text-gray-500">
															+ {day.events.length - 2} more
														</li>
													)}
												</ol>
											)}
										</div>
									);
								})}
							</div>
							<div className="isolate grid w-full grid-cols-7 grid-rows-6 gap-px lg:hidden">
								{dates.map((day) => {
									const dayDate = new Date(day.date);
									return (
										<button
											key={day.date}
											type="button"
											className={classNames(
												day.isCurrentMonth ? 'bg-white' : 'bg-gray-50',
												(day.isSelected || day.isToday) && 'font-semibold',
												day.isSelected && 'text-white',
												!day.isSelected && day.isToday && 'text-indigo-600',
												!day.isSelected &&
													day.isCurrentMonth &&
													!day.isToday &&
													'text-gray-900',
												!day.isSelected &&
													!day.isCurrentMonth &&
													!day.isToday &&
													'text-gray-500',
												'flex h-14 flex-col py-2 px-3 hover:bg-gray-100 focus:z-10',
											)}
										>
											<time
												dateTime={day.date}
												className={classNames(
													day.isSelected &&
														'flex h-6 w-6 items-center justify-center rounded-full',
													day.isSelected && day.isToday && 'bg-indigo-600',
													day.isSelected && !day.isToday && 'bg-gray-900',
													'ml-auto',
												)}
											>
												{dayDate.getDate()}
											</time>
											<span className="sr-only">
												{day.events.length} events
											</span>
											{day.events.length > 0 && (
												<span className="-mx-0.5 mt-auto flex flex-wrap-reverse">
													{day.events.map((event) => (
														<span
															key={event.id}
															className="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400"
														/>
													))}
												</span>
											)}
										</button>
									);
								})}
							</div>
						</div>
					</div>
					{settings.selectedDate?.events.length > 0 && (
						<div className="py-10 px-4 sm:px-6 lg:hidden">
							<ol className="divide-y divide-gray-100 overflow-hidden rounded-lg bg-white text-sm shadow ring-1 ring-black ring-opacity-5">
								{settings.selectedDate.events.map((event) => (
									<li
										key={event.id}
										className="group flex p-4 pr-6 focus-within:bg-gray-50 hover:bg-gray-50"
									>
										<div className="flex-auto">
											<p className="font-semibold text-gray-900">
												{event.name}
											</p>
											<time
												dateTime={event.datetime}
												className="mt-2 flex items-center text-gray-700"
											>
												<ClockIcon
													className="mr-2 h-5 w-5 text-gray-400"
													aria-hidden="true"
												/>
												{event.time}
											</time>
										</div>
										<a
											href={event.href}
											className="ml-6 flex-none self-center rounded-md border border-gray-300 bg-white py-2 px-3 font-semibold text-gray-700 opacity-0 shadow-sm hover:bg-gray-50 focus:opacity-100 group-hover:opacity-100"
										>
											Edit<span className="sr-only">, {event.name}</span>
										</a>
									</li>
								))}
							</ol>
						</div>
					)}
				</div>
			</div>

			{/* <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6">
				<h2 className="text-lg font-semibold text-gray-900">Upcoming events</h2>
				<div className="lg:grid lg:grid-cols-12 lg:gap-x-16">
					<div className="mt-10 text-center lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:mt-9 xl:col-start-9">
						<div className="flex items-center text-gray-900">
							<button
								type="button"
								className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
							>
								<span className="sr-only">Previous month</span>
								<ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
							</button>
							<div className="flex-auto font-semibold">
								{calDate.toLocaleString({
									month: 'long',
								})}
							</div>
							<button
								type="button"
								className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
							>
								<span className="sr-only">Next month</span>
								<ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
							</button>
						</div>
						<div className="mt-6 grid grid-cols-7 text-xs leading-6 text-gray-500">
							<div>M</div>
							<div>T</div>
							<div>W</div>
							<div>T</div>
							<div>F</div>
							<div>S</div>
							<div>S</div>
						</div>
						<div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
							{dates.map((day, dayIdx) => {
								const dayDate = new Date(day.date);

								return (
									<Link
										to={`/membership/events?day=${dayDate.getDate()}&month=${
											dayDate.getMonth() + 1
										}`}
										key={day.date}
										type="button"
										className={classNames(
											'py-1.5 hover:bg-gray-100 focus:z-10',
											day.isCurrentMonth ? 'bg-white' : 'bg-gray-50',
											(day.isSelected || day.isToday) && 'font-semibold',
											day.isSelected && 'text-white',
											!day.isSelected &&
												day.isCurrentMonth &&
												!day.isToday &&
												'text-gray-900',
											!day.isSelected &&
												!day.isCurrentMonth &&
												!day.isToday &&
												'text-gray-400',
											day.isToday && !day.isSelected && 'text-indigo-600',
											dayIdx === 0 && 'rounded-tl-lg',
											dayIdx === 6 && 'rounded-tr-lg',
											dayIdx === days.length - 7 && 'rounded-bl-lg',
											dayIdx === days.length - 1 && 'rounded-br-lg',
										)}
									>
										<time
											dateTime={day.date}
											className={classNames(
												'mx-auto flex h-7 w-7 items-center justify-center rounded-full',
												day.isSelected && day.isToday && 'bg-indigo-600',
												day.isSelected && !day.isToday && 'bg-gray-900',
											)}
										>
											{dayDate.getDate()}
										</time>
									</Link>
								);
							})}
						</div>
						<button
							type="button"
							className="focus:outline-none mt-8 w-full rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
						>
							Add event
						</button>
					</div>
					<ol className="mt-4 divide-y divide-gray-100 text-sm leading-6 lg:col-span-7 xl:col-span-8">
						{meetings.map((meeting) => (
							<li
								key={meeting.id}
								className="relative flex space-x-6 py-6 xl:static"
							>
								<img
									src={meeting.imageUrl}
									alt=""
									className="h-14 w-14 flex-none rounded-full"
								/>
								<div className="flex-auto">
									<h3 className="pr-10 font-semibold text-gray-900 xl:pr-0">
										{meeting.name}
									</h3>
									<dl className="mt-2 flex flex-col text-gray-500 xl:flex-row">
										<div className="flex items-start space-x-3">
											<dt className="mt-0.5">
												<span className="sr-only">Date</span>
												<CalendarIcon
													className="h-5 w-5 text-gray-400"
													aria-hidden="true"
												/>
											</dt>
											<dd>
												<time dateTime={meeting.datetime}>
													{meeting.date} at {meeting.time}
												</time>
											</dd>
										</div>
										<div className="mt-2 flex items-start space-x-3 xl:mt-0 xl:ml-3.5 xl:border-l xl:border-gray-400 xl:border-opacity-50 xl:pl-3.5">
											<dt className="mt-0.5">
												<span className="sr-only">Location</span>
												<LocationMarkerIcon
													className="h-5 w-5 text-gray-400"
													aria-hidden="true"
												/>
											</dt>
											<dd>{meeting.location}</dd>
										</div>
									</dl>
								</div>
								<Menu
									as="div"
									className="absolute top-6 right-0 xl:relative xl:top-auto xl:right-auto xl:self-center"
								>
									<div>
										<Menu.Button className="-m-2 flex items-center rounded-full p-2 text-gray-500 hover:text-gray-600">
											<span className="sr-only">Open options</span>
											<DotsHorizontalIcon
												className="h-5 w-5"
												aria-hidden="true"
											/>
										</Menu.Button>
									</div>

									<Transition
										as={Fragment}
										enter="transition ease-out duration-100"
										enterFrom="transform opacity-0 scale-95"
										enterTo="transform opacity-100 scale-100"
										leave="transition ease-in duration-75"
										leaveFrom="transform opacity-100 scale-100"
										leaveTo="transform opacity-0 scale-95"
									>
										<Menu.Items className="focus:outline-none absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
											<div className="py-1">
												<Menu.Item>
													{({ active }) => (
														<a
															href="#"
															className={classNames(
																active
																	? 'bg-gray-100 text-gray-900'
																	: 'text-gray-700',
																'block px-4 py-2 text-sm',
															)}
														>
															Edit
														</a>
													)}
												</Menu.Item>
												<Menu.Item>
													{({ active }) => (
														<a
															href="#"
															className={classNames(
																active
																	? 'bg-gray-100 text-gray-900'
																	: 'text-gray-700',
																'block px-4 py-2 text-sm',
															)}
														>
															Cancel
														</a>
													)}
												</Menu.Item>
											</div>
										</Menu.Items>
									</Transition>
								</Menu>
							</li>
						))}
					</ol>
				</div>
			</div> */}
		</>
	);
}
