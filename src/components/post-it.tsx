import {loadFont} from '@remotion/google-fonts/ShantellSans';
import clsx from 'clsx';
import {ReactNode} from 'react';

const {fontFamily} = loadFont();

const sizeClasses = {
	sm: 'w-40 h-40 text-xl p-4',
	md: 'w-60 h-60 text-2xl p-6',
	lg: 'w-80 h-80 text-4xl p-8',
} as const;

type SizeKey = keyof typeof sizeClasses;

const colorClasses = {
	black: 'bg-[#fce19c]',
	gray: 'bg-[#c0cad3]',
	fuchsia: 'bg-[#dfb0f9]',
	purple: 'bg-[#db91fd]',
	blue: 'bg-[#8aa3ff]',
	lightBlue: 'bg-[#9bc4fd]',
	yellow: 'bg-[#fed49a]',
	orange: 'bg-[#faa475]',
	green: 'bg-[#6fc896]',
	lightGreen: 'bg-[#98d08a]',
	pink: 'bg-[#f7a5a1]',
	red: 'bg-[#fc8282]',
} as const;

type ColorKey = keyof typeof colorClasses;

interface Props {
	children: ReactNode;
	className?: string;
	size?: SizeKey;
	color?: ColorKey;
	center?: boolean;
}

export default function Box({
	children,
	className = '',
	size = 'md',
	color = 'black',
	center = false,
}: Props) {
	return (
		<article
			className={clsx(
				'font-bold shadow-md',
				sizeClasses[size],
				colorClasses[color],
				{'flex items-center justify-center text-center': center},
				className,
			)}
			style={{fontFamily}}
		>
			{children}
		</article>
	);
}
