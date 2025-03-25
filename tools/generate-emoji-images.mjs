import {execSync} from 'node:child_process';
import fs from 'node:fs';

const emojis = JSON.parse(fs.readFileSync('./tools/emojis.json', 'utf-8'));

const generateConfigFile = (emoji) => {
	const config = {
		text: emoji,
		fontName: 'NotoColorEmoji',
		fontSize: 36,
		shadow: true,
	};

	const configPath = `./tools/emoji-config-${Date.now()}.json`;
	fs.writeFileSync(configPath, JSON.stringify(config));
	return configPath;
};

const renderEmoji = (emoji) => {
	const emojiCode = emoji.codePointAt(0).toString(16).toUpperCase();
	const fileName = `${emoji}_${emojiCode}`;
	const outputPath = `./out/emojis/${fileName}.png`;

	// Verificar si el emoji ya existe
	if (fs.existsSync(outputPath)) {
		console.log(`⏩ Saltando ${emoji} - ya existe`);
		return true;
	}

	const configPath = generateConfigFile(emoji);
	const command = `npx remotion still emoji ${outputPath} --props=${configPath} --gl=angle`;

	try {
		execSync(command);
		fs.unlinkSync(configPath); // Limpiamos el archivo de configuración
		return true;
	} catch (error) {
		fs.unlinkSync(configPath); // Aseguramos la limpieza incluso en caso de error
		throw error;
	}
};

for (const emoji of emojis) {
	console.log(`Renderizando ${emoji}...`);
	try {
		renderEmoji(emoji);
		const progress = (
			((emojis.indexOf(emoji) + 1) / emojis.length) *
			100
		).toFixed(1);
		console.log(`🔄 Progreso: ${progress}%`);
		console.log(`✅ (${emojis.indexOf(emoji) + 1}/${emojis.length}) ${emoji}`);
	} catch (e) {
		console.error(`❌ Error con ${emoji}:`, e);
	}
}
