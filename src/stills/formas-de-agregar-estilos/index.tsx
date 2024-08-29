import {IFrame} from 'remotion';

import CodeBlock from '../../components/code-block';
import Cover from '../../components/cover';
import ads from '../../components/ads';

export default {
	id: 'formas-de-agregar-estilos',
	slides: [
		() => <Cover logo="css" title="Formas de agregar estilos" />,
		() => {
			const code = `<p style="color:royalblue; background-color:lightgray;">Mi texto</p>`;
			return (
				<div className="flex flex-col gap-4 mt-16">
					<p>Existen 3 formas de utilizar estilos en CSS</p>
					<ul className="list-disc ml-5">
						<li>En línea (Inline)</li>
						<li>Internos (Internal)</li>
						<li>Externos (External)</li>
					</ul>
					<h2 className="text-2xl">En línea (Inline)</h2>
					<p>
						Hace referencia a utilizar el atributo{' '}
						<code className="text-[#9cdcfe]">style</code>.
					</p>
					<p>
						Como <code className="text-[#ce9178]">"valor"</code> podemos poner
						todas las propiedades que necesitemos cambiar.
					</p>
					<p>Sólo van a afectar al elemento que las contiene</p>
					<CodeBlock language="html" code={code} />
					<IFrame className="bg-white" srcDoc={code} />
				</div>
			);
		},
		() => {
			return (
				<div className="flex flex-col gap-4 mt-16">
					<p>
						Para usar estilos internos y externos, debemos aprender el concepto
						de <strong>selectores</strong>
					</p>
					<p>
						Cuando usamos selectores podemos decir qué etiquetas deben ser
						afectadas por las distintas reglas
					</p>

					<CodeBlock
						language="css"
						code={`selector {
  // reglas
}`}
					/>
				</div>
			);
		},
		ads,
	],
};
