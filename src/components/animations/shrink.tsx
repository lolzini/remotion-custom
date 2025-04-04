import {Easing, interpolate, useCurrentFrame} from 'remotion';

export default function Shrink({
	children,
	fromScale = 2,
	toScale = 1,
	durationInFrames = 30,
	delay = 0,
	reverse = false,
	transformOrigin = '100% 100%',
	transformX = 0,
	transformY = 0,
}) {
	const frame = useCurrentFrame();

	// Only start the animation after the delay
	const adjustedFrame = Math.max(0, frame - delay);

	// Determine the from and to values based on reverse prop
	const [startScale, endScale] = reverse
		? [toScale, fromScale]
		: [fromScale, toScale];

	const scale = interpolate(
		adjustedFrame,
		[0, durationInFrames],
		[startScale, endScale],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
			easing: Easing.elastic(),
		},
	);

	return (
		<div
			className="h-fit w-fit"
			style={{
				transformOrigin,
				transform: `scale(${scale}) translate(${transformX}px, ${transformY}px)`,
			}}
		>
			{children}
		</div>
	);
}
