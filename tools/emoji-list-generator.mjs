// Generar lista de emojis en UTF-8
function isEmoji(char) {
	const codePoint = char.codePointAt(0);
	return (
		(codePoint >= 0x1f600 && codePoint <= 0x1f64f) || // Emoticonos
		(codePoint >= 0x1f300 && codePoint <= 0x1f5ff) || // Símbolos y pictogramas misceláneos
		(codePoint >= 0x1f680 && codePoint <= 0x1f6ff) || // Transporte y símbolos de mapa
		(codePoint >= 0x1f700 && codePoint <= 0x1f77f) || // Alquimia (símbolos adicionales)
		(codePoint >= 0x1f780 && codePoint <= 0x1f7ff) || // Símbolos geométricos adicionales
		(codePoint >= 0x1f800 && codePoint <= 0x1f8ff) || // Flechas suplementarias
		(codePoint >= 0x1f900 && codePoint <= 0x1f9ff) || // Símbolos y pictogramas suplementarios
		(codePoint >= 0x1fa00 && codePoint <= 0x1fa6f) || // Objetos y símbolos adicionales
		(codePoint >= 0x1fa70 && codePoint <= 0x1faff) || // Símbolos y pictogramas adicionales
		(codePoint >= 0x2600 && codePoint <= 0x26ff) || // Diversos símbolos
		(codePoint >= 0x2700 && codePoint <= 0x27bf) || // Dingbats
		(codePoint >= 0xfe00 && codePoint <= 0xfe0f) // Variación de caracteres
	);
}

function isModernEmoji(char) {
	const codePoint = char.codePointAt(0);
	return (
		(codePoint >= 0x1f600 && codePoint <= 0x1f64f) || // Emoticonos
		(codePoint >= 0x1f300 && codePoint <= 0x1f5ff) || // Pictogramas y símbolos modernos
		(codePoint >= 0x1f680 && codePoint <= 0x1f6ff) || // Transporte y mapa
		(codePoint >= 0x1f900 && codePoint <= 0x1f9ff) || // Símbolos y pictogramas suplementarios
		(codePoint >= 0x1fa00 && codePoint <= 0x1fa6f) || // Objetos y símbolos adicionales
		(codePoint >= 0x1fa70 && codePoint <= 0x1faff) // Símbolos y pictogramas adicionales
	);
}

function generateEmojiList() {
	const emojis = [];
	for (let i = 0x1f600; i <= 0x1faff; i++) {
		const emoji = String.fromCodePoint(i);
		if (isModernEmoji(emoji)) {
			emojis.push(emoji);
		}
	}
	return emojis;
}

const emojiList = generateEmojiList();
import fs from 'node:fs';
fs.writeFileSync('./emojis.json', JSON.stringify(emojiList, null, 2));
