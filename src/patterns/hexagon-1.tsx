export default function Hexagon1({
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
					width="29"
					height="50.115"
					patternTransform={`scale(${scale})`}
					patternUnits="userSpaceOnUse"
				>
					<rect width="100%" height="100%" fill={background} />
					<path
						fill="none"
						stroke={color}
						d="M14.498 16.858 0 8.488.002-8.257l14.5-8.374L29-8.26l-.002 16.745zm0 50.06L0 58.548l.002-16.745 14.5-8.373L29 41.8l-.002 16.744zM28.996 41.8l-14.498-8.37.002-16.744L29 8.312l14.498 8.37-.002 16.745zm-29 0-14.498-8.37.002-16.744L0 8.312l14.498 8.37-.002 16.745z"
					/>
				</pattern>
			</defs>
			<rect width="800%" height="800%" fill="url(#a)" />
		</svg>
	);
}
