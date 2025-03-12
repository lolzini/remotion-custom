export default function CrossSection({
	width = 1920,
	height = 1080,
	color = '#ecc94b',
	background = '#2b2b31',
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
					patternTransform="scale(2)"
					patternUnits="userSpaceOnUse"
				>
					<rect width="100%" height="100%" fill={background} />
					<path fill="none" stroke={color} d="M10 0v20ZM0 10h20Z" />
				</pattern>
			</defs>
			<rect width="800%" height="800%" fill="url(#a)" />
		</svg>
	);
}
