export default function Circles4({
	width = 1920,
	height = 1080,
	color = 'black',
	background = '#ecc94b',
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
					width="40"
					height="40"
					patternTransform={`scale(${scale})`}
					patternUnits="userSpaceOnUse"
				>
					<rect width="100%" height="100%" fill={background} />
					<path
						fill={color}
						d="M11 6a5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5 5 5 0 0 1 5 5"
					/>
				</pattern>
			</defs>
			<rect width="800%" height="800%" fill="url(#a)" />
		</svg>
	);
}
