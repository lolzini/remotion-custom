interface DotProps {
	size?: number;
}

export default function Dot({size = 6}: DotProps) {
	return (
		<div
			style={{
				height: `${size}px`,
				width: `${size}px`,
				borderRadius: '9999px',
				backgroundColor: 'rgba(0, 0, 0, 0.1)',
			}}
		/>
	);
}
