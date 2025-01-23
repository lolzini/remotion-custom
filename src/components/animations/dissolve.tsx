import {spring, useCurrentFrame, useVideoConfig} from 'remotion';

export default function Dissolve({
	children,
	className,
	fromOpacity = 0,
	toOpacity = 1,
	durationInFrames = 30,
	style = {},
}) {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const opacity = spring({
		frame,
		fps,
		config: {
			damping: 20,
			stiffness: 100,
		},
		durationInFrames,
		from: fromOpacity,
		to: toOpacity,
	});

	return (
		<div
			className={className}
			style={{
				position: 'absolute',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%, -50%)',
				opacity,
				...style,
			}}
		>
			{children}
		</div>
	);
}
