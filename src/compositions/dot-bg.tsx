import clsx from 'clsx';
import {AbsoluteFill, Composition, useCurrentFrame} from 'remotion';

const Component = () => {
	const frame = useCurrentFrame();
	const translateX = -frame;

	return (
		<>
			<AbsoluteFill className="bg-gradient-to-bl from-neutral-50 to-neutral-200" />
			<AbsoluteFill className="h-full w-full">
				<section className="-translate-x-[240px] -translate-y-[240px] rotate-12">
					<div style={{transform: `translateX(${translateX}px)`}}>
						{Array(32)
							.fill(null)
							.map((_, i) => (
								<div
									className={clsx('flex w-fit gap-[60px]', {
										'ml-[60px]': i % 2 === 0,
									})}
								>
									{Array(80)
										.fill(null)
										.map(() => (
											<Dot />
										))}
								</div>
							))}
					</div>
				</section>
			</AbsoluteFill>
		</>
	);
};

function Dot() {
	return (
		<div className="h-[60px] w-[60px] scale-[20%] rounded-full bg-black bg-opacity-5" />
	);
}

export default () => (
	<Composition
		id="dot-bg"
		component={Component}
		width={1920}
		height={1080}
		durationInFrames={240}
		fps={60}
	/>
);
