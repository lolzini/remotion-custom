import {staticFile} from 'remotion';
import {loadFont} from '@remotion/fonts';

import {loadFont as loadNotoColorEmoji} from '@remotion/google-fonts/NotoColorEmoji';
import {z} from 'zod';

const {fontFamily: NotoColorEmoji} = loadNotoColorEmoji();

const SEGOE_UI_EMOJI = 'Segoe UI Emoji';
const APPLE_COLOR_EMOJI = '-apple-system';

loadFont({
	family: SEGOE_UI_EMOJI,
	url: staticFile('fonts/self-compiled-flat.ttf'),
}).then(() => {
	console.log('Font loaded!');
});

loadFont({
	family: APPLE_COLOR_EMOJI,
	url: staticFile('fonts/AppleColorEmoji.ttf'),
}).then(() => {
	console.log('Font loaded!');
});

export const FONTS = {
	NotoColorEmoji,
	AppleColorEmoji: APPLE_COLOR_EMOJI,
	SegoeUIEmoji: SEGOE_UI_EMOJI,
};

export const FONTS_ENUM = z.enum([
	'NotoColorEmoji',
	'AppleColorEmoji',
	'SegoeUIEmoji',
]);
