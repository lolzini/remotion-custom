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
		startTime: '1900',
	},
	tuesday: {
		activity: 'Programación',
		dayOfWeek: 'Martes',
		startTime: '1900',
	},
	wednesday: {
		activity: 'Programación',
		dayOfWeek: 'Miércoles',
		startTime: '1900',
	},
	thursday: {
		activity: 'Programación',
		dayOfWeek: 'Jueves',
		startTime: '1900',
	},
	friday: {
		activity: 'Minecraft',
		dayOfWeek: 'Viernes',
		startTime: '2200',
	},
	saturday: {
		activity: 'OFFLINE',
		dayOfWeek: 'Sábado',
	},
	sunday: {
		activity: 'OFFLINE',
		dayOfWeek: 'Domingo',
	},
};
