import {IFrame, Img, staticFile} from 'remotion';
import CodeBlock from '../../components/code-block';
import Cover from '../../components/cover';

export default {
	id: 'como-seleccionar-elementos',
	slides: [
		() => <Cover logo="js" title="¿Cómo seleccionar elementos?" />,
		() => {
			const code = `<p>Elemento</p>
<p id="mi-id">Elemento con identificador</p>
<p class="mi-clase">Elemento con clase</p>`;
			const hl = `<p>Elemento</p>
<p id="mi-id">Elemento con identificador</p>
<p class="mi-clase">Elemento con clase</p>
<style>#mi-id{background-color:yellow}</style>`;

			return (
				<div className="flex flex-col gap-4">
					<h2 className="font-mono text-2xl">
						<span className="text-[#dcdcaa]">getElementById</span>()
					</h2>
					<p>
						Nos ayuda a conseguir <strong>el primer elemento</strong> que
						coincida con dicho <strong>identificador</strong> (
						<code className="px-2 bg-white/10 rounded text-[#9cdcfe]">id</code>
						).
					</p>
					<section className="flex-col flex gap-2">
						<CodeBlock
							language="javascript"
							code={`const element = document.getElementById("mi-id");`}
						/>
						<CodeBlock language="html" code={code} />
						<IFrame className="h-32 w-full bg-white" srcDoc={hl} />
					</section>
				</div>
			);
		},
		() => {
			const code = `<p>Elemento</p>
<p id="mi-id">Elemento con identificador</p>
<p class="mi-clase">Elemento con clase</p>`;
			const hl = `<p>Elemento</p>
<p id="mi-id" >Elemento con identificador</p>
<p class="mi-clase" style="background-color:yellow;">Elemento con clase</p>
<style>.mi-clase{background-color:yellow}</style>`;

			return (
				<div className="flex flex-col gap-4">
					<h2 className="font-mono text-2xl">
						<span className="text-[#dcdcaa]">getElementByClassName</span>()
					</h2>
					<p>
						Nos ayuda a conseguir <strong>el primer elemento</strong> que
						contenga dicha <strong>clase</strong> (
						<code className="px-2 bg-white/10 rounded text-[#9cdcfe]">
							class
						</code>
						).
					</p>
					<section className="flex-col flex gap-2">
						<CodeBlock
							language="javascript"
							code={`const element = document.getElementByClassName("mi-clase");`}
						/>
						<CodeBlock language="html" code={code} />
						<IFrame className="h-32 w-full bg-white" srcDoc={hl} />
					</section>
				</div>
			);
		},
		() => {
			const code = `<p>Elemento</p>
<p id="mi-id">Elemento con identificador</p>
<p class="mi-clase">Elemento con clase</p>`;
			const hl = `<p>Elemento</p>
<p id="mi-id" >Elemento con identificador</p>
<p class="mi-clase" style="background-color:yellow;">Elemento con clase</p>
<style>p{background-color:yellow}</style>`;

			return (
				<div className="flex flex-col gap-4">
					<h2 className="font-mono text-2xl">
						<span className="text-[#dcdcaa]">getElementsByTagName</span>()
					</h2>
					<p>
						Nos ayuda a conseguir <strong>todos los elementos</strong> que
						coincidan mediante el nombre de <strong>etiqueta</strong> (
						<code className="px-2 bg-white/10 rounded">
							&lt;<span className="text-[#569cd6]">nombre</span>&gt;
						</code>
						).
					</p>
					<section className="flex-col flex gap-2">
						<CodeBlock
							language="javascript"
							code={`const element = document.getElementsByTagName("p");`}
						/>
						<CodeBlock language="html" code={code} />
						<IFrame className="h-32 w-full bg-white" srcDoc={hl} />
					</section>
				</div>
			);
		},
		() => {
			const code = `<p>Elemento</p>
<p id="mi-id">Elemento con identificador</p>
<p class="mi-clase">Elemento con clase</p>`;
			const hl = `<p>Elemento</p>
<p id="mi-id" >Elemento con identificador</p>
<p class="mi-clase" style="background-color:yellow;">Elemento con clase</p>
<style>.mi-clase{background-color:yellow}</style>`;

			return (
				<div className="flex flex-col gap-4">
					<h2 className="font-mono text-2xl">
						<span className="text-[#dcdcaa]">querySelector</span>()
					</h2>
					<p>
						Nos ayuda a conseguir <strong>el primer elemento</strong> que
						coincida con un <strong>selector</strong> (
						<code className="px-2 bg-white/10 rounded">
							<span className="text-[#d7ba7d]">selector</span>
						</code>
						). Como los que usaríamos en CSS.
					</p>
					<section className="flex-col flex gap-2">
						<CodeBlock
							language="javascript"
							code={`const element = document.querySelector(".mi-clase");`}
						/>
						<CodeBlock language="html" code={code} />
						<IFrame className="h-32 w-full bg-white" srcDoc={hl} />
					</section>
				</div>
			);
		},
		() => {
			const code = `<p>Elemento</p>
<p id="mi-id">Elemento con identificador</p>
<p class="mi-clase">Elemento con clase</p>`;
			const hl = `<p>Elemento</p>
<p id="mi-id" >Elemento con identificador</p>
<p class="mi-clase" style="background-color:yellow;">Elemento con clase</p>
<style>p[id], p[class]{background-color:yellow}</style>`;

			return (
				<div className="flex flex-col gap-4">
					<h2 className="font-mono text-2xl">
						<span className="text-[#dcdcaa]">querySelectorAll</span>()
					</h2>
					<p>
						Nos ayuda a conseguir <strong>todos los elementos</strong> que
						coincidan con un <strong>selector</strong> (
						<code className="px-2 bg-white/10 rounded">
							<span className="text-[#d7ba7d]">selector</span>
						</code>
						). Como los que usaríamos en CSS.
					</p>
					<section className="flex-col flex gap-2">
						<CodeBlock
							language="javascript"
							code={`const element = document.querySelectorAll("p[id], p[class]");`}
						/>
						<CodeBlock language="html" code={code} />
						<IFrame className="h-32 w-full bg-white" srcDoc={hl} />
					</section>
				</div>
			);
		},
		() => {
			return (
				<div className="flex flex-col gap-4 text-center">
					<section className="flex flex-col gap-2">
						<p className="font-display text-4xl">
							¿Quieres aprender Desarrollo Web?
						</p>
						<p className="font-alt text-lg">Pregunta por:</p>
						<ul className="list-disc text-left mx-auto">
							<li className="font-alt text-2xl">
								Clases y asesorías gratuitas
							</li>
							<li className="font-alt text-2xl">Plan personalizado para ti</li>
						</ul>
					</section>
					<section className="flex flex-col gap-2">
						<p className="text-6xl font-display">Sígueme en todas mis redes</p>
						<Img
							className="rounded-full w-40 mx-auto"
							src={staticFile('/images/pp.png')}
						/>
						<p className="font-alt text-4xl">Link en mi biografía</p>
					</section>
				</div>
			);
		},
	],
};
