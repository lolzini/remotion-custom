import {AbsoluteFill, Folder} from 'remotion';
import TikTokSlide from './components/tiktok-slide';
import TikTokSlideLayout from './components/tiktok-slide-layout';

import StreamSchedule from './stills/stream-schedule-v1';
import DuolingoClub from './stills/duolingo-club';
import CoverTwitch from './stills/cover-twitch';
import CoverX from './stills/cover-x';
import CoverYouTube from './stills/cover-youtube';

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
import Goals2025 from './stills/goals-2025';

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
				<DuolingoClub />
				<CoverTwitch />
				<CoverX />
				<CoverYouTube />
			</Folder>
			<Folder name="posts">
				<Goals2025 />
			</Folder>
		</>
	);
};

function ID0() {
	return <></>;
}
