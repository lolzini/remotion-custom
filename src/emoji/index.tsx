import {AbsoluteFill, Still} from 'remotion';
import {z} from 'zod';
import {zTextarea} from '@remotion/zod-types';

import {FONTS, FONTS_ENUM} from '../utils';

const schema = z.object({
	text: zTextarea(),
	fontName: FONTS_ENUM,
	fontSize: z.number().step(0.01),
	shadow: z.boolean(),
});

const Component: React.FC<z.infer<typeof schema>> = ({
	text,
	fontName,
	fontSize,
	shadow,
}) => {
	const fontFamily = FONTS[fontName];
	return (
		<>
			<AbsoluteFill
				className="items-center justify-center"
				style={{fontFamily, fontSize: `${fontSize}em`}}
			>
				<p
					style={{
						filter: shadow
							? 'drop-shadow(0.016em 0 #fff) drop-shadow(-0.016em 0 #fff) drop-shadow(0 0.016em #fff) drop-shadow(0 -0.016em #fff) drop-shadow(0.016em 0.016em #fff) drop-shadow(-0.016em -0.016em #fff) drop-shadow(-0.016em 0.016em #fff) drop-shadow(0.016em -0.016em #fff) drop-shadow(0.2rem 0.2rem 0.001em rgba(0, 0, 0, 0.3))'
							: 'drop-shadow(0.016em 0 #fff) drop-shadow(-0.016em 0 #fff) drop-shadow(0 0.016em #fff) drop-shadow(0 -0.016em #fff) drop-shadow(0.016em 0.016em #fff) drop-shadow(-0.016em -0.016em #fff) drop-shadow(-0.016em 0.016em #fff) drop-shadow(0.016em -0.016em #fff)',
					}}
				>
					{text}
				</p>
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
		}}
	/>
);
