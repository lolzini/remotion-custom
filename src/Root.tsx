import {AbsoluteFill, Composition, Folder} from 'remotion';
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
import CheckerBg from './compositions/checker-bg';
import LineBg from './compositions/line-bg';

import Comp1 from './compositions/comp1';

import './style.css';
import DotBg from './compositions/dot-bg';
import Goals2025 from './stills/goals-2025';
import DotBgOriginal from './compositions/dot-bg-original';
import Thumbnail from './thumbnails/thumbnail';
import Emoji from './emoji';

import * as Background from './compositions/background';

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
				<DotBg />
				<DotBgOriginal />
				<DuolingoClub />
				<CoverTwitch />
				<CoverX />
				<CoverYouTube />
			</Folder>
			<Folder name="posts">
				<Goals2025 />
			</Folder>
			<Folder name="videos">
				<Comp1 />
			</Folder>
			<Folder name="thumbnails">
				<Thumbnail />
				<Emoji />
			</Folder>
			<Folder name="backgrounds">
				<Composition
					id="cross-section"
					{...Background}
					defaultProps={{
						name: 'cross-section' as const,
						color: '#00000016',
						background: '#ffffff',
						direction: 'rtl' as const,
						scale: 4,
						offset: 20,
					}}
				/>
				<Composition
					id="brick-wall-1"
					{...Background}
					defaultProps={{
						name: 'cross-section' as const,
						color: '#00000016',
						background: '#ffffff',
						direction: 'rtl' as const,
						scale: 4,
						offset: 20,
					}}
				/>
				<Composition
					id="circles-4"
					{...Background}
					defaultProps={{
						name: 'circles-4' as const,
						color: '#00000016',
						background: '#ffffff',
						direction: 'rtl' as const,
						scale: 2,
						offset: 40,
					}}
				/>
				<Composition
					id="scales-9"
					{...Background}
					defaultProps={{
						name: 'scales-9' as const,
						color: '#00000016',
						background: '#ffffff',
						direction: 'rtl' as const,
						scale: 2,
						offset: 34.116,
					}}
				/>
			</Folder>
		</>
	);
};

export const FPS = 30;
export const DIF = FPS;

function ID0() {
	return <></>;
}
