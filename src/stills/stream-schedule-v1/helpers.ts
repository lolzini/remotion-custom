import {z} from 'zod';

// Define the day schema
export const daySchema = z.object({
	activity: z.string(),
	startTime: z.string().optional(),
	endTime: z.string().optional(),
});

// Function to get the Monday of the current week
function getMondayOfCurrentWeek() {
	const today = new Date();
	const day = today.getDay();
	const diff = today.getDate() - day + (day === 0 ? -6 : 1); // Adjust when day is Sunday
	const monday = new Date(today.setDate(diff));
	monday.setHours(0, 0, 0, 0); // Set time to midnight
	return monday;
}

// Function to get the Sunday of the current week
function getSundayOfCurrentWeek() {
	const monday = getMondayOfCurrentWeek();
	const sunday = new Date(monday);
	sunday.setDate(monday.getDate() + 6);
	sunday.setHours(23, 59, 59, 999); // Set time to end of the day
	return sunday;
}

// Calculate the 'from' and 'to' dates
const fromDate = getMondayOfCurrentWeek();
const toDate = getSundayOfCurrentWeek();

// Define the main schema
export const schema = z.object({
	darkMode: z.boolean(),
	from: z.date(),
	to: z.date(),
	days: z.array(daySchema).length(7),
});

// Define the default properties
export const defaultProps = {
	darkMode: false,
	from: fromDate,
	to: toDate,
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
			activity: 'Programación',
			dayOfWeek: 'Viernes',
			startTime: '1900',
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
