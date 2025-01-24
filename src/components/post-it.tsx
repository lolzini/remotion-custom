import {loadFont} from '@remotion/google-fonts/ShantellSans';
import clsx from 'clsx';

const {fontFamily} = loadFont();

export default function ({
	children,
	className = '',
	size = 'md',
	color = 'yellow',
}) {
	const sizeClasses = {
		sm: 'w-40 h-40 text-xl p-4',
		md: 'w-60 h-60 text-2xl p-6',
		lg: 'w-80 h-80 text-4xl p-8',
	};

	const colorClasses = {
		yellow: 'bg-[#FFFF99]',
		orange: 'bg-[#FFCC99]',
		green: 'bg-[#CCFF99]',
		blue: 'bg-[#99CCFF]',
		pink: 'bg-[#FF99CC]',
	};

	return (
		<article
			className={clsx(
				'shadow-md',
				sizeClasses[size],
				colorClasses[color],
				className,
			)}
			style={{fontFamily}}
		>
			{children}
		</article>
	);
}
