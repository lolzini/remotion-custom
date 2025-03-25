import {AbsoluteFill, Sequence, Series} from 'remotion';
import {z} from 'zod';
import {FaYoutube, FaTwitch, FaTiktok} from 'react-icons/fa';
import {loadFont as loadCaveat} from '@remotion/google-fonts/CaveatBrush';
import {useCurrentFrame, spring} from 'remotion';

import './style.css';

const {fontFamily: Caveat} = loadCaveat();

const width = 1200;
const height = 800;
const fps = 60;
const durationInFrames = fps * 60;

const schema = z.object({});

function Component({channel = 'lolzini_es'}) {
	const frame = useCurrentFrame();
	const animationProgress = spring({
		frame,
		fps,
		config: {damping: 20, mass: 0.5},
		durationInFrames: 30,
	});

	// Heartbeat animation starts after initial animation (frame 30)
	const heartBeatProgress = spring({
		frame: frame - 30,
		fps,
		config: {
			damping: 10,
			mass: 1,
			stiffness: 100,
			overshootClamping: false,
		},
		durationInFrames: 15,
	});

	return (
		<Series>
			<Series.Sequence durationInFrames={fps * 0.5}>
				<AbsoluteFill className="items-center justify-center">
					<p className="flex items-center gap-10 text-[12rem]">
						<FaYoutube
							className="text-[#ff0000]"
							style={{
								opacity: animationProgress,
								transform: `translateY(${(1 - animationProgress) * 100}%) 
							scale(${1 + heartBeatProgress * 0.2})`,
							}}
						/>
						<span
							className="socials_custom-stroke hidden"
							style={{fontFamily: Caveat}}
						>
							{channel}
						</span>
					</p>
				</AbsoluteFill>
			</Series.Sequence>
		</Series>
	);
}

export {Component as component, schema, fps, durationInFrames, width, height};
