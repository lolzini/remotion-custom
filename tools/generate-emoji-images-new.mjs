import fs from 'node:fs';
import {bundle} from '@remotion/bundler';
import {renderStill} from '@remotion/renderer';
import {webpackOverride} from '../src/webpack-override.js';

const emojis = JSON.parse(fs.readFileSync('./tools/emojis.json', 'utf-8'));

async function renderEmoji(emoji) {
	const emojiCode = emoji.codePointAt(0).toString(16).toUpperCase();
	const fileName = `${emoji}_${emojiCode}`;
	const outputPath = `./out/emojis/${fileName}.png`;

	const bundled = await bundle({
		entryPoint: './src/emoji/index.tsx',
		webpackOverride,
	});

	await renderStill({
		composition: 'emoji',
		serveUrl: bundled,
		output: outputPath,
		inputProps: {
			text: emoji,
			fontName: 'NotoColorEmoji',
			fontSize: 36,
			shadow: true,
		},
		imageFormat: 'png',
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
