import {z} from 'zod';

export const daySchema = z.object({
	activity: z.string(),
	startTime: z.string().optional(),
	endTime: z.string().optional(),
});

export const schema = z.object({
	darkMode: z.boolean(),
	days: z.array(daySchema).length(7),
});

export const defaultProps = {
	darkMode: false,
	days: [
		{
			activity: 'Programación',
			dayOfWeek: 'Lunes',
			startTime: '1900',
		},
		{
			activity: 'Programación',
			dayOfWeek: 'Martes',
			startTime: '1900',
		},
		{
			activity: 'Programación',
			dayOfWeek: 'Miércoles',
			startTime: '1900',
		},
		{
			activity: 'Programación',
			dayOfWeek: 'Jueves',
			startTime: '1900',
		},
		{
			activity: 'Minecraft',
			dayOfWeek: 'Viernes',
			startTime: '2200',
		},
		{
			activity: 'OFFLINE',
			dayOfWeek: 'Sábado',
		},
		{
			activity: 'OFFLINE',
			dayOfWeek: 'Domingo',
		},
	],
};

export function convertMilitaryTimeToHHMM(militaryTime: string) {
	if (militaryTime.length !== 4 || isNaN(Number(militaryTime)))
		return ['00', '00'];

	const hours = militaryTime.slice(0, 2);
	const minutes = militaryTime.slice(2);

	return [hours, minutes];
}

function getConvertedTime(time: string, timeZone: string) {
	const [hour, minute] = convertMilitaryTimeToHHMM(time);

	const date = new Date();
	date.setUTCHours(parseInt(hour, 10) + 6, parseInt(minute, 10), 0, 0);

	return new Intl.DateTimeFormat('es-MX', {
		timeZone,
		hour: '2-digit',
		minute: '2-digit',
		hour12: false,
	}).format(date);
}

export const getTimeZonesData = (time: string) => {
	return Object.keys(emojis).map((tz) => ({
		time: getConvertedTime(time, tz),
		emoji: emojis[tz],
	}));
};

const emojis = {
	'America/Mexico_City': '🇲🇽',
	'America/Argentina/Buenos_Aires': '🇦🇷🇨🇱',
	'America/Lima': '🇵🇪🇨🇴',
	'Europe/Madrid': '🇪🇸',
};

export const getDayOfTheWeek = (index: number) =>
	['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'][
		index
	];
