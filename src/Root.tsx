import {AbsoluteFill, Folder, Still} from 'remotion';
import TikTokSlide from './components/tiktok-slide';
import TikTokSlideLayout from './components/tiktok-slide-layout';

import StreamSchedule from './stills/stream-schedule-v1';

import {
	tablasEnHtml,
	aprendamosHtml,
	formasDeAgregarEstilos,
	propiedadesBasicasCss,
	comoSeleccionarElementos,
	operadoresAritmeticos,
	convencionesDeNombramiento,
} from './stills';
import CheckerBg from './compositions/checker-bg';
import LineBg from './compositions/line-bg';

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
	readonly id: string;
	readonly title?: string;
	readonly slides: React.FC[];
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
											<span className="text-right text-xs text-white/10">
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
			<Folder name="stream">
				<StreamSchedule />
				<LineBg />
				<CheckerBg />
			</Folder>
		</>
	);
};

function ID0() {
	return <></>;
}
