import {AbsoluteFill, Still} from 'remotion';
import {z} from 'zod';
import {loadFont as loadShantellSans} from '@remotion/google-fonts/ShantellSans';

const {fontFamily: ShantellSans} = loadShantellSans();

import CrossSection from '../../patterns/cross-section';
import {FONTS, FONTS_ENUM} from '../../utils';

const schema = z.object({
	word: z.string(),
	translation: z.string(),
	emoji: z.string(),
	fontName: FONTS_ENUM,
});

const Component: React.FC<z.infer<typeof schema>> = ({
	word,
	translation,
	emoji,
	fontName,
}) => {
	const fontFamily = FONTS[fontName];
	return (
		<>
			<AbsoluteFill className="size-full bg-gradient-to-bl from-neutral-50 to-neutral-200">
				<CrossSection color="#00000016" background="#ffffff16" />
			</AbsoluteFill>
			<AbsoluteFill className="items-center justify-center">
				<p className="custom-stroke text-[24rem]" style={{fontFamily}}>
					{emoji}
				</p>
				<div
					className="flex flex-col items-center justify-center gap-10 font-medium text-stone-900/90"
					style={{fontFamily: ShantellSans}}
				>
					<p className="text-9xl">{word}</p>
					<p className="text-9xl">{translation}</p>
				</div>
			</AbsoluteFill>
		</>
	);
};

export default () => (
	<Still
		id="english-vocabulary"
		component={Component}
		width={1080}
		height={1080}
		schema={schema}
		defaultProps={{
			word: 'Thinking',
			translation: 'Pensando',
			emoji: '🤔',
			fontName: 'NotoColorEmoji',
		}}
	/>
);
