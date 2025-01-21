import {AbsoluteFill, Img, Still, staticFile} from 'remotion';
import {z} from 'zod';
import clsx from 'clsx';
import {CSSProperties} from 'react';

import {loadFont as loadOne} from '@remotion/google-fonts/RockSalt';
import {loadFont as loadTwo} from '@remotion/google-fonts/CoveredByYourGrace';
import {loadFont as loadThree} from '@remotion/google-fonts/Mansalva';
import {loadFont as load4} from '@remotion/google-fonts/ShantellSans';
import {loadFont as loadEmoji} from '@remotion/google-fonts/NotoColorEmoji';

import {
	defaultProps,
	schema,
	getTimeZonesData,
	getDayOfTheWeek,
} from './helpers';

import './style.css';

const {fontFamily: fontCaveatBrush} = loadOne();
const {fontFamily: fontTwo} = loadTwo();
const {fontFamily: fontThree} = loadThree();
const {fontFamily: fontEmoji} = loadEmoji();
const {fontFamily: font4} = load4();

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
	const {darkMode, days, from, to} = props;

	return (
		<>
			<AbsoluteFill
				className={clsx(
					'custom-background h-full w-full',
					{'bg-slate-50': !darkMode},
					{
						'bg-[#1a1a1a]': darkMode,
					},
				)}
			/>

			<AbsoluteFill style={{fontFamily: fontCaveatBrush}}>
				<div className={clsx('flex h-full items-center justify-center')}>
					<section className="w-80" />
					<section className="mx-10 flex flex-col gap-10">
						{days.map((s, i) => (
							<Card
								key={i}
								{...s}
								label={getDayOfTheWeek(i).slice(0, 3)}
								darkMode={darkMode}
								style={{marginLeft: `${3 * i}rem`}}
							/>
						))}
					</section>
				</div>

				<Img
					className="char-shadow absolute -bottom-20 -left-64 h-[44rem]"
					src={staticFile('/images/hpp1.png')}
					alt=""
				/>
			</AbsoluteFill>

			<AbsoluteFill>
				<div
					className="absolute right-24 top-8 origin-center skew-x-12 bg-green-500 px-2 py-4 text-7xl font-bold shadow [writing-mode:vertical-lr]"
					style={{fontFamily: font4}}
				>
					<span
						className={clsx(
							'bg-gradient-to-l from-white via-zinc-100 to-zinc-300 bg-clip-text text-transparent',
							'bg-clip-text p-4 text-transparent',
						)}
					>
						<span className="capitalize">
							{from.toLocaleString('es-MX', {month: 'short'})}
						</span>{' '}
						{from.getDate()} - {to.getDate()}
					</span>
				</div>
			</AbsoluteFill>

			<AbsoluteFill>
				<div
					className="absolute left-10 top-[45%] flex -translate-y-1/2 flex-col gap-6 text-5xl font-bold"
					style={{fontFamily: fontThree}}
				>
					<p className="flex -skew-x-12 items-center gap-4">
						<svg
							stroke="currentColor"
							fill="currentColor"
							stroke-width="0"
							viewBox="0 0 448 512"
							height="64px"
							width="64px"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
						</svg>
						<span>lolzini_es</span>
					</p>
					<p className="ml-8 flex -skew-x-12 items-center gap-4">
						<svg
							stroke="currentColor"
							fill="currentColor"
							stroke-width="0"
							viewBox="0 0 512 512"
							height="64px"
							width="64px"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M391.17,103.47H352.54v109.7h38.63ZM285,103H246.37V212.75H285ZM120.83,0,24.31,91.42V420.58H140.14V512l96.53-91.42h77.25L487.69,256V0ZM449.07,237.75l-77.22,73.12H294.61l-67.6,64v-64H140.14V36.58H449.07Z" />
						</svg>
						<span>lolzini_es</span>
					</p>
				</div>
			</AbsoluteFill>
		</>
	);
}

function Card({
	activity,
	startTime,
	style,
	label,
	darkMode,
}: {
	activity: string;
	startTime?: string;
	style?: CSSProperties;
	label: string;
	darkMode?: boolean;
}) {
	return (
		<article
			className="relative flex max-w-fit items-center gap-3 text-8xl"
			style={style}
		>
			<div
				className={clsx(
					'h-fit w-6 -skew-x-12 py-2 text-white text-opacity-0',
					{'bg-slate-700': !darkMode},
					{'bg-pink-700': darkMode},
					{
						'!bg-zinc-700': activity.toLowerCase() === 'offline',
					},
					{
						'!bg-slate-900': activity.toLowerCase() === 'finalizado',
					},
				)}
			>
				x
			</div>
			<div
				className={clsx(
					'h-fit min-w-[24rem] -skew-x-12 px-10 py-2 text-right text-white',
					{'bg-slate-700': !darkMode},
					{'bg-pink-700': darkMode},
					{
						'!bg-zinc-700': activity.toLowerCase() === 'offline',
					},
					{
						'!bg-slate-900': activity.toLowerCase() === 'finalizado',
					},
				)}
			>
				<span
					className={clsx(
						'bg-gradient-to-t from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent',
						'bg-clip-text p-4 text-transparent',
						'text-shadow',
					)}
				>
					{label}
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
						'text-shadow',
						{'mb-2': activity.toLowerCase() === 'offline'},
					)}
				>
					{activity}
				</p>
				{startTime ? <StartTimes time={startTime} /> : null}
			</div>
			{activity ? <Graphic activity={activity} /> : null}
		</article>
	);
}

function StartTimes({time}: {time: string}) {
	const convertedTimes = getTimeZonesData(time);

	return (
		<div className="mt-2 flex gap-2">
			{convertedTimes.map(({time, emoji}, i) => {
				return (
					<p
						key={`times-${i}`}
						className="-skew-x-12 bg-slate-950 px-4 py-1 text-[2rem]"
						style={{fontFamily: fontThree}}
					>
						<span>{time}</span>{' '}
						<span className="w-fit" style={{fontFamily: fontEmoji}}>
							{emoji}
						</span>
					</p>
				);
			})}
		</div>
	);
}

function Graphic({activity}: {activity: string}) {
	if (activity.toLowerCase() === 'minecraft') {
		return (
			<div className="absolute right-0 max-w-24">
				<Img
					className="char-shadow"
					style={{'--shadow-size': '0.05rem'}}
					src={staticFile('images/steve_archer.png')}
				/>
			</div>
		);
	}
	if (activity.toLowerCase() === 'programación') {
		return (
			<div className="absolute -right-20 max-w-80">
				<Img
					className="char-shadow"
					style={{'--shadow-size': '0.05rem'}}
					src={staticFile('images/lolzini_work.png')}
				/>
			</div>
		);
	}

	return null;
}
