export default function BrickWall1({
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
					width="30"
					height="30"
					patternTransform={`scale(${scale})`}
					patternUnits="userSpaceOnUse"
				>
					<rect width="100%" height="100%" fill={background} />
					<path
						fill="none"
						stroke={color}
						d="M0 22.5h30v15H0zm15-15h30v15H15m-30-15h30v15h-30zm15-15h30v15H0z"
					/>
				</pattern>
			</defs>
			<rect width="800%" height="800%" fill="url(#a)" />
		</svg>
	);
}
