export default function Eyes4({
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
					width="40"
					height="40"
					patternTransform={`scale(${scale})`}
					patternUnits="userSpaceOnUse"
				>
					<rect width="100%" height="100%" fill={background} />
					<path
						fill={color}
						d="M45.69 13.342c-1.677.945-3.557 1.6-5.48 1.588-1.922-.012-3.795-.691-5.462-1.653-1.668-.962-3.156-2.202-4.637-3.435-1.48-1.232-2.97-2.47-4.641-3.427S21.923 4.787 20 4.787s-3.8.67-5.47 1.628c-1.67.956-3.161 2.195-4.641 3.427s-2.97 2.473-4.637 3.435-3.54 1.641-5.463 1.653c-1.922.012-3.802-.643-5.478-1.588v13.316c1.676-.945 3.556-1.6 5.478-1.588 1.923.012 3.796.691 5.463 1.653s3.156 2.202 4.637 3.435c1.48 1.232 2.97 2.47 4.641 3.427s3.547 1.628 5.47 1.628 3.8-.67 5.47-1.628c1.67-.956 3.161-2.195 4.641-3.427s2.97-2.473 4.637-3.435 3.54-1.641 5.463-1.653c1.922-.012 3.802.643 5.478 1.588z"
					/>
				</pattern>
			</defs>
			<rect width="800%" height="800%" fill="url(#a)" />
		</svg>
	);
}
