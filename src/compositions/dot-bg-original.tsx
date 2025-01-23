import clsx from 'clsx';
import {AbsoluteFill, Composition, useCurrentFrame} from 'remotion';
import {z} from 'zod';

const schema = z.object({rotate: z.boolean()});

const Component: React.FC<z.infer<typeof schema>> = ({rotate}) => {
	const frame = useCurrentFrame();
	const translateX = -frame;

	return (
		<>
			<AbsoluteFill className="bg-gradient-to-bl from-neutral-50 to-neutral-200" />
			<AbsoluteFill className="h-full w-full">
				<section
					className={clsx('-translate-x-[240px] -translate-y-[240px]', {
						'rotate-12': rotate,
					})}
				>
					<div style={{transform: `translate(${translateX}px)`}}>
						{Array(32)
							.fill(null)
							.map((_, i) => (
								<div className={clsx('flex')}>
									{Array(80)
										.fill(null)
										.map(() => (
											<div className="flex min-h-[60px] min-w-[60px] items-center justify-center">
												<Dot />
											</div>
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
		<div className="h-[6px] w-[6px] rounded-full bg-black bg-opacity-10" />
	);
}

export default () => (
	<Composition
		id="dot-bg-original"
		component={Component}
		width={1920}
		height={1080}
		durationInFrames={240}
		schema={schema}
		defaultProps={{rotate: true}}
		fps={60}
	/>
);
