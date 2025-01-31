import {interpolate, useCurrentFrame} from 'remotion';

export default ({children}) => {
	const frame = useCurrentFrame();

	// Interpolate random values for x, y, and rotation based on the current frame
	const x = interpolate(frame, [0, 30], [-2, 2], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const y = interpolate(frame, [0, 30], [-2, 2], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const rotate = interpolate(frame, [0, 30], [-2, 2], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<div
			style={{
				transform: `translate(${x}px, ${y}px) rotate(${rotate}deg)`,
				display: 'inline-block',
			}}
		>
			{children}
		</div>
	);
};
