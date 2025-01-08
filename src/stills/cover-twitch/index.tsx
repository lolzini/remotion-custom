import clsx from 'clsx';
import {AbsoluteFill, Img, Still, staticFile} from 'remotion';

import {loadFont as loadCaveat} from '@remotion/google-fonts/CaveatBrush';

import './style.css';

const {fontFamily: fontCaveat} = loadCaveat();

export default function StreamSchedule() {
	return (
		<Still id="cover-twitch" component={Component} width={1200} height={480} />
	);
}

function Component() {
	return (
		<>
			<AbsoluteFill
				className={clsx('custom-background h-full w-full bg-white text-6xl')}
				style={{fontFamily: fontCaveat}}
			/>
		</>
	);
}
