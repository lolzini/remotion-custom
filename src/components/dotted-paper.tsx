import clsx from 'clsx';

export function DottedPaper({
	className,
	fill = '#000',
	r = 2,
	x = 20,
	y = 20,
	cx = 10,
	cy = 10,
	size = 48,
}: {
	className?: string;
	fill?: string;
	r?: number;
	x?: number;
	y?: number;
	cx?: number;
	cy?: number;
	size?: number;
}) {
	return (
		<>
			<svg width="100%" height="100%" className={clsx('absolute', className)}>
				<pattern
					id="pattern-circles"
					x={x}
					y={y}
					width={size}
					height={size}
					patternUnits="userSpaceOnUse"
					patternContentUnits="userSpaceOnUse"
				>
					<circle id="pattern-circle" cx={cx} cy={cy} r={r} fill={fill} />
				</pattern>

				<rect
					id="rect"
					x="0"
					y="0"
					width="100%"
					height="100%"
					fill="url(#pattern-circles)"
				/>
			</svg>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				version="1.1"
				xmlnsXlink="http://www.w3.org/1999/xlink"
				viewBox="0 0 1920 1080"
				width="1920"
				height="1080"
				className={clsx('absolute', className)}
			>
				<defs>
					<filter
						id="nnnoise-filter"
						x="-20%"
						y="-20%"
						width="140%"
						height="140%"
						filterUnits="objectBoundingBox"
						primitiveUnits="userSpaceOnUse"
						colorInterpolationFilters="linearRGB"
					>
						<feTurbulence
							type="fractalNoise"
							baseFrequency="0.102"
							numOctaves="4"
							seed="15"
							stitchTiles="stitch"
							x="0%"
							y="0%"
							width="100%"
							height="100%"
							result="turbulence"
						/>
						<feSpecularLighting
							surfaceScale="15"
							specularConstant="0.75"
							specularExponent="20"
							lightingColor="#1a1a1a"
							x="0%"
							y="0%"
							width="100%"
							height="100%"
							in="turbulence"
							result="specularLighting"
						>
							<feDistantLight azimuth="3" elevation="100" />
						</feSpecularLighting>
					</filter>
				</defs>
				<rect width="1920" height="1080" fill="transparent" />
				<rect
					width="1920"
					height="1080"
					fill="#a1a1a1"
					filter="url(#nnnoise-filter)"
				/>
			</svg>
		</>
	);
}
