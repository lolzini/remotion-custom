import {AbsoluteFill, Composition, useCurrentFrame} from 'remotion';
import {z} from 'zod';

import {Component as CheckerBackground} from '../checker-bg';

const FPS = 30;
const DIF = FPS * 12;

const schema = z.object({
	multiplier: z.number(),
});

export const Component = ({multiplier}: z.infer<typeof schema>) => {
	const frame = useCurrentFrame();
	const value = (frame / (DIF * multiplier)) * 360;

	return (
		<>
			<CheckerBackground rotate={true} />
			<AbsoluteFill
				style={{
					backgroundColor: `hsl(${value}deg 100% 90%)`,
					mixBlendMode: 'exclusion',
				}}
			></AbsoluteFill>
		</>
	);
};

export default function () {
	return (
		<Composition
			id="rainbow-background"
			component={Component}
			width={1920}
			height={1080}
			fps={30}
			durationInFrames={DIF}
			schema={schema}
			defaultProps={{multiplier: 1}}
			calculateMetadata={({props}) => {
				return {durationInFrames: DIF * props.multiplier};
			}}
		/>
	);
}

// HELPERS ------------
