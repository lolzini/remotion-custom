import {spring, useCurrentFrame, useVideoConfig} from 'remotion';

export default function Dissolve({
	children,
	className = '',
	fromOpacity = 0,
	toOpacity = 1,
	durationInFrames = 30,
	reverse = false,
}) {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const startOpacity = reverse ? toOpacity : fromOpacity;
	const endOpacity = reverse ? fromOpacity : toOpacity;

	const opacity = spring({
		frame,
		fps,
		config: {
			damping: 20,
			stiffness: 100,
		},
		durationInFrames,
		from: startOpacity,
		to: endOpacity,
	});

	return (
		<div
			className={className}
			style={{
				opacity,
			}}
		>
			{children}
		</div>
	);
}
