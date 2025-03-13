import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {z} from 'zod';
import {zColor} from '@remotion/zod-types';

import CrossSection from '../../patterns/cross-section';
import BrickWall1 from '../../patterns/brick-wall-1';
import Circles4 from '../../patterns/circles-4';
import Scales9 from '../../patterns/scales-9';
import Jigsaw from '../../patterns/jigsaw';
import PlaidPattern2 from '../../patterns/plaid-pattern-2';
import Eyes4 from '../../patterns/eyes-4';
import JapanesePattern3 from '../../patterns/japanese-pattern-3';
import Hexagon1 from '../../patterns/hexagon-1';
import Plus2 from '../../patterns/plus-2';

const fps = 30;
const durationInFrames = fps;
const width = 1920;
const height = 1080;

const schema = z.object({
	name: z.enum([
		'cross-section',
		'brick-wall-1',
		'circles-4',
		'scales-9',
		'jigsaw',
		'plaid-pattern-2',
		'eyes-4',
		'japanese-pattern-3',
		'hexagon-1',
		'plus-2',
	]),
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
		case 'jigsaw':
			return Jigsaw;
		case 'plaid-pattern-2':
			return PlaidPattern2;
		case 'eyes-4':
			return Eyes4;
		case 'japanese-pattern-3':
			return JapanesePattern3;
		case 'hexagon-1':
			return Hexagon1;
		case 'plus-2':
			return Plus2;
		default:
			return CrossSection;
	}
}

export {schema, Component as component, fps, durationInFrames, width, height};
