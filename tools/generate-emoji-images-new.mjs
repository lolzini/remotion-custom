import fs from 'node:fs';
import {bundle} from '@remotion/bundler';
import {renderStill} from '@remotion/renderer';
import {webpackOverride} from './webpack-override.mjs';

const emojis = JSON.parse(fs.readFileSync('./tools/emojis.json', 'utf-8'));

async function renderEmoji(emoji) {
	const emojiCode = emoji.codePointAt(0).toString(16).toUpperCase();
	const fileName = `${emoji}_${emojiCode}`;
	const outputPath = `./out/emojis/${fileName}.png`;

	const props = {
		text: emoji,
		fontName: 'NotoColorEmoji',
		fontSize: 36,
		shadow: true,
		strokeWidth: 8,
	};

	const bundled = await bundle({
		entryPoint: 'src/index.ts',
		webpackOverride,
	});

	await renderStill({
		composition: {
			id: 'emoji',
			width: 800,
			height: 800,
			fps: 1,
			durationInFrames: 1,
			props,
		},
		serveUrl: bundled,
		output: outputPath,
		inputProps: props,
		imageFormat: 'png',
		chromiumOptions: {gl: 'angle'},
	});
}

try {
	for (const emoji of emojis) {
		console.log(`Renderizando ${emoji}...`);
		try {
			await renderEmoji(emoji);
			const progress = (
				((emojis.indexOf(emoji) + 1) / emojis.length) *
				100
			).toFixed(1);
			console.log(`🔄 Progreso: ${progress}%`);
			console.log(
				`✅ (${emojis.indexOf(emoji) + 1}/${emojis.length}) ${emoji}`,
			);
		} catch (e) {
			console.error(`❌ Error con ${emoji}:`, e);
		}
	}
} catch (error) {
	console.error('❌ Error general:', error);
}
