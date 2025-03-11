import {AbsoluteFill, staticFile, Still} from 'remotion';
import {z} from 'zod';
import {zTextarea} from '@remotion/zod-types';

import {loadFont} from '@remotion/fonts';
import {loadFont as loadNotoColorEmoji} from '@remotion/google-fonts/NotoColorEmoji';

loadFont({
	family: 'Segoe UI Emoji',
	url: staticFile('fonts/self-compiled-flat.ttf'),
}).then(() => {
	console.log('Font loaded!');
});
const {fontFamily: NotoColorEmoji} = loadNotoColorEmoji();

const FONTS = {
	NotoColorEmoji,
	AppleEmoji: '-apple-system',
	SegoeUI: 'Segoe UI Emoji',
};

const schema = z.object({
	text: zTextarea(),
	fontName: z.enum(['NotoColorEmoji', 'AppleEmoji', 'SegoeUI'] as const),
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
