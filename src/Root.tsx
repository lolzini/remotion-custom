import {AbsoluteFill, Folder} from 'remotion';
import TikTokSlide from './components/tiktok-slide';
import TikTokSlideLayout from './components/tiktok-slide-layout';

import {
	tablasEnHtml,
	aprendamosHtml,
	formasDeAgregarEstilos,
	propiedadesBasicasCss,
	comoSeleccionarElementos,
	operadoresAritmeticos,
	convencionesDeNombramiento,
} from './stills';

import './style.css';

const folders = [
	{...convencionesDeNombramiento},
	{...aprendamosHtml},
	{...operadoresAritmeticos},
	{...formasDeAgregarEstilos},
	{...propiedadesBasicasCss},
	{...comoSeleccionarElementos},
	{...tablasEnHtml},
	{id: 'blank', slides: [() => <ID0 />]},
];

type SlideFolder = {
	id: string;
	title?: string;
	slides: React.FC[];
};

export const RemotionRoot: React.FC = () => {
	return (
		<>
			{folders.map(({title, id, slides}: SlideFolder) => {
				return (
					<Folder key={id} name={id}>
						{slides.map((Render, i) => (
							<TikTokSlide key={i} id={`${id}--${i}`}>
								<TikTokSlideLayout>
									<Render />
									{i === slides.length - 1 ? null : (
										<AbsoluteFill>
											<span className="text-xs text-right text-white/10">
												{title} {i + 1}/{slides.length - 1}
											</span>
										</AbsoluteFill>
									)}
								</TikTokSlideLayout>
							</TikTokSlide>
						))}
					</Folder>
				);
			})}
		</>
	);
};

function ID0() {
	return <></>;
}
