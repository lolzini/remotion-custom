import clsx from 'clsx';
import {AbsoluteFill, Img, staticFile, Still} from 'remotion';
import {z} from 'zod';
import {loadFont} from '@remotion/google-fonts/CaveatBrush';
import {loadFont as loadInter} from '@remotion/google-fonts/Inter';

import Dot from '../components/dot';
import NoiseFilter from './noise-filter';

import './style.css';

const {fontFamily} = loadFont();
const {fontFamily: inter} = loadInter();

const TITLE_SIZE = 258;
const TITLE_LINE_HEIGHT = 1;
const TITLE_X = 300;
const TITLE_Y = -100;

const IMAGE_SIZE = 200;
const IMAGE_X = -560;
const IMAGE_Y = 256;

const schema = z.object({
	noise: z.boolean().default(true),
	title: z.object({
		text: z.string(),
		size: z.number().default(TITLE_SIZE),
		lineHeight: z.number().step(0.01).default(1),
		x: z.number().default(0),
		y: z.number().default(0),
	}),
	image: z.object({
		size: z.number().default(100),
		x: z.number().default(0),
		y: z.number().default(0),
	}),
});

const Component: React.FC<z.infer<typeof schema>> = ({noise, title, image}) => {
	return (
		<>
			<AbsoluteFill className="bg-gradient-to-bl from-neutral-50 to-neutral-200" />
			<AbsoluteFill className="h-full w-full">
				<section className={clsx('-translate-x-[240px] -translate-y-[240px]')}>
					<div>
						{Array(32)
							.fill(null)
							.map(() => (
								<div className={clsx('flex')}>
									{Array(80)
										.fill(null)
										.map(() => (
											<div className="flex min-h-[60px] min-w-[60px] items-center justify-center">
												<Dot size={9} />
											</div>
										))}
								</div>
							))}
					</div>
				</section>
			</AbsoluteFill>
			{noise ? (
				<AbsoluteFill>
					<NoiseFilter transparency={0.06} numOctaves={2} />
				</AbsoluteFill>
			) : null}
			<AbsoluteFill style={{fontFamily}}>
				<h1
					className="custom-stroke text-center"
					style={{
						position: 'absolute',
						left: '50%',
						top: '50%',
						transform: `translate(calc(-50% + ${title.x}px), calc(-50% + ${title.y}px))`,
						fontSize: `${title.size}px`,
						lineHeight: title.lineHeight,
						maxWidth: '80%',
						whiteSpace: 'pre-line',
					}}
				>
					{title.text}
				</h1>
			</AbsoluteFill>
			<AbsoluteFill>
				<Img
					className="custom-stroke-lg"
					src={staticFile('lolzini/avatar--speaking.png')}
					style={{
						position: 'absolute',
						left: '50%',
						top: '50%',
						transform: `translate(calc(-50% + ${image.x}px), calc(-50% + ${image.y}px))`,
						width: `${image.size}%`,
						height: 'auto',
					}}
				/>

				<div
					className="m-5 flex w-fit items-center gap-2 rounded-md bg-neutral-600 px-4 py-1 text-9xl font-bold text-white shadow-lg"
					style={{fontFamily: inter}}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="6rem"
						height="6rem"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						className="lucide lucide-history"
					>
						<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
						<path d="M3 3v5h5" />
						<path d="M12 7v5l4 2" />
					</svg>
					<span>LIVE</span>
				</div>
			</AbsoluteFill>
		</>
	);
};

export default () => (
	<Still
		id="thumbnail"
		component={Component}
		width={1920}
		height={1080}
		schema={schema}
		defaultProps={{
			noise: true,
			title: {
				text: 'Mi título aquí',
				lineHeight: TITLE_LINE_HEIGHT,
				size: TITLE_SIZE,
				x: TITLE_X,
				y: TITLE_Y,
			},
			image: {
				size: IMAGE_SIZE,
				x: IMAGE_X,
				y: IMAGE_Y,
			},
		}}
	/>
);
