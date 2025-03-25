import {bundle} from '@remotion/bundler';
import {renderStill} from '@remotion/renderer';

import fs from 'node:fs';
import path from 'path';

import {webpackOverride} from './webpack-override.mjs';

const vocabulary = JSON.parse(
	fs.readFileSync('./src/stills/english-vocabulary/vocab-1.json', 'utf-8'),
);

const bundled = await bundle({
	entryPoint: path.join(process.cwd(), './src/index.ts'),
	webpackOverride,
});

async function renderVocabCard(entry) {
	console.log(`Renderizando ${entry}...`);
	const fileName = `${entry.word.toLowerCase()}`;
	const outputPath = `./out/vocabulary/${fileName}.png`;

	await renderStill({
		composition: {
			id: 'english-vocabulary',
			width: 1080,
			height: 1080,
			fps: 1,
			durationInFrames: 1,
			defaultProps: {
				word: entry.word,
				translation: entry.translation,
				emoji: entry.emoji,
				fontName: 'NotoColorEmoji',
			},
			props: {
				word: entry.word,
				translation: entry.translation,
				emoji: entry.emoji,
				fontName: 'NotoColorEmoji',
			},
		},
		serveUrl: bundled,
		output: outputPath,
		imageFormat: 'png',
	});
}

try {
	for (const entry of vocabulary) {
		console.log(`Renderizando ${entry.word}...`);
		try {
			await renderVocabCard(entry);
			const progress = (
				((vocabulary.indexOf(entry) + 1) / vocabulary.length) *
				100
			).toFixed(1);
			console.log(`🔄 Progreso: ${progress}%`);
			console.log(
				`✅ (${vocabulary.indexOf(entry) + 1}/${vocabulary.length}) ${entry.word}`,
			);
		} catch (e) {
			console.error(`❌ Error con ${entry.word}:`, e);
		}
	}
} catch (error) {
	console.error('❌ Error general:', error);
}
