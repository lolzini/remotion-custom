import {
	AbsoluteFill,
	Img,
	staticFile,
	Still,
	CalculateMetadataFunction,
} from 'remotion';
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
				filepath: 'lolzini/talking-closed.png',
				strokeWidth: 4,
				shadow: true,
			}}
			calculateMetadata={calculateImageMetadata}
		/>
	);
}

// HELPERS ------------

// Helper function to load image and get dimensions
const loadImageDimensions = (
	imagePath: string,
): Promise<{width: number; height: number}> => {
	return new Promise((resolve, reject) => {
		const image = new Image();

		image.onload = () => {
			resolve({
				width: image.naturalWidth,
				height: image.naturalHeight,
			});
		};

		image.onerror = (error) => {
			reject(new Error(`Failed to load image: ${imagePath}`));
		};

		// Set the source to trigger loading
		image.src = imagePath;
	});
};

// Calculate metadata to get image dimensions
const calculateImageMetadata: CalculateMetadataFunction<
	z.infer<typeof schema>
> = async ({props}) => {
	try {
		const imagePath = staticFile(props.filepath);
		const dimensions = await loadImageDimensions(imagePath);
		return {
			width: dimensions.width,
			height: dimensions.height,
		};
	} catch (error) {
		console.error('Error loading image dimensions:', error);

		// Fallback to default dimensions if image loading fails
		return {
			width: 2048,
			height: 2048,
		};
	}
};
