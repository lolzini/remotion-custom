import {spring, useCurrentFrame, useVideoConfig} from 'remotion';

export default ({children, className, fromY = 100, toY = 0, style = {}}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const translateY = spring({
		frame,
		fps,
		config: {
			damping: 8,
			stiffness: 120,
			mass: 0.5,
		},
		from: fromY,
		to: toY,
	});

	return (
		<div
			className={className}
			style={{
				position: 'absolute',
				top: '50%',
				left: '50%',
				transform: `translate(-50%, -50%) translateY(${translateY}%)`,
				...style,
			}}
		>
			{children}
		</div>
	);
};
