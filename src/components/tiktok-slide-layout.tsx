import {DottedPaper} from './dotted-paper';

export default function TikTokSlideLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="bg-[#1a1a1a] w-full h-full relative">
			<main className=" absolute h-[656px] top-[154px] left-[35px] w-[472px] text-[#eeeeee] z-10">
				{children}
			</main>
			<DottedPaper className="invert z-0" r={0.5} />
		</div>
	);
}
