import {Img, staticFile} from 'remotion';

export default function () {
	return (
		<div className="flex flex-col gap-4 text-center mt-16">
			<section className="flex flex-col gap-2">
				<p className="font-display text-4xl">
					¿Quieres aprender Desarrollo Web?
				</p>
				<ul className="list-disc flex flex-col text-left justify-center items-center">
					<li className="font-alt text-2xl">Videos</li>
					<li className="font-alt text-2xl">Artículos</li>
					<li className="font-alt text-2xl">Planes de estudio</li>
					<li className="font-alt text-2xl">Clases pre-grabadas</li>
					<li className="font-alt text-2xl">
						Lecciones remotas personalizadas
					</li>
					<li className="font-alt text-2xl">
						Más información y redes sociales
					</li>
				</ul>
			</section>
			<p className="text-4xl font-alt">Para más redes</p>
			<section />
			<section className="flex flex-col gap-2">
				<p className="text-6xl font-display">Visita el link en mi biografía</p>
				<Img
					className="rounded-full w-40 mx-auto"
					src={staticFile('/images/pp.png')}
				/>
				<p className="text-6xl font-display">lolzini</p>
			</section>
		</div>
	);
}
