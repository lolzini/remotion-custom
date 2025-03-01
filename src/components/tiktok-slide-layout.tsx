import clsx from 'clsx';
import {DottedPaper} from './dotted-paper';

export default function TikTokSlideLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<div
				className={clsx(
					'bg-gradient-to-bl from-neutral-50 to-neutral-200',
					'relative h-full w-full',
				)}
			>
				<main className="absolute left-[35px] top-[154px] z-10 h-[656px] w-[472px]">
					{children}
				</main>
			</div>
			<DottedPaper className="z-0 opacity-20 invert" r={2} />
		</>
	);
}
