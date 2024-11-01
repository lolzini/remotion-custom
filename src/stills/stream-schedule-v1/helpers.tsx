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
		activity: 'TEST Programación',
		dayOfWeek: 'Lunes',
		startTime: '1900',
	},
	tuesday: {
		activity: 'TEST Tacos',
		dayOfWeek: 'Martes',
		startTime: '1900',
	},
	wednesday: {
		activity: 'TEST Ceniza',
		dayOfWeek: 'Miércoles',
		startTime: '1900',
	},
	thursday: {
		activity: 'TEST Juebebes',
		dayOfWeek: 'Jueves',
		startTime: '1900',
	},
	friday: {
		activity: 'TEST Viernes Social',
		dayOfWeek: 'Viernes',
		startTime: '2200',
	},
	saturday: {
		activity: 'TEST OFFLINE',
		dayOfWeek: 'Sábado',
	},
	sunday: {
		activity: 'TEST Minecraft',
		dayOfWeek: 'Domingo',
		startTime: '0600',
	},
};
