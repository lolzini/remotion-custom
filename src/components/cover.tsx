import {staticFile} from 'remotion';
import {Img} from 'remotion';

const LOGOS = {
	js: '/images/js-logo.png',
	html: '/images/html-logo.png',
	css: '/images/css-logo.png',
	'buenas-practicas': '/images/smile-plus.png',
};

export default function Cover({title, logo}: {title: string; logo: string}) {
	return (
		<div className="h-full w-full flex flex-col gap-8 justify-center items-center">
			{logo ? (
				<Img className="h-32 text-white" src={staticFile(LOGOS[logo])} />
			) : null}
			<h1 className="font-display text-6xl text-center">{title}</h1>
		</div>
	);
}
