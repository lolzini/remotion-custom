import {spring, useCurrentFrame, useVideoConfig} from 'remotion';

export default function Shrink({
	children,
	fromScale = 2,
	toScale = 1,
	durationInFrames = 30,
	reverse = false, // Add reverse prop
}) {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	// Determine the from and to values based on reverse prop
	const [startScale, endScale] = reverse
		? [toScale, fromScale]
		: [fromScale, toScale];

	const scale = spring({
		frame,
		fps,
		config: {
			damping: 20,
			stiffness: 100,
		},
		durationInFrames,
		from: startScale,
		to: endScale,
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
