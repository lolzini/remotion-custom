import {AbsoluteFill, Composition, useCurrentFrame} from 'remotion';

const Component = () => {
	const frame = useCurrentFrame();
	const translateX = -frame;

	return (
		<>
			<AbsoluteFill className="bg-gradient-to-l from-gray-500 to-neutral-500" />
			<AbsoluteFill style={{transform: `translateX(-128px)`}}>
				<div
					className="flex h-full gap-[120px]"
					style={{transform: `translateX(${translateX}px)`}}
				>
					{Array(100)
						.fill(null)
						.map(() => (
							<Line />
						))}
				</div>
			</AbsoluteFill>
		</>
	);
};

function Line() {
	return (
		<div className="h-full min-w-[120px] -skew-x-[16deg] bg-white bg-opacity-25" />
	);
}

export default () => (
	<Composition
		id="line-bg"
		component={Component}
		width={1920}
		height={1080}
		durationInFrames={240}
		fps={60}
	/>
);
