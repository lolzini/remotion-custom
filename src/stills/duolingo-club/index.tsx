import clsx from 'clsx';
import {AbsoluteFill, Img, Still, staticFile} from 'remotion';

import {loadFont as loadCaveat} from '@remotion/google-fonts/CaveatBrush';

import './style.css';

const {fontFamily: fontCaveat} = loadCaveat();

export default function StreamSchedule() {
	return (
		<Still
			id="duolingo-club"
			component={Component}
			width={1080}
			height={1080}
		/>
	);
}

function Component(props) {
	return (
		<>
			<AbsoluteFill
				className={clsx('custom-background h-full w-full bg-white text-6xl')}
				style={{fontFamily: fontCaveat}}
			>
				<div className="flex h-full flex-col items-center justify-center p-10 text-center">
					<p className="text-9xl">Únete al Club de Idiomas</p>

					<br />
					<p>¿Te falta motivación? ¡Te ayudamos a seguir adelante!</p>
					<br />
					<p>Dentro de nuestra comunidad de Discord:</p>
					<br />
					<p className="border-b-4 border-pink-700">iniz.lol/discord</p>
					<br />
					<Img className="w-64" src={staticFile('images/duolingo-fire.png')} />
					<p>¡No pierdas la racha!</p>
				</div>
			</AbsoluteFill>
			<AbsoluteFill>
				<Img
					className="absolute bottom-10 right-10 w-40 rounded-full"
					src={staticFile('images/pp.png')}
				/>
			</AbsoluteFill>
		</>
	);
}
