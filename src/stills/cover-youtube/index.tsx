import clsx from 'clsx';
import {AbsoluteFill, Img, Still, staticFile} from 'remotion';

import {loadFont as loadCaveat} from '@remotion/google-fonts/CaveatBrush';

import './style.css';

const {fontFamily: fontCaveat} = loadCaveat();

export default function StreamSchedule() {
	return (
		<Still
			id="cover-youtube"
			component={Component}
			width={2560}
			height={1440}
		/>
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
