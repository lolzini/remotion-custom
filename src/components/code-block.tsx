import SyntaxHighlighter from './syntax-highlighter';

type Props = {
	code: string;
	language: string;
};

export default function CodeBlock({code, language}: Props) {
	return (
		<div className="shadow-md border border-white/5">
			<SyntaxHighlighter
				wrapLongLines
				language={language}
				code={code}
				customStyle={{margin: 'unset'}}
			/>
		</div>
	);
}
