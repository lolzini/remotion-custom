import {AbsoluteFill} from 'remotion';

type NoiseFilterProps = {
	readonly baseFrequency?: number;
	readonly numOctaves?: number;
	readonly seed?: number;
	readonly surfaceScale?: number;
	readonly specularConstant?: number;
	readonly specularExponent?: number;
	readonly lightingColor?: string;
	readonly azimuth?: number;
	readonly elevation?: number;
	readonly fill?: string;
	readonly transparency?: number;
};

export default function NoiseFilter({
	baseFrequency = 0.102,
	numOctaves = 4,
	seed = 15,
	surfaceScale = 15,
	specularConstant = 0.75,
	specularExponent = 20,
	lightingColor = 'white',
	azimuth = 3,
	elevation = 100,
	fill = 'white',
	transparency = 1,
}: NoiseFilterProps = {}) {
	return (
		<AbsoluteFill className="invert">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				version="1.1"
				xmlnsXlink="http://www.w3.org/1999/xlink"
				viewBox="0 0 1920 1080"
				width="1920"
				height="1080"
				className="absolute"
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
							baseFrequency={baseFrequency}
							numOctaves={numOctaves}
							seed={seed}
							stitchTiles="stitch"
							x="0%"
							y="0%"
							width="100%"
							height="100%"
							result="turbulence"
						/>
						<feSpecularLighting
							surfaceScale={surfaceScale}
							specularConstant={specularConstant}
							specularExponent={specularExponent}
							lightingColor={lightingColor}
							x="0%"
							y="0%"
							width="100%"
							height="100%"
							in="turbulence"
							result="specularLighting"
						>
							<feDistantLight azimuth={azimuth} elevation={elevation} />
						</feSpecularLighting>
					</filter>
				</defs>
				<rect width="1920" height="1080" fill="transparent" />
				<rect
					width="1920"
					height="1080"
					fill={fill}
					filter="url(#nnnoise-filter)"
					opacity={transparency}
				/>
			</svg>
		</AbsoluteFill>
	);
}
