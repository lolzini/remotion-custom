import clsx from 'clsx';

export default function () {
	return (
		<section className="-translate-x-[120px] -translate-y-[240px] rotate-12">
			<div>
				{Array(16)
					.fill(null)
					.map((_, i) => (
						<div
							className={clsx('flex w-fit gap-[120px]', {
								'ml-[120px]': i % 2 === 0,
							})}
						>
							{Array(80)
								.fill(null)
								.map(() => (
									<Square />
								))}
						</div>
					))}
			</div>
		</section>
	);
}

function Square() {
	return <div className="h-[120px] w-[120px] bg-black opacity-5" />;
}
