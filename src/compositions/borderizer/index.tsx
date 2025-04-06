import {AbsoluteFill, Img, staticFile, Still} from 'remotion';
import {z} from 'zod';
import {SVGOutline} from '../../components/svg-outline';

const schema = z.object({
	filepath: z.string(),
	strokeWidth: z.number(),
	shadow: z.boolean(),
});

export const Component = ({
	filepath,
	strokeWidth,
	shadow,
}: z.infer<typeof schema>) => {
	return (
		<>
			<AbsoluteFill>
				<SVGOutline strokeWidth={strokeWidth} shadow={shadow}>
					<Img src={staticFile(filepath)} />
				</SVGOutline>
			</AbsoluteFill>
		</>
	);
};

export default function () {
	return (
		<Still
			id="borderizer"
			component={Component}
			width={2048}
			height={2048}
			schema={schema}
			defaultProps={{
				filepath: 'drawings/2025_drawing.png',
				strokeWidth: 16,
				shadow: true,
			}}
		/>
	);
}

// HELPERS ------------
