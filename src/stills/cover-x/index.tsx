import clsx from 'clsx';
import {AbsoluteFill, Img, Still, staticFile} from 'remotion';

import {loadFont as loadCaveat} from '@remotion/google-fonts/CaveatBrush';

import './style.css';

const {fontFamily: fontCaveat} = loadCaveat();

export default function StreamSchedule() {
	return <Still id="cover-x" component={Component} width={1500} height={500} />;
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
