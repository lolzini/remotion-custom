import {AbsoluteFill, Folder} from 'remotion';
import {loadFont as loadIBMPlexSansJP} from '@remotion/google-fonts/IBMPlexSansJP';

import TikTokSlide, {TikTokSlideLayout} from '../../components/tiktok-slide';
import {DottedPaper} from '../../components/dotted-paper';
import {HTMLCodeWithPreview} from '../../components/html-code-with-preview';
import {Attribute, code, H, Mx, Tag, Us, Value, X} from './helpers';
import clsx from 'clsx';

const {fontFamily: ibmPlexSansJP} = loadIBMPlexSansJP();

export default function EtiquetasBasicasDeContenido() {
	const slides = [
		{render: <ID0 />, className: 'justify-center items-center !py-0'},
		{render: <ID2 />},
		{render: <ID3 />},
		{render: <ID4 />},
		{render: <ID5 />},
		{render: <ID6 />},
		{render: <ID7 />},
		{render: <ID8 />},
		{render: <ID9 />},
		{render: <ID10 />},
		{render: <ID11 />},
		{render: <ID12 />},
	];

	return (
		<Folder name="etiquetas-basicas-de-contenido">
			{slides.map(({render, className}, id) => (
				<TikTokSlide key={id} id={`etiquetas-basicas-de-contenido--${id}`}>
					<AbsoluteFill className="bg-[#161616] -z-10">
						<DottedPaper
							fill="#fff4"
							r={1}
							x={29}
							y={29}
							cx={1}
							cy={1}
							size={30}
						/>
					</AbsoluteFill>
					<TikTokSlideLayout
						className={clsx(
							'flex flex-col pt-36 px-10 items-center z-10 text-[#eee]',
							className,
						)}
						style={{fontFamily: ibmPlexSansJP}}
					>
						{render}
					</TikTokSlideLayout>
				</TikTokSlide>
			))}
		</Folder>
	);
}

function ID0() {
	return (
		<>
			{/* <header
				className="flex flex-col justify-center items-center"
				style={{fontFamily: caveatBrush}}
			>
				<h1 className="text-3xl my-4 flex justify-center items-center gap-2">
					<VscGlobe className="fill-[#9CDCFE]" /> Desarrollo Web
				</h1>
				<h1 className="text-8xl flex justify-center items-center">
					<FaHtml5 className="inline fill-[#e34c26]" /> HTML
				</h1>
				<h2 className="text-6xl text-center">Etiquetas básicas de contenido</h2>
			</header> */}
		</>
	);
}

function ID2() {
	return (
		<section>
			<header className="text-2xl flex flex-col">
				<p className="inline-flex">
					<Tag>h1</Tag>
					<span className="mx-2">-</span>
					<Tag>h6</Tag>
				</p>
				<p>
					<Us />
					<H>H</H>
					eadings
				</p>
				<p>
					<Mx />
					Títulos o encabezados<X>*</X>
				</p>
			</header>
			<div className="flex flex-col gap-2">
				<p>
					Nos ayudan a crear títulos y subtítulos en el contenido, como los que
					encontramos en libros de texto.
				</p>
				<p>Van del nivel 1 al nivel 6, siendo el 1 el más importante.</p>{' '}
			</div>
			<p className="text-xs my-2">
				<X>*</X>No confundir con <Tag>title</Tag> (título) o <Tag>header</Tag>{' '}
				(encabezado) por su traducción al español.
			</p>

			<HTMLCodeWithPreview
				className="flex-col"
				code={code.headings}
				frame="h-[290px]"
			/>
		</section>
	);
}

function ID3() {
	return (
		<section>
			<header className="text-2xl flex flex-col">
				<p>
					<Tag>p</Tag>
				</p>
				<p>
					<Us />
					<H>P</H>
					aragraph
				</p>

				<p>
					<Mx />
					Párrafo
				</p>
			</header>
			<p>Nos ayuda a crear bloques de texto.</p>

			<HTMLCodeWithPreview
				className="flex-col"
				code={code.paragraphs}
				frame="h-[200px]"
			/>
		</section>
	);
}

function ID4() {
	return (
		<section>
			<header className="text-2xl flex flex-col">
				<p>
					<Tag>ul</Tag>
				</p>
				<p>
					<Us />
					<H>U</H>nordered <H>L</H>ist{' '}
				</p>
				<p>
					<Mx />
					Lista desordenada
				</p>
			</header>
			<div className="flex flex-col gap-2">
				<p>Nos ayuda a crear listas donde el orden es irrelevante.</p>
				<p>El estilo por defecto muestra los artículos utilizando viñetas.</p>
				<p>
					Los artículos deben ser creados con con <Tag>li</Tag>.
				</p>
			</div>

			<HTMLCodeWithPreview
				className="flex-col"
				code={code.ul}
				frame="h-[124px]"
			/>

			<header className="text-2xl flex flex-col">
				<p>
					<Tag>li</Tag>
				</p>
				<p>
					<Us />
					<H>L</H>ist <H>I</H>tem
				</p>
				<p>
					<Mx />
					Elemento de lista
				</p>
			</header>
			<p className="my-4">
				Nos ayuda a crear artículos dentro de las etiquetas de lista.
			</p>
		</section>
	);
}

function ID5() {
	return (
		<section>
			<header className="text-2xl flex flex-col">
				<p>
					<Tag>ol</Tag>
				</p>
				<p>
					<Us />
					<H>O</H>rdered <H>L</H>ist
				</p>
				<p>
					<Mx />
					Lista ordenada
				</p>
			</header>
			<div className="flex flex-col gap-2">
				<p>Nos ayuda a crear listas donde el orden es relevante.</p>
				<p>El estilo por defecto muestra los artículos de manera enumerada.</p>
				<p>
					Los artículos deben ser creados con con <Tag>li</Tag>.
				</p>
			</div>

			<HTMLCodeWithPreview
				className="flex-col"
				code={code.ol}
				frame="h-[124px]"
			/>

			<header className="text-2xl flex flex-col">
				<p>
					<Tag>li</Tag>
				</p>
				<p>
					<Us />
					<H>L</H>ist <H>I</H>tem
				</p>
				<p>
					<Mx />
					Elemento de lista
				</p>
			</header>
			<p className="my-4">
				Nos ayuda a crear artículos dentro de las etiquetas de lista.
			</p>
		</section>
	);
}

function ID6() {
	return (
		<section>
			<header className="text-2xl flex flex-col">
				<p>
					<Tag>br</Tag>
				</p>
				<p>
					<Us />
					Line <H>Br</H>eak
				</p>
				<p>
					<Mx />
					Salto de línea
				</p>
			</header>
			<p>Nos ayuda a crear espacio entre los bloques de contenido.</p>

			<HTMLCodeWithPreview
				className="flex-col"
				code={code.br}
				frame="h-[118px]"
			/>
		</section>
	);
}

function ID7() {
	return (
		<section>
			<header className="text-2xl flex flex-col">
				<p>
					<Tag>hr</Tag>
				</p>
				<p>
					<Us />
					<H>H</H>orizontal <H>R</H>ule
				</p>

				<p>
					<Mx />
					Regla horizontal
				</p>
			</header>
			<p>
				Nos ayuda a crear una línea de separación entre los bloques de
				contenido.
			</p>

			<HTMLCodeWithPreview
				className="flex-col"
				code={code.hr}
				frame="h-[102px]"
			/>
		</section>
	);
}
function ID8() {
	return (
		<section>
			<header className="text-2xl flex flex-col">
				<p>
					<Tag>a</Tag>
				</p>
				<p>
					<Us />
					<H>A</H>nchor
				</p>
				<p>
					<Mx />
					Ancla
				</p>
			</header>
			<div className="flex flex-col gap-2">
				<p>
					Nos ayuda a crear enlaces a otras páginas
					<X>*</X>.
				</p>
				<p>
					Necesita el atributo <Attribute>href</Attribute>, el valor debe ser la
					dirección a donde queremos redirigir.
				</p>
				<p>
					Opcionalmente podemos usar el atributo y valor{' '}
					<span className="font-mono">
						<Attribute>target</Attribute>=<Value>"_blank"</Value>
					</span>{' '}
					para hacer que el enlace abra en una nueva pestaña.
				</p>
			</div>
			<p className="text-xs my-2">
				<X>*</X>También pueden ser usados para crear enlaces a secciones de la
				misma página.
			</p>

			<HTMLCodeWithPreview
				className="flex-col"
				code={code.a}
				frame="h-[100px]"
			/>
		</section>
	);
}

function ID9() {
	return (
		<section>
			<header className="text-2xl flex flex-col">
				<Tag>Img</Tag>
				<p>
					<Us />
					<H>Im</H>a<H>g</H>e
				</p>
				<p>
					<Mx />
					Imagen
				</p>
			</header>
			<div className="flex flex-col gap-2">
				<p>Nos ayuda a insertar imágenes.</p>
				<p>
					Necesita el atributo <Attribute>src</Attribute>, el valor debe ser la
					dirección donde se encuentra alojado el archivo.
				</p>
				<p>
					Opcionalmente podemos utilizar el atributo <Attribute>alt</Attribute>{' '}
					donde el valor es una descripción de la imagen. Sirve para cuando no
					carga o para usuarios con ajustes de accesibilidad activados.
				</p>
			</div>

			<HTMLCodeWithPreview
				className="flex-col"
				code={code.img}
				frame="h-[316px]"
			/>
		</section>
	);
}

function ID10() {
	return (
		<section>
			<header className="text-2xl flex flex-col">
				<p>
					<Tag>div</Tag>
				</p>
				<p>
					<Us />
					<H>Div</H>ision
				</p>
				<p>
					<Mx />
					División
				</p>
			</header>
			<p>
				Nos ayuda a crear agrupaciones, usualmente para agregar estilos a
				bloques de contenido que están relacionados visualmente.
			</p>

			<HTMLCodeWithPreview
				className="flex-col"
				code={code.div}
				frame="h-[148px]"
			/>
		</section>
	);
}

function ID11() {
	return (
		<section>
			<header className="text-2xl flex flex-col">
				<p>
					<Tag>span</Tag>
				</p>
				<p>
					<Us />
					<H>Span</H>
				</p>
				<p>
					<Mx />
					Abarcar
				</p>
			</header>
			<p>
				Similar a <Tag>div</Tag>, sólo que nos ayuda a seccionar un renglón, en
				lugar de seccionar bloques.
			</p>

			<HTMLCodeWithPreview
				className="flex-col"
				code={code.span}
				frame="h-[100px]"
			/>
		</section>
	);
}

function ID12() {
	return (
		<section>
			<header className="text-2xl flex flex-col">
				<p className="text-[#808080]">{`<!-- ... -->`}</p>
				<p>
					<Us />
					Comment
				</p>
				<p>
					<Mx />
					Comentario
				</p>
			</header>
			<div className="flex flex-col gap-2">
				<p>Nos ayuda a escribir notas o explicaciones sobre el código.</p>
				<p>
					Usualmente usados por y para desarrolladores, ya que son quienes
					tienen acceso al código. Aunque en realidad cualquiera puede leerlos
					al inspeccionar una página.
				</p>
			</div>

			<HTMLCodeWithPreview
				className="flex-col"
				code={code.comment}
				frame="h-[100px]"
			/>
		</section>
	);
}
