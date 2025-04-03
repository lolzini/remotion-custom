import {AbsoluteFill, Still} from 'remotion';
import {z} from 'zod';
import {zTextarea} from '@remotion/zod-types';

import {FONTS, FONTS_ENUM} from '../utils';

const schema = z.object({
	text: zTextarea(),
	fontName: FONTS_ENUM,
	fontSize: z.number().step(0.01),
	shadow: z.boolean(),
	strokeWidth: z.number().min(0).step(0.1).default(2),
});

const Component: React.FC<z.infer<typeof schema>> = ({
	text,
	fontName,
	fontSize,
	shadow,
	strokeWidth,
}) => {
	const fontFamily = FONTS[fontName];
	return (
		<>
			<AbsoluteFill className="items-center justify-center">
				<svg
					width="100%"
					height="100%"
					viewBox="0 0 800 800"
					xmlns="http://www.w3.org/2000/svg"
				>
					<defs>
						<filter id="outline">
							<feMorphology
								in="SourceAlpha"
								operator="dilate"
								radius={strokeWidth}
								result="dilated1"
							/>
							<feMorphology
								in="dilated1"
								operator="erode"
								radius={strokeWidth * 0.15}
								result="smoothed"
							/>
							<feFlood floodColor="#fff" result="white" />
							<feComposite
								in="white"
								in2="smoothed"
								operator="in"
								result="outline"
							/>
							{shadow && (
								<>
									<feOffset in="dilated" dx="4" dy="4" result="offset" />
									<feFlood floodColor="rgba(0, 0, 0, 0.3)" result="shadow" />
									<feComposite
										in="shadow"
										in2="offset"
										operator="in"
										result="shadow-fill"
									/>
								</>
							)}
							<feMerge>
								{shadow && <feMergeNode in="shadow-fill" />}
								<feMergeNode in="outline" />
								<feMergeNode in="SourceGraphic" />
							</feMerge>
						</filter>
					</defs>
					<text
						x="50%"
						y="50%"
						textAnchor="middle"
						dominantBaseline="middle"
						style={{fontFamily, fontSize: `${fontSize}em`}}
						fill="currentColor"
						filter="url(#outline)"
					>
						{text}
					</text>
				</svg>
			</AbsoluteFill>
		</>
	);
};

export default () => (
	<Still
		id="emoji"
		component={Component}
		width={800}
		height={800}
		schema={schema}
		defaultProps={{
			text: '👉',
			fontName: 'NotoColorEmoji' as const,
			fontSize: 36,
			shadow: true,
			strokeWidth: 8,
		}}
	/>
);
