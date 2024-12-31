import {AbsoluteFill, Composition, useCurrentFrame} from 'remotion';

const Component = () => {
	const frame = useCurrentFrame();
	const translateX = -frame;

	return (
		<>
			<AbsoluteFill className="bg-gradient-to-t from-neutral-50 to-neutral-200" />
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
		<div className="h-full min-w-[120px] -skew-x-[16deg] bg-black bg-opacity-5" />
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
