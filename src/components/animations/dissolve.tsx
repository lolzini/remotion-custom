import {Easing, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';

export default function Dissolve({
	children,
	className = '',
	fromOpacity = 0,
	toOpacity = 1,
	durationInFrames = 30,
	reverse = false,
	delay = 0,
}) {
	const frame = useCurrentFrame();

	const startOpacity = reverse ? toOpacity : fromOpacity;
	const endOpacity = reverse ? fromOpacity : toOpacity;

	const opacity = interpolate(
		Math.max(0, frame - delay),
		[0, durationInFrames],
		[startOpacity, endOpacity],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
			easing: Easing.elastic(),
		},
	);

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
