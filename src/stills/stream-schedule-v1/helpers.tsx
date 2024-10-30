import {z} from 'zod';

export const daySchema = z.object({
	activity: z.string(),
	dayOfWeek: z.string(),
	startTime: z.string().optional(),
	endTime: z.string().optional(),
});

export const schema = z.object({
	monday: daySchema,
	tuesday: daySchema,
	wednesday: daySchema,
	thursday: daySchema,
	friday: daySchema,
	saturday: daySchema,
	sunday: daySchema,
});

export const defaultProps = {
	monday: {
		activity: 'Programación',
		dayOfWeek: 'Lunes',
		startTime: '19:00',
	},
	tuesday: {
		activity: 'Tacos',
		dayOfWeek: 'Martes',
		startTime: '19:00',
	},
	wednesday: {
		activity: 'Ceniza',
		dayOfWeek: 'Miércoles',
		startTime: '19:00',
	},
	thursday: {
		activity: 'Juebebes',
		dayOfWeek: 'Jueves',
		startTime: '19:00',
	},
	friday: {
		activity: 'Viernes Social',
		dayOfWeek: 'Viernes',
		startTime: '19:00',
	},
	saturday: {
		activity: 'OFFLINE',
		dayOfWeek: 'Sábado',
	},
	sunday: {
		activity: 'Misa',
		dayOfWeek: 'Domingo',
		startTime: '19:00',
	},
};
