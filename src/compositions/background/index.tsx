import {zColor} from '@remotion/zod-types';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {z} from 'zod';

import {DIF} from '../../Root';
import CrossSection from '../../patterns/cross-section';

const schema = z.object({
	color: zColor(),
	background: zColor(),
	direction: z.enum(['ltr', 'rtl', 'ttb', 'btt']),
});

function Background({color, background, direction}: z.infer<typeof schema>) {
	const frame = useCurrentFrame();

	const getTransform = () => {
		switch (direction) {
			case 'ltr':
				return `translateX(${interpolate(frame, [0, DIF], [-1920, 0])}px)`;
			case 'rtl':
				return `translateX(${interpolate(frame, [0, DIF], [0, -1920])}px)`;
			case 'ttb':
				return `translateY(${interpolate(frame, [0, DIF], [-1080 / 2, 0])}px)`;
			case 'btt':
				return `translateY(${interpolate(frame, [0, DIF], [0, -1080 / 2])}px)`;
			default:
				return `translateX(${interpolate(frame, [0, DIF], [0, 1920])}px)`;
		}
	};

	return (
		<AbsoluteFill>
			<div style={{transform: getTransform()}}>
				<div className="grid grid-cols-2">
					<CrossSection
						color={color}
						background={background}
						width={1920 * 4}
						height={1080 * 4}
					/>
				</div>
			</div>
		</AbsoluteFill>
	);
}

export {schema, Background as component};
