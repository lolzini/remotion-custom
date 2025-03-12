import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {z} from 'zod';
import {zColor} from '@remotion/zod-types';

import CrossSection from '../../patterns/cross-section';
import BrickWall1 from '../../patterns/brick-wall-1';
import Circles4 from '../../patterns/circles-4';
import Scales9 from '../../patterns/scales-9';

const fps = 30;
const durationInFrames = fps;
const width = 1920;
const height = 1080;

const schema = z.object({
	name: z.enum(['cross-section', 'brick-wall-1', 'circles-4', 'scales-9']),
	color: zColor(),
	background: zColor(),
	direction: z.enum(['ltr', 'rtl', 'ttb', 'btt']),
	scale: z.number(),
	offset: z.number(),
});

function Component({
	name,
	color,
	background,
	direction,
	scale,
	offset,
}: z.infer<typeof schema>) {
	const frame = useCurrentFrame();

	const getTransform = () => {
		switch (direction) {
			case 'ltr':
				return `translateX(${interpolate(frame, [0, durationInFrames], [-(offset * scale), 0])}px)`;
			case 'rtl':
				return `translateX(${interpolate(frame, [0, durationInFrames], [0, -(offset * scale)])}px)`;
			case 'ttb':
				return `translateY(${interpolate(frame, [0, durationInFrames], [-(offset * scale), 0])}px)`;
			case 'btt':
				return `translateY(${interpolate(frame, [0, durationInFrames], [0, -(offset * scale)])}px)`;
			default:
				return `translateX(${interpolate(frame, [0, durationInFrames], [0, 1920])}px)`;
		}
	};

	const Render = Background({name});

	return (
		<AbsoluteFill>
			<div style={{transform: getTransform()}}>
				<div className="grid grid-cols-2">
					<Render
						color={color}
						background={background}
						scale={scale}
						width={1920 * 8}
						height={1080 * 8}
					/>
				</div>
			</div>
		</AbsoluteFill>
	);
}

function Background({name}: {name: z.infer<typeof schema>['name']}) {
	switch (name) {
		case 'cross-section':
			return CrossSection;
		case 'brick-wall-1':
			return BrickWall1;
		case 'circles-4':
			return Circles4;
		case 'scales-9':
			return Scales9;
		default:
			return CrossSection;
	}
}

export {schema, Component as component, fps, durationInFrames, width, height};
