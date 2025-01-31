import {interpolate, useCurrentFrame} from 'remotion';

import './style.css';

import clsx from 'clsx';

export const AnimatedText = ({
	text = 'Placeholder',
	durationPerLetter = 5,
	className = '',
}) => {
	const frame = useCurrentFrame();

	return (
		<div className={clsx(className, 'shantell-sans')}>
			{text.split('').map((char, index) => {
				const opacity = interpolate(
					frame,
					[index * durationPerLetter, (index + 1) * durationPerLetter],
					[0, 1],
					{extrapolateRight: 'clamp'},
				);

				return (
					<span
						key={index}
						style={{
							opacity,
							fontFamily: 'Shantell Sans',
							fontOpticalSizing: 'auto',
							fontStyle: 'normal',
							fontVariationSettings: '"BNCE" 100, "INFM" 24, "SPAC" 0',
						}}
					>
						{char}
					</span>
				);
			})}
		</div>
	);
};
