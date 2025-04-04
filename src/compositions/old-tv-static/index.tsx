import {
	AbsoluteFill,
	Composition,
	useCurrentFrame,
	interpolate,
	Series,
	staticFile,
	Audio,
} from 'remotion';
import {z} from 'zod';

const FPS = 16;
const DIF = FPS;

const s = (n: number) => Math.floor(n * FPS);

const schema = z.object({});

export const Component = ({}: z.infer<typeof schema>) => {
	return (
		<>
			<Background />
			<AbsoluteFill>
				<Series>
					<Series.Sequence durationInFrames={s(0.25)}>
						<AnimatedTVStatic
							startFrequency={0.4}
							endFrequency={0.8}
							startOpacity={0}
							endOpacity={1}
							durationInFrames={s(0.5)}
						/>
					</Series.Sequence>
					<Series.Sequence durationInFrames={s(0.5)}>
						<AnimatedTVStatic
							startFrequency={0.4}
							endFrequency={0.8}
							startOpacity={1}
							endOpacity={1}
							durationInFrames={s(1)}
						/>
					</Series.Sequence>
					<Series.Sequence durationInFrames={s(0.25)}>
						<AnimatedTVStatic
							startFrequency={0.8}
							endFrequency={0.4}
							startOpacity={1}
							endOpacity={0}
							durationInFrames={s(0.5)}
						/>
					</Series.Sequence>
				</Series>
			</AbsoluteFill>
			<AbsoluteFill>
				<Series>
					<Series.Sequence durationInFrames={s(0.25)}>
						<AnimatedVignette
							color={'#000000'}
							startOpacity={0}
							endOpacity={0.5}
							durationInFrames={s(0.5)}
						/>
					</Series.Sequence>
					<Series.Sequence durationInFrames={s(0.5)}>
						<Vignette color={'#000000'} opacity={0.5} />
					</Series.Sequence>
					<Series.Sequence durationInFrames={s(0.25)}>
						<AnimatedVignette
							color={'#000000'}
							startOpacity={0.5}
							endOpacity={0}
							durationInFrames={s(0.5)}
						/>
					</Series.Sequence>
				</Series>
			</AbsoluteFill>
			<Audio
				src={staticFile('audio/sfx_white-noise.wav')}
				volume={(f) =>
					interpolate(
						f,
						[0, s(0.25), s(0.5), s(0.75), s(1)],
						[0, 0.5, 0.5, 0.5, 0],
						{
							extrapolateLeft: 'clamp',
							extrapolateRight: 'clamp',
						},
					)
				}
			/>
		</>
	);
};

export default function () {
	return (
		<Composition
			id="old-tv-static"
			component={Component}
			width={1920}
			height={1080}
			fps={FPS}
			durationInFrames={DIF}
			schema={schema}
			defaultProps={{
				baseFrequency: 0.8,
				frequencyRange: 0.1,
				animationDuration: 0.01,
				opacity: 0.8,
				vignetteColor: '#000000',
				vignetteStrength: 0.7,
			}}
		/>
	);
}

// HELPERS ------------

function Background() {
	const f = useCurrentFrame();
	return (
		<AbsoluteFill
			className="bg-black"
			style={{
				opacity: interpolate(
					f,
					[0, s(0.25), s(0.5), s(0.75), s(1)],
					[0, 1, 1, 1, 0],
					{
						extrapolateLeft: 'clamp',
						extrapolateRight: 'clamp',
					},
				),
			}}
		></AbsoluteFill>
	);
}

function TVStatic({frequency, opacity}: {frequency: number; opacity: number}) {
	return (
		<svg width="100%" height="100%">
			<defs>
				<filter id="noise">
					<feTurbulence
						type="fractalNoise"
						baseFrequency={frequency}
						numOctaves="4"
						stitchTiles="stitch"
						result="noise"
					/>
					<feColorMatrix type="saturate" values="0" result="grayscale" />
				</filter>
			</defs>
			<rect width="100%" height="100%" filter="url(#noise)" opacity={opacity} />
		</svg>
	);
}

function AnimatedTVStatic({
	startFrequency = 0.8,
	endFrequency = 0.8,
	startOpacity = 0,
	endOpacity = 1,
	durationInFrames = 30,
}: {
	startFrequency?: number;
	endFrequency?: number;
	startOpacity?: number;
	endOpacity: number;
	durationInFrames: number;
}) {
	const frame = useCurrentFrame();
	const interpolatedOpacity = interpolate(
		frame,
		[0, durationInFrames],
		[startOpacity, endOpacity],
		{
			extrapolateRight: 'clamp',
		},
	);

	const interpolatedFrequency = interpolate(
		frame,
		[0, durationInFrames],
		[startFrequency, endFrequency],
		{
			extrapolateRight: 'clamp',
		},
	);

	return (
		<TVStatic frequency={interpolatedFrequency} opacity={interpolatedOpacity} />
	);
}

function Vignette({color, opacity}: {color: string; opacity: number}) {
	return (
		<svg
			width="100%"
			height="100%"
			style={{position: 'absolute', top: 0, left: 0, pointerEvents: 'none'}}
		>
			<defs>
				<radialGradient id="vignette-gradient" cx="50%" cy="50%" r="50%">
					<stop offset="0%" stopColor={color} stopOpacity="0" />
					<stop offset="100%" stopColor={color} stopOpacity={opacity} />
				</radialGradient>
			</defs>
			<rect width="100%" height="100%" fill="url(#vignette-gradient)" />
		</svg>
	);
}

function AnimatedVignette({
	color,
	startOpacity = 0,
	endOpacity,
	durationInFrames = 30,
}: {
	color: string;
	startOpacity?: number;
	endOpacity: number;
	durationInFrames: number;
}) {
	const frame = useCurrentFrame();
	const interpolated = interpolate(
		frame,
		[0, durationInFrames],
		[startOpacity, endOpacity],
		{
			extrapolateRight: 'clamp',
		},
	);

	return <Vignette color={color} opacity={interpolated} />;
}
