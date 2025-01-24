import clsx from 'clsx';
import {loadFont} from '@remotion/google-fonts/ShantellSans';
import {ReactNode} from 'react';

const {fontFamily} = loadFont();

const colors = {
	black: 'bg-[#E8E8E8] border-[#1D1D1D]',
	gray: 'bg-[#ECEEF0] border-[#9FA8B2]',
	fuchsia: 'bg-[#F5EAFA] border-[#e085f4]',
	purple: 'bg-[#ECDCF2] border-[#ae3ec9]',
	blue: 'bg-[#dce1f8] border-[#4465e9]',
	lightBlue: 'bg-[#ddedfa] border-[#4ba1f1]',
	yellow: 'bg-[#f9f0e6] border-[#efac4c]',
	orange: 'bg-[#f8e2d4] border-[#e16919]',
	green: 'bg-[#d3e9e3] border-[#099268]',
	lightGreen: 'bg-[#dbf0e0] border-[#75c188]',
	pink: 'bg-[#f4dadb] border-[#f87777]',
	red: 'bg-[#f4dadb] border-[#e03131]',
} as const;

type ColorKey = keyof typeof colors;

interface Props {
	children: ReactNode;
	className?: string;
	color?: ColorKey;
}

export default function Rect({
	children,
	className = '',
	color = 'black',
}: Props) {
	return (
		<div
			className={clsx(
				'min-w-fit max-w-fit rounded-md border-[6px] border-black bg-zinc-300 p-6 text-4xl font-bold',
				colors[color],
				className,
			)}
			style={{fontFamily}}
		>
			{children}
		</div>
	);
}
