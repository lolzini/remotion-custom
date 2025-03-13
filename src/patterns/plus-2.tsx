export default function Plus2({
	width = 1920,
	height = 1080,
	color = '#ecc94b',
	background = '#2b2b31',
	scale = 2,
}) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox={`0 0 ${width} ${height}`}
		>
			<defs>
				<pattern
					id="a"
					width="20"
					height="20"
					patternTransform={`scale(${scale})`}
					patternUnits="userSpaceOnUse"
				>
					<rect width="100%" height="100%" fill={background} />
					<path
						fill="none"
						stroke={color}
						stroke-linecap="square"
						d="M10-6V6m0 8v12m16-16H14m-8 0H-6"
					/>
				</pattern>
			</defs>
			<rect width="800%" height="800%" fill="url(#a)" />
		</svg>
	);
}
