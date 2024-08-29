import {Img, staticFile, Still} from 'remotion';
import {z} from 'zod';

const schema = z.object({
	dev: z.boolean(),
});

export default function TikTokSlide({
	id,
	width = 1080 / 2,
	height = 1920 / 2,
	children,
}: {
	id: string;
	width?: number;
	height?: number;
	children: React.ReactNode;
}) {
	return (
		<Still
			id={id}
			component={({dev}) => (
				<>
					{children}
					{dev ? (
						<Img
							className="absolute top-0 left-0 z-50"
							src={staticFile('/images/overlay_dark.png')}
							alt=""
						/>
					) : null}
				</>
			)}
			width={width}
			height={height}
			schema={schema}
			defaultProps={{dev: false}}
		/>
	);
}
