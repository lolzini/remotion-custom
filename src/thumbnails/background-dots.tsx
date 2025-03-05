import clsx from 'clsx';
import Dot from '../components/dot';

export default function () {
	return (
		<section className={clsx('-translate-x-[240px] -translate-y-[240px]')}>
			<div>
				{Array(32)
					.fill(null)
					.map(() => (
						<div className={clsx('flex')}>
							{Array(80)
								.fill(null)
								.map(() => (
									<div className="flex min-h-[60px] min-w-[60px] items-center justify-center">
										<Dot size={9} />
									</div>
								))}
						</div>
					))}
			</div>
		</section>
	);
}
