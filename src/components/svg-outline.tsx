import React from 'react';

interface SVGOutlineProps {
	strokeWidth?: number;
	shadow?: boolean;
	children: React.ReactNode;
	width?: string | number;
	height?: string | number;
	viewBox?: string;
}

/**
 * A reusable SVG component that applies an outline/stroke effect to its children
 * with optional shadow effect.
 */
export const SVGOutline: React.FC<SVGOutlineProps> = ({
	strokeWidth = 2,
	shadow = false,
	children,
	width = '100%',
	height = '100%',
	viewBox = '0 0 800 800',
}) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox={viewBox}
			xmlns="http://www.w3.org/2000/svg"
		>
			<defs>
				{strokeWidth > 0 && (
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
								<feOffset in="dilated1" dx="4" dy="4" result="offset" />
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
				)}
			</defs>
			<foreignObject width="100%" height="100%">
				<div
					className="flex h-full w-full items-center justify-center"
					style={{
						filter: strokeWidth > 0 ? 'url(#outline)' : undefined,
					}}
				>
					{children}
				</div>
			</foreignObject>
		</svg>
	);
};
