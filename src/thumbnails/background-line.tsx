export default function () {
	return (
		<div className="flex h-full gap-[120px]">
			{Array(100)
				.fill(null)
				.map(() => (
					<Line />
				))}
		</div>
	);
}

function Line() {
	return (
		<div className="h-full min-w-[120px] -skew-x-[16deg] bg-black bg-opacity-5" />
	);
}
