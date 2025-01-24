import {spring, useCurrentFrame, useVideoConfig} from 'remotion';

export default function Shrink({
	children,
	fromScale = 2,
	toScale = 1,
	durationInFrames = 30,
}) {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const scale = spring({
		frame,
		fps,
		config: {
			damping: 20,
			stiffness: 100,
		},
		durationInFrames,
		from: fromScale,
		to: toScale,
	});

	return (
		<div
			className="h-fit w-fit"
			style={{
				transformOrigin: '50% 50%',
				transform: `scale(${scale})`,
			}}
		>
			{children}
		</div>
	);
}
