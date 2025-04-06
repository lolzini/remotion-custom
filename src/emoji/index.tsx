import {AbsoluteFill, Still} from 'remotion';
import {z} from 'zod';
import {zTextarea} from '@remotion/zod-types';

import {FONTS, FONTS_ENUM} from '../utils';
import {SVGOutline} from '../components/svg-outline';

const schema = z.object({
	text: zTextarea(),
	fontName: FONTS_ENUM,
	fontSize: z.number().step(0.01),
	shadow: z.boolean(),
	strokeWidth: z.number().min(0).step(0.1).default(2),
});

const Component: React.FC<z.infer<typeof schema>> = ({
	text,
	fontName,
	fontSize,
	shadow,
	strokeWidth,
}) => {
	const fontFamily = FONTS[fontName];
	return (
		<>
			<AbsoluteFill className="items-center justify-center">
				<SVGOutline strokeWidth={strokeWidth} shadow={shadow}>
					<div
						style={{
							fontFamily,
							fontSize: `${fontSize}em`,
							color: 'currentColor',
						}}
					>
						{text}
					</div>
				</SVGOutline>
			</AbsoluteFill>
		</>
	);
};

export default () => (
	<Still
		id="emoji"
		component={Component}
		width={800}
		height={800}
		schema={schema}
		defaultProps={{
			text: '👉',
			fontName: 'NotoColorEmoji' as const,
			fontSize: 36,
			shadow: true,
			strokeWidth: 16,
		}}
	/>
);
