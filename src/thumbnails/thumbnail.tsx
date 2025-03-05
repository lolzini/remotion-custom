import clsx from 'clsx';
import {AbsoluteFill, Img, staticFile, Still} from 'remotion';
import {loadFont} from '@remotion/google-fonts/CaveatBrush';
import {loadFont as loadInter} from '@remotion/google-fonts/Inter';
import {z} from 'zod';
import {zTextarea} from '@remotion/zod-types';

import NoiseFilter from './noise-filter';
import BackgroundDots from './background-dots';
import BackgroundLine from './background-line';
import BackgroundChecker from './background-checker';

import './style.css';

const {fontFamily} = loadFont();
const {fontFamily: inter} = loadInter();

const TITLE_SIZE = 258;
const TITLE_LINE_HEIGHT = 1;
const TITLE_X = 300;
const TITLE_Y = -100;

const IMAGE_SIZE = 200;
const IMAGE_X = -640;
const IMAGE_Y = 320;

const AvatarSource = z.enum(['speaking', 'thinking']);

const BackgroundType = z.enum(['dots', 'line', 'checker']);

const schema = z.object({
	background: z.object({
		pattern: BackgroundType.default('dots'),
		noise: z.boolean().default(true),
	}),
	liveIndicator: z.boolean().default(true),
	avatarSource: AvatarSource.default('speaking'),
	title: z.object({
		text: zTextarea(),
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

const Component: React.FC<z.infer<typeof schema>> = ({
	background,
	liveIndicator,
	avatarSource,
	title,
	image,
}) => {
	return (
		<>
			<GradientBackground />
			<PatternBackground background={background.pattern} />
			<NoiseLayer noise={background.noise} />
			<TitleLayer title={title} />
			<AvatarLayer image={image} avatarSource={avatarSource} />
			<LiveIndicator liveIndicator={liveIndicator} />
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
			background: {
				pattern: 'dots',
				noise: true,
			},
			liveIndicator: true,
			avatarSource: 'speaking',
			title: {
				text: 'Mi título\naquí\n🎯',
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

const BACKGROUNDS = {
	dots: BackgroundDots,
	line: BackgroundLine,
	checker: BackgroundChecker,
};

const GradientBackground = () => {
	return (
		<AbsoluteFill className="bg-gradient-to-bl from-neutral-50 to-neutral-200" />
	);
};

const PatternBackground = ({
	background,
}: {
	background: z.infer<typeof BackgroundType>; // pattern type
}) => {
	const Background = BACKGROUNDS[background];
	return (
		<AbsoluteFill className="h-full w-full">
			<Background />
		</AbsoluteFill>
	);
};

const NoiseLayer = ({noise}: {noise: boolean}) => {
	if (!noise) return null;
	return (
		<AbsoluteFill>
			<NoiseFilter transparency={0.06} numOctaves={2} />
		</AbsoluteFill>
	);
};

const TitleLayer = ({title}: {title: z.infer<typeof schema>['title']}) => (
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
				width: 'max-content',
				whiteSpace: 'pre-line',
			}}
		>
			{title.text}
		</h1>
	</AbsoluteFill>
);

const AvatarLayer = ({
	image,
	avatarSource,
}: {
	image: z.infer<typeof schema>['image'];
	avatarSource: z.infer<typeof AvatarSource>;
}) => (
	<AbsoluteFill>
		<Img
			className="custom-stroke-lg"
			src={staticFile(`lolzini/avatar--${avatarSource}.png`)}
			style={{
				position: 'absolute',
				left: '50%',
				top: '50%',
				transform: `translate(calc(-50% + ${image.x}px), calc(-50% + ${image.y}px))`,
				width: `${image.size}%`,
				height: 'auto',
			}}
		/>
	</AbsoluteFill>
);

const LiveIndicator = ({liveIndicator}: {liveIndicator: boolean}) => (
	<AbsoluteFill>
		<div
			className={clsx(
				'm-5 flex w-fit items-center gap-2 rounded-md px-4 py-1 text-9xl font-bold shadow-lg',
				liveIndicator ? 'bg-red-600 text-white' : 'bg-neutral-600 text-white',
			)}
			style={{fontFamily: inter}}
		>
			{!liveIndicator && (
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
			)}
			<span>LIVE</span>
		</div>
	</AbsoluteFill>
);
