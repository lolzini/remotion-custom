#!/usr/bin/env node

import {exec, spawn} from 'child_process';
import {join} from 'path';
import {fileURLToPath} from 'url';
import {dirname} from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const date = new Date().getTime();

const command = 'npx';

const OUTPUT_FOLDER = join(__dirname, 'out', 'schedule');
const FILE_PATH = join(OUTPUT_FOLDER, `stream-schedule_${date}.png`);

const args = [
	'remotion',
	'still',
	'./src/index.ts',
	'stream-schedule-v1',
	FILE_PATH,
	'--props=./out/schedule/props.json',
];

const process = spawn(command, args, {shell: true});

process.stdout.on('data', (data) => {
	console.log(`Output: ${data}`);
});

process.stderr.on('data', (data) => {
	console.error(`Stderr: ${data}`);
});

process.on('close', () => {
	exec(`explorer ${OUTPUT_FOLDER}`);
});
