import clsx from 'clsx';

export default function ({children, className = '', hidden = false}) {
	return (
		<div className={clsx({'opacity-0': hidden}, className)}>{children}</div>
	);
}
