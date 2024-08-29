import {Emoji} from '../../components/emoji';

export function Tag({children}: {children: React.ReactNode}) {
	return (
		<p className="lowercase text-[#808080] font-mono inline-block">
			&lt;<span className="text-[#569CD6]">{children}</span>&gt;
		</p>
	);
}

export function H({children}: {children: React.ReactNode}) {
	return <span className="text-[#569CD6]">{children}</span>;
}

export function X({children}: {children: React.ReactNode}) {
	return <span className="text-rose-400">{children}</span>;
}

export function Us() {
	return <Emoji className="mr-2">🇺🇸</Emoji>;
}

export function Mx() {
	return <Emoji className="mr-2">🇲🇽</Emoji>;
}

export function Attribute({children}: {children: React.ReactNode}) {
	return <span className="text-[#9CDCFE] font-mono">{children}</span>;
}

export function Value({children}: {children: React.ReactNode}) {
	return <span className="text-[#CE9178] font-mono">{children}</span>;
}

export function Arrow() {
	return (
		<svg
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 46.49858096336425 52.66611974430816"
			width="46.49858096336425"
			height="52.66611974430816"
		>
			<rect
				x="0"
				y="0"
				width="46.49858096336425"
				height="52.66611974430816"
				fill="none"
			/>
			<g stroke-linecap="round">
				<g transform="translate(13.046187080875825 11.455545477270334) rotate(0 10.300439592635826 14.73151006660737)">
					<path
						d="M21.61 0.26 C17.85 0.77, 4.03 -1.49, 0.17 3.42 C-3.68 8.34, -1.24 25.46, -1.53 29.75 M23.45 -0.65 C19.51 -0.52, 3.59 -3.66, -0.68 1.65 C-4.96 6.96, -2.11 26.47, -2.2 31.21"
						stroke="#eee"
						stroke-width="2"
						fill="none"
					/>
				</g>
				<g transform="translate(13.046187080875825 11.455545477270334) rotate(0 10.300439592635826 14.73151006660737)">
					<path
						d="M-3.14 29.69 L-9.33 18.75 L2.2 17.94 L-2.5 29.44"
						stroke="none"
						stroke-width="0"
						fill="#eee"
						fill-rule="evenodd"
					/>
					<path
						d="M-2.2 31.21 C-4.09 27.39, -5.8 23.42, -8.56 19.44 M-2.2 31.21 C-3.81 27.6, -5.7 23.04, -8.56 19.44 M-8.56 19.44 C-5.25 19.58, -2.15 18.27, 2.73 18.78 M-8.56 19.44 C-5.32 18.96, -1.76 19.19, 2.73 18.78 M2.73 18.78 C2.28 23.66, 0.69 25.77, -2.2 31.21 M2.73 18.78 C0.97 23.1, -0.62 26.61, -2.2 31.21 M-2.2 31.21 C-2.2 31.21, -2.2 31.21, -2.2 31.21 M-2.2 31.21 C-2.2 31.21, -2.2 31.21, -2.2 31.21"
						stroke="#eee"
						stroke-width="2"
						fill="none"
					/>
				</g>
			</g>
			<mask />
		</svg>
	);
}

export const code = {
	headings: `<h1>Título 1</h1>
<h2>Título 2</h2>
<h3>Título 3</h3>
<h4>Título 4</h4>
<h5>Título 5</h5>
<h6>Título 6</h6>`,

	paragraphs: `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam optio laboriosam tempore adipisci culpa veniam quos molestiae, quasi blanditiis praesentium dicta nisi, facere corporis ullam quo harum. Dolorum, quod amet.</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam optio laboriosam tempore adipisci culpa veniam quos molestiae, quasi blanditiis praesentium dicta nisi, facere corporis ullam quo harum. Dolorum, quod amet.</p>`,

	ul: `<ul>
	<li>Elemento</li>
	<li>Elemento</li>
	<li>Elemento</li>
</ul>`,

	ol: `<ol>
	<li>Elemento</li>
	<li>Elemento</li>
	<li>Elemento</li>
</ol>`,

	br: `<p>Contenido</p>
<br/>
<p>Más contenido</p>`,

	hr: `<p>Contenido</p>
<hr/>
<p>Más contenido</p>`,

	a: `<a href="https://www.tiktok.com/@lolzini_es" target="_blank">Ver más contenido</a>`,

	img: `<img src="https://placebear.com/200/300" alt="Foto de dos osos" />`,

	div: `<div style="color:orange;">
	<h1>Título</h1>
	<p>Contenido</p>
	<p>Contenido</p>
</div>`,

	span: `<p>Contenido <span style="color:hotpink;">con estilo</span> y sin estilo</p>`,
	comment: `<p>Contenido</p>
<!-- Esto es un comentario -->
<p>Contenido</p>`,
};
