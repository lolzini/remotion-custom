import {IFrame} from 'remotion';

import Cover from '../../components/cover';
import CodeBlock from '../../components/code-block';
import ads from '../../components/ads';

export default {
	id: 'propiedades-basicas-css',
	slides: [
		() => <Cover logo="css" title="Propiedades básicas CSS" />,
		() => {
			const html = `<p>Mi texto</p>
<p class="estilizado">Mi texto estilizado</p>`;
			const css = `.estilizado {
  color: tomato;
}`;
			const frame = `${html}\n<style>${css}</style>`;
			return (
				<div className="flex flex-col gap-4 mt-20">
					<h2 className="font-mono text-2xl">
						<span className="text-[#9cdcfe]">color</span>
					</h2>
					<p>Nos ayuda a cambiar el color de texto del elemento</p>
					<section className="flex-col flex gap-2">
						<CodeBlock language="html" code={html} />
						<CodeBlock language="css" code={css} />
						<IFrame className="w-full bg-white" srcDoc={frame} />
					</section>
					<p>
						Podemos usar alguno de los diferentes formatos de color (nombrados,
						hex, rgb, hsl, etc.)
					</p>
				</div>
			);
		},
		() => {
			const html = `<p>Mi texto</p>
<p class="estilizado">Mi texto estilizado</p>`;
			const css = `.estilizado {
  background-color: royalblue;
}`;
			const frame = `${html}\n<style>${css}</style>`;
			return (
				<div className="flex flex-col gap-4 mt-20">
					<h2 className="font-mono text-2xl">
						<span className="text-[#9cdcfe]">background-color</span>
					</h2>
					<p>Nos ayuda a cambiar el color de fondo del elemento</p>
					<section className="flex-col flex gap-2">
						<CodeBlock language="html" code={html} />
						<CodeBlock language="css" code={css} />
						<IFrame className="w-full bg-white" srcDoc={frame} />
					</section>
					<p>
						Podemos usar alguno de los diferentes formatos de color (nombrados,
						hex, rgb, hsl, etc.)
					</p>
				</div>
			);
		},
		() => {
			const html = `<p>Mi texto</p>
<p class="estilizado">Mi texto estilizado</p>`;
			const css = `.estilizado {
  font-family: Tahoma, Geneva, sans-serif;
}`;
			const frame = `${html}\n<style>${css}</style>`;
			return (
				<div className="flex flex-col gap-4 mt-20">
					<h2 className="font-mono text-2xl">
						<span className="text-[#9cdcfe]">font-family</span>
					</h2>
					<p>Nos ayuda a cambiar la familia de fuente o tipografía</p>
					<section className="flex-col flex gap-2">
						<CodeBlock language="html" code={html} />
						<CodeBlock language="css" code={css} />
						<IFrame className="w-full bg-white" srcDoc={frame} />
					</section>
					<p>
						Usar varios valores nos sirve como respaldo por si alguna no carga
						correctamente.
					</p>
				</div>
			);
		},
		() => {
			const html = `<p>Mi texto</p>
<p class="estilizado">Mi texto estilizado</p>`;
			const css = `.estilizado {
  font-size: 32px;
}`;
			const frame = `${html}\n<style>${css}</style>`;
			return (
				<div className="flex flex-col gap-4 mt-20">
					<h2 className="font-mono text-2xl">
						<span className="text-[#9cdcfe]">font-size</span>
					</h2>
					<p>Nos ayuda a cambiar el tamaño de la fuente</p>
					<section className="flex-col flex gap-2">
						<CodeBlock language="html" code={html} />
						<CodeBlock language="css" code={css} />
						<IFrame className="w-full bg-white" srcDoc={frame} />
					</section>
					<p>
						Podemos usar alguno de los diferentes formatos de tamaños (px, %,
						em, rem, etc.)
					</p>
				</div>
			);
		},
		() => {
			const html = `<p>Mi texto</p>
<p class="estilizado">Mi texto estilizado</p>
<p class="estilizado-2">Mi texto estilizado</p>`;
			const css = `.estilizado {
  text-align: center;
} 
.estilizado-2 {
  text-align: right;
}`;
			const frame = `${html}\n<style>${css}</style>`;
			return (
				<div className="flex flex-col gap-4 mt-20">
					<h2 className="font-mono text-2xl">
						<span className="text-[#9cdcfe]">text-align</span>
					</h2>
					<p>Nos ayuda a cambiar la alineación del texto</p>
					<section className="flex-col flex gap-2">
						<CodeBlock language="html" code={html} />
						<CodeBlock language="css" code={css} />
						<IFrame className="w-full bg-white" srcDoc={frame} />
					</section>
					<p>
						Podemos usar los valores{' '}
						<code className="text-[#ce9178] font-mono">left</code>,{' '}
						<code className="text-[#ce9178] font-mono">center</code> o{' '}
						<code className="text-[#ce9178] font-mono">right</code>. Por defecto
						es <code className="text-[#ce9178] font-mono">left</code>.
					</p>
				</div>
			);
		},
		() => {
			const html = `<p>Mi texto</p>
<p class="estilizado">Mi texto estilizado</p>`;
			const css = `.estilizado {
  border: 2px solid black;
}`;
			const frame = `${html}\n<style>${css}</style>`;
			return (
				<div className="flex flex-col gap-4 mt-20">
					<h2 className="font-mono text-2xl">
						<span className="text-[#9cdcfe]">border</span>
					</h2>
					<p>Nos ayuda a agregarle un borde al elemento</p>
					<section className="flex-col flex gap-2">
						<CodeBlock language="html" code={html} />
						<CodeBlock language="css" code={css} />
						<IFrame className="w-full bg-white" srcDoc={frame} />
					</section>
					<p>Consta de tres parámetros: grosor, tipo y color, en ese orden.</p>
					<p>
						Este ejemplo tiene{' '}
						<code className="font-mono text-[#b5cea8]">2px</code> de grosor,{' '}
						<code className="font-mono text-[#ce9178]">solid</code> como estilo{' '}
						y <code className="font-mono text-[#ce9178]">black</code> como
						color.
					</p>
				</div>
			);
		},
		() => {
			const html = `<p>Mi texto</p>
<p class="estilizado">Mi texto estilizado</p>`;
			const css = `p {
  border: 1px solid black;
}
.estilizado {
  margin: 20px;
}`;
			const frame = `${html}\n<style>${css}</style>`;
			return (
				<div className="flex flex-col gap-4 mt-20">
					<h2 className="font-mono text-2xl">
						<span className="text-[#9cdcfe]">margin</span>
					</h2>
					<p>Nos ayuda a cambiar el margen del elemento.</p>
					<p>El margen es el espacio entre elementos.</p>
					<section className="flex-col flex gap-2">
						<CodeBlock language="html" code={html} />
						<CodeBlock language="css" code={css} />
						<IFrame className="h-24 w-full bg-white" srcDoc={frame} />
					</section>
					<p>
						Dependiendo de cuántos valores pongamos, cambiará los diferentes
						márgenes.
					</p>
				</div>
			);
		},
		() => {
			const html = `<p>Mi texto</p>
<p class="estilizado">Mi texto estilizado</p>`;
			const css = `p {
  border: 1px solid black;
}
.estilizado {
  padding: 12px;
}`;
			const frame = `${html}\n<style>${css}</style>`;
			return (
				<div className="flex flex-col gap-4 mt-20">
					<h2 className="font-mono text-2xl">
						<span className="text-[#9cdcfe]">padding</span>
					</h2>
					<p>Nos ayuda a cambiar el espaciado del elemento.</p>
					<p>El espaciado es el espacio entre el contenido y el borde.</p>
					<section className="flex-col flex gap-2">
						<CodeBlock language="html" code={html} />
						<CodeBlock language="css" code={css} />
						<IFrame className="h-28 w-full bg-white" srcDoc={frame} />
					</section>
					<p>
						Dependiendo de cuántos valores pongamos, cambiará los diferentes
						espaciados.
					</p>
				</div>
			);
		},
		() => {
			const html = `<p>Mi texto</p>
<p class="estilizado">Mi texto estilizado</p>`;
			const css = `p {
  background-color: aquamarine;      
}
.estilizado {
  width: 80px;
  height: 80px;
}`;
			const frame = `${html}\n<style>${css}</style>`;
			return (
				<div className="flex flex-col gap-4 mt-20">
					<h2 className="font-mono text-2xl">
						<span className="text-[#9cdcfe]">width</span> y{' '}
						<span className="text-[#9cdcfe]">height</span>
					</h2>
					<p>
						Nos ayuda a cambiar el ancho y el alto del elemento,
						respectivamente.
					</p>
					<section className="flex-col flex gap-2">
						<CodeBlock language="html" code={html} />
						<CodeBlock language="css" code={css} />
						<IFrame className="h-40 w-full bg-white" srcDoc={frame} />
					</section>
					<p>
						Podemos usar alguno de los diferentes formatos de tamaños (px, %,
						em, rem, etc.)
					</p>
				</div>
			);
		},
		ads,
	],
};
