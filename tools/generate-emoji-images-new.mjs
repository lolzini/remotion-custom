import fs from 'node:fs';
import {bundle} from '@remotion/bundler';
import {renderStill} from '@remotion/renderer';
import {webpackOverride} from './webpack-override.mjs';
import os from 'node:os';
import {
	Worker,
	isMainThread,
	parentPort,
	workerData,
} from 'node:worker_threads';

const BATCH_SIZE = 5;
const MAX_WORKERS = Math.max(1, os.cpus().length - 1);

if (isMainThread) {
	const emojis = JSON.parse(fs.readFileSync('./tools/emojis.json', 'utf-8'));
	let bundled;

	async function initBundle() {
		bundled = await bundle({
			entryPoint: 'src/index.ts',
			webpackOverride,
		});
		return bundled;
	}

	async function processBatch(batch, workerIndex) {
		return new Promise((resolve, reject) => {
			const worker = new Worker(new URL(import.meta.url), {
				workerData: {batch, bundleUrl: bundled},
			});

			worker.on('message', (msg) => {
				if (msg.type === 'progress') {
					console.log(`Worker ${workerIndex + 1}: ${msg.message}`);
				}
			});

			worker.on('error', reject);
			worker.on('exit', (code) => {
				if (code !== 0)
					reject(new Error(`Worker stopped with exit code ${code}`));
				else resolve();
			});
		});
	}

	async function main() {
		try {
			console.log('Initializing bundle...');
			await initBundle();

			const batches = [];
			for (let i = 0; i < emojis.length; i += BATCH_SIZE) {
				batches.push(emojis.slice(i, i + BATCH_SIZE));
			}

			console.log(
				`Processing ${emojis.length} emojis in ${batches.length} batches using ${MAX_WORKERS} workers`,
			);

			for (let i = 0; i < batches.length; i += MAX_WORKERS) {
				const currentBatches = batches.slice(i, i + MAX_WORKERS);
				const workers = currentBatches.map((batch, index) =>
					processBatch(batch, index),
				);
				await Promise.all(workers);
			}

			console.log('✅ All emojis processed successfully!');
		} catch (error) {
			console.error('❌ Error general:', error);
		}
	}

	main();
} else {
	async function renderEmoji(emoji, bundleUrl) {
		const emojiCode = emoji.codePointAt(0).toString(16).toUpperCase();
		const fileName = `${emoji}_${emojiCode}`;
		const outputPath = `./out/emojis/${fileName}.png`;

		const props = {
			text: emoji,
			fontName: 'NotoColorEmoji',
			fontSize: 36,
			shadow: true,
			strokeWidth: 16,
		};

		await renderStill({
			composition: {
				id: 'emoji',
				width: 800,
				height: 800,
				fps: 1,
				durationInFrames: 1,
				props,
			},
			serveUrl: bundleUrl,
			output: outputPath,
			inputProps: props,
			imageFormat: 'png',
			chromiumOptions: {gl: 'angle'},
		});
	}

	async function processWorkerBatch() {
		const {batch, bundleUrl} = workerData;

		for (const emoji of batch) {
			try {
				await renderEmoji(emoji, bundleUrl);
				parentPort.postMessage({
					type: 'progress',
					message: `Processed ${emoji}`,
				});
			} catch (error) {
				console.error(`❌ Error processing ${emoji}:`, error);
			}
		}
	}

	processWorkerBatch()
		.then(() => process.exit(0))
		.catch((error) => {
			console.error('Worker error:', error);
			process.exit(1);
		});
}
