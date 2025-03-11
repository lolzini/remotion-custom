import {AbsoluteFill, Still} from 'remotion';
import {z} from 'zod';
import {zTextarea} from '@remotion/zod-types';

import {FONTS, FONTS_ENUM} from '../utils';

const schema = z.object({
	text: zTextarea(),
	fontName: FONTS_ENUM,
	fontSize: z.number().step(0.01),
});

const Component: React.FC<z.infer<typeof schema>> = ({
	text,
	fontName,
	fontSize,
}) => {
	const fontFamily = FONTS[fontName];
	return (
		<>
			<AbsoluteFill
				className="items-center justify-center"
				style={{fontFamily, fontSize: `${fontSize}em`}}
			>
				<p className="custom-stroke">{text}</p>
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
		}}
	/>
);
