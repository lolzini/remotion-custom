import clsx from 'clsx';
import {Prism} from 'react-syntax-highlighter';
import {vscDarkPlus} from 'react-syntax-highlighter/dist/esm/styles/prism';

export const tiktokCodeTagProps = {style: {fontSize: '48px'}};
export const tiktokCustomStyle = {
	background: 'transparent',
	display: 'block',
	margin: 'unset',
	overflow: 'unset',
};

export default function SyntaxHighlighter({
	code = '',
	className = '',
	...rest
}) {
	return (
		<Prism
			className={clsx('w-full max-w-full', className)}
			style={vscDarkPlus}
			{...rest}
		>
			{code}
		</Prism>
	);
}
