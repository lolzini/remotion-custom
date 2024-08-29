import {ReactNode} from 'react';
import clsx from 'clsx';

import CodeBlock from '../../components/code-block';
import Cover from '../../components/cover';
import ads from '../../components/ads';

const id = 'aprendamos-html';
const title = 'Aprendamos HTML';

export default {
	id,
	title,
	slides: [
		() => <Cover logo="html" title={title} />,
		() => {
			return (
				<div className="flex flex-col gap-4 mt-16">
					<H2>
						¿Qué es <span className="text-[#FF5733]">HTML</span>?
					</H2>
					<p>
						Son las siglas para{' '}
						<span className="text-blue-300 italic">
							HyperText Markup Language
						</span>{' '}
						o <Hl>Lenguaje de Marcas de HiperTexto</Hl>.
					</p>
					<p>
						Es un lenguaje que nos ayuda a{' '}
						<U>crear el contenido y la estructura</U> de una página web.
					</p>
					<H2>Principios básicos</H2>
					<p>
						Está formado por segmentos de código que lucen de la siguiente
						manera:
					</p>
					<CodeBlock language="html" code={`<nombre>`} />
					<p>
						A estos les llamamos <Hl>etiquetas</Hl>.
					</p>
					<p>
						<U>
							Los nombres de las diferentes etiquetas ya están predefinidos.
						</U>
					</p>
					<p>
						Cada uno de ellos nos ayuda con tareas específicas, como mostrar
						texto, imágenes, videos, tablas, etc.
					</p>
				</div>
			);
		},
		() => {
			return (
				<div className="flex flex-col gap-4 mt-16">
					<p>Por ejemplo:</p>
					<CodeBlock language="html" code={`<body></body>`} />
					<p>Es la etiqueta que nos ayuda a crear el cuerpo de la página.</p>
					<p>
						<U>La mayoría de las etiquetas deben venir en pares</U>.
					</p>
					<p>
						A la primera la llamamos <Hl>etiqueta de apertura</Hl> y a la
						segunda <Hl>etiqueta de cierre</Hl>.
					</p>
					<p>
						La de cierre lleva una diagonal antes del nombre{' '}
						<code className="font-mono text-sm relative">
							<span className="font-emoji absolute rotate-90 -top-7 left-0 text-lg">
								👉
							</span>
							&lt;/<span className="text-[#569cd6]">nombre</span>&gt;
						</code>
					</p>
					<p>En medio de ambas podemos insertar contenido, por ejemplo:</p>
					<ul className="list-disc ml-5">
						<li>Texto</li>
						<li>Más etiquetas</li>
						<li>Una combinación de ambos</li>
					</ul>
					<CodeBlock
						language="html"
						code={`<body>
	<!-- Contenido -->
</body>`}
					/>
					<p>
						A esta estructura de código la llamamos <Hl>elemento HTML</Hl>.
					</p>
				</div>
			);
		},
		() => {
			return (
				<div className="flex flex-col gap-4 mt-16">
					<H2>Elementos vacíos</H2>
					<p>
						Existen elementos HTML que{' '}
						<U>sólo necesitan la etiqueta de apertura</U> para funcionar, es
						decir, no pueden tener contenido.
					</p>
					<p>
						A estos los llamamos <Hl>elementos vacíos</Hl> o de{' '}
						<Hl>autocierre</Hl>.
					</p>
					<CodeBlock language="html" code={`<br>`} />
					<p>
						<U>Podemos ponerles una diagonal después del nombre</U> para hacer
						explícito que están vacíos, pero{' '}
						<U>deberían funcionar con o sin ella</U>.
					</p>
					<CodeBlock language="html" code={`<br/>`} />
				</div>
			);
		},
		() => {
			return (
				<div className="flex flex-col gap-4 mt-16">
					<H2>Atributos</H2>
					<p>
						<U>En la etiqueta de apertura de algunos elementos</U> podemos
						encontrar segmentos de código a los que llamamos <Hl>atributos</Hl>.
					</p>
					<CodeBlock
						language="html"
						code={`<div style="color:blue;">Texto</div>`}
					/>
					<p>
						Nos ayudan a <U>definir ciertos comportamientos de las etiquetas</U>
						.
					</p>
					<p className="text-xs">
						Este ejemplo nos ayuda a cambiar el aspecto del texto mostrado.
					</p>
					<p>
						La estructura de los atributos es{' '}
						<code className="text-sm font-mono">
							<span className="text-[#9cdcfe]">nombre</span>
							<span className="text-[#ce9178]">="valor"</span>
						</code>
						.
					</p>
					<p>
						En el ejemplo anterior{' '}
						<span className="font-mono text-[#9cdcfe] text-sm">style</span> es
						atributo definido y{' '}
						<span className="font-mono text-[#ce9178] text-sm">
							color:blue;
						</span>{' '}
						el valor.
					</p>
					<H3>Atributos globales</H3>
					<p>
						<U>Algunos atributos pueden ser usados en todas las etiquetas</U>,
						por ejemplo:
					</p>
					<ul className="list-disc ml-5 text-mono">
						<li>
							<span className="font-mono text-[#9cdcfe] text-sm">style</span>
						</li>
						<li>
							<span className="font-mono text-[#9cdcfe] text-sm">class</span>
						</li>
						<li>
							<span className="font-mono text-[#9cdcfe] text-sm">id</span>
						</li>
					</ul>
					<p>
						A estos los llamamos <Hl>atributos globales</Hl>.
					</p>
				</div>
			);
		},
		() => {
			return (
				<div className="flex flex-col gap-4 mt-16">
					<H3>Atributos específicos de etiqueta</H3>
					<p>
						<U>
							Existen atributos que sólo pueden ser usados en ciertas etiquetas
						</U>
						. A estos les llamamos <Hl>atributos específicos</Hl> de etiqueta.
					</p>
					<p>Por ejemplo:</p>
					<CodeBlock
						language="html"
						code={`<a href="https://iniz.lol/">Ir a mis redes</a>`}
					/>
					<p>
						Esta etiqueta nos ayuda a agregar links o enlaces a nuestro sitio.
					</p>
					<p>
						El atributo{' '}
						<span className="font-mono text-[#9cdcfe] text-sm">href</span> le
						indica la dirección a la que debe redirigirnos.
					</p>

					<p>
						Algunas etiquetas{' '}
						<U>necesitan ciertos atributos para funcionar correctamente</U>.
					</p>
					<p>
						Cada que aprendamos una nueva etiqueta debemos asegurarnos de
						memorizar sus atributos específicos.
					</p>
				</div>
			);
		},
		ads,
	],
};

function U({children, className}: {children: ReactNode; className?: string}) {
	return (
		<span
			className={clsx(
				'underline decoration-dotted underline-offset-4 decoration-amber-300',
				className,
			)}
		>
			{children}
		</span>
	);
}

function H2({children, className}: {children: ReactNode; className?: string}) {
	return <h2 className={clsx('text-xl font-bold', className)}>{children}</h2>;
}

function H3({children, className}: {children: ReactNode; className?: string}) {
	return <h2 className={clsx('text-lg font-bold', className)}>{children}</h2>;
}

function Hl({
	children,
	className,
	en,
	es,
}: {
	children: ReactNode;
	className?: string;
	s?: boolean;
	en?: boolean;
	es?: boolean;
}) {
	return (
		<span
			className={clsx(
				'text-amber-300',
				{'text-emerald-300 italic': es},
				{'text-blue-300 italic': en},
				className,
			)}
		>
			{children}
		</span>
	);
}
