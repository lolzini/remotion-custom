import clsx from 'clsx';
import {AbsoluteFill, Img, staticFile, Still} from 'remotion';
import {z} from 'zod';
import {zTextarea} from '@remotion/zod-types';
import {loadFont} from '@remotion/google-fonts/CaveatBrush';
import {loadFont as loadInter} from '@remotion/google-fonts/Inter';

import NoiseFilter from './noise-filter';
import BackgroundDots from './background-dots';
import BackgroundLine from './background-line';
import BackgroundChecker from './background-checker';
import {FONTS, FONTS_ENUM} from '../utils';

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

const AvatarSource = z.enum(['speaking', 'thinking', 'mad']);

const BackgroundType = z.enum(['transparent', 'dots', 'line', 'checker']);

const LiveIndicatorState = z.enum(['off', 'live', 'replay']);

const schema = z.object({
	background: z.object({
		pattern: BackgroundType.default('dots'),
		noise: z.boolean().default(true),
	}),
	liveIndicator: LiveIndicatorState.default('live'),
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
	emoji: z.object({
		text: zTextarea(),
		fontName: FONTS_ENUM,
		size: z.number().default(100),
		x: z.number().default(0),
		y: z.number().default(0),
		flipX: z.boolean().default(false),
		rotate: z.number().default(0),
	}),
});

const Component: React.FC<z.infer<typeof schema>> = ({
	background,
	liveIndicator,
	avatarSource,
	title,
	image,
	emoji,
}) => {
	return (
		<>
			{background.pattern !== 'transparent' ? (
				<>
					<GradientBackground />
					<PatternBackground background={background.pattern} />
					<NoiseLayer noise={background.noise} />
				</>
			) : null}
			<TitleLayer title={title} />
			<AvatarLayer image={image} avatarSource={avatarSource} />
			<LiveIndicator liveIndicator={liveIndicator} />
			<EmojiLayer emoji={emoji} />
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
			liveIndicator: 'live',
			avatarSource: 'speaking',
			title: {
				text: 'Mi título\naquí',
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
			emoji: {
				text: '😯',
				fontName: 'NotoColorEmoji',
				size: 32,
				x: -632,
				y: 0,
				flipX: false,
				rotate: 0,
			},
		}}
	/>
);

const BACKGROUNDS = {
	transparent: () => <div />,
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

const LiveIndicator = ({
	liveIndicator,
}: {
	liveIndicator: z.infer<typeof LiveIndicatorState>;
}) => {
	if (liveIndicator === 'off') return null;

	return (
		<AbsoluteFill>
			<div
				className={clsx(
					'm-5 flex w-fit items-center gap-2 rounded-md px-4 py-1 text-9xl font-bold shadow-lg',
					liveIndicator === 'live'
						? 'bg-red-600 text-white'
						: 'bg-neutral-600 text-white',
				)}
				style={{fontFamily: inter}}
			>
				{liveIndicator === 'replay' && (
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
};

const EmojiLayer = ({emoji}: {emoji: z.infer<typeof schema>['emoji']}) => (
	<AbsoluteFill>
		<span
			className="custom-stroke"
			style={{
				position: 'absolute',
				left: '50%',
				top: '50%',
				fontFamily: FONTS[emoji.fontName],
				fontSize: `${emoji.size}rem`,
				transform: `translate(calc(-50% + ${emoji.x}px), calc(-50% + ${emoji.y}px)) scaleX(${emoji.flipX ? -1 : 1}) rotate(${emoji.rotate}deg)`,
			}}
		>
			{emoji.text}
		</span>
	</AbsoluteFill>
);
