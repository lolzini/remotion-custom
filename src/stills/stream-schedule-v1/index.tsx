import {AbsoluteFill, Img, Still, staticFile} from 'remotion';
import {z} from 'zod';
import clsx from 'clsx';
import {loadFont as loadOne} from '@remotion/google-fonts/RockSalt';
import {loadFont as loadTwo} from '@remotion/google-fonts/CoveredByYourGrace';
import {loadFont as loadThree} from '@remotion/google-fonts/Mansalva';
import {loadFont as loadEmoji} from '@remotion/google-fonts/NotoColorEmoji';

import {defaultProps, daySchema, schema} from './helpers';

import './style.css';

const {fontFamily: fontCaveatBrush} = loadOne();
const {fontFamily: fontTwo} = loadTwo();
const {fontFamily: fontThree} = loadThree();
const {fontFamily: fontEmoji} = loadEmoji();

export default function StreamSchedule() {
	return (
		<Still
			id="stream-schedule-v1"
			component={Component}
			width={1920}
			height={1080}
			schema={schema}
			defaultProps={defaultProps}
		/>
	);
}

function Component(props: z.infer<typeof schema>) {
	const schedule = Object.values<z.infer<typeof daySchema>>(props);

	return (
		<>
			<AbsoluteFill className="custom-background h-full w-full bg-[#1a1a1a]" />

			<AbsoluteFill style={{fontFamily: fontCaveatBrush}}>
				<div className={clsx('flex h-full items-center justify-center')}>
					<section className="w-80" />
					<section className="mx-10 flex flex-col gap-10">
						{schedule.map((s, i) => (
							<Card {...s} style={{marginLeft: `${3 * i}rem`}} />
						))}
					</section>
				</div>

				<AbsoluteFill>
					<Img
						className="char-shadow absolute -bottom-20 -left-64 h-[44rem]"
						src={staticFile('/images/hpp1.png')}
						alt=""
					/>
				</AbsoluteFill>
			</AbsoluteFill>
		</>
	);
}

function Card({dayOfWeek, activity, startTime, endTime, style}) {
	return (
		<article className="flex items-center gap-3 text-8xl" style={style}>
			<div
				className={clsx(
					'h-fit w-6 -skew-x-12 bg-pink-700 py-2 text-white text-opacity-0',
				)}
			>
				x
			</div>
			<div
				className={clsx(
					'h-fit min-w-[24rem] -skew-x-12 bg-pink-700 px-10 py-2 text-right text-white',
					{
						'bg-zinc-700': activity.toLowerCase() === 'offline',
					},
				)}
			>
				<span
					className={clsx(
						'bg-gradient-to-tl from-zinc-400 via-zinc-200 to-white bg-clip-text text-transparent',
						'bg-clip-text p-4 text-transparent',
					)}
				>
					{dayOfWeek.slice(0, 3)}
				</span>
			</div>
			<div
				className="-ml-10 flex max-h-24 min-w-[58rem] flex-col items-center justify-center bg-neutral-800 px-20 text-white"
				style={{fontFamily: fontTwo}}
			>
				<p
					className={clsx(
						'bg-gradient-to-tl from-zinc-400 via-zinc-200 to-white bg-clip-text text-transparent',
						'z-50 -mb-6 bg-clip-text p-4 text-8xl font-bold uppercase text-transparent',
						{'mb-2': activity.toLowerCase() === 'offline'},
					)}
				>
					{activity}
				</p>
				{startTime ? (
					<div className="mt-2 flex gap-2">
						{Object.keys(convertedTimes).map((key) => {
							return (
								<p
									className="-skew-x-12 bg-black bg-opacity-50 px-4 py-1 text-[2rem]"
									style={{fontFamily: fontThree}}
								>
									<span>{convertedTimes[key]}</span>{' '}
									<span className="w-fit" style={{fontFamily: fontEmoji}}>
										{key}
									</span>
								</p>
							);
						})}
					</div>
				) : null}
			</div>
		</article>
	);
}

function convertToMultipleTimeZonesWithFlags(timeString, timeZones) {
	function convertTimeToTimeZone(timeString, timeZone) {
		const [hour, minute] = timeString.split(':');

		// Create a date object in CST (Central Standard Time, UTC-6)
		const date = new Date();
		date.setUTCHours(parseInt(hour) + 6, parseInt(minute), 0, 0); // Offset by +6 hours to UTC

		// Format the date in the target time zone
		return new Intl.DateTimeFormat('es-ES', {
			timeZone,
			hour: '2-digit',
			minute: '2-digit',
			hour12: false,
		}).format(date);
	}

	function cityToFlagEmoji(city) {
		const flags = {
			'Mexico City': '🇲🇽',
			'Buenos Aires': '🇦🇷🇨🇱',
			Lima: '🇵🇪🇨🇴',
			Madrid: '🇪🇸',
		};
		return flags[city] || '';
	}

	const results = {};
	for (const [city, timeZone] of Object.entries(timeZones)) {
		const flag = cityToFlagEmoji(city);
		results[flag] = convertTimeToTimeZone(timeString, timeZone);
	}
	return results;
}

// Example usage
const timeCST = '19:00';
const timeZones = {
	'Mexico City': 'America/Mexico_City',
	'Buenos Aires': 'America/Argentina/Buenos_Aires',
	Lima: 'America/Lima',
	Madrid: 'Europe/Madrid',
};

const convertedTimes = convertToMultipleTimeZonesWithFlags(timeCST, timeZones);
