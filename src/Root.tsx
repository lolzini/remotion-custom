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

import {useCurrentFrame, interpolate} from 'remotion';
import Scales9 from './patterns/scales-9';
import BrickWall1 from './patterns/brick-wall-1';
import {z} from 'zod';

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
				<Composition
					id="background"
					fps={FPS}
					durationInFrames={DIF}
					component={Background}
					width={1920}
					height={1080}
					schema={schema}
					defaultProps={{direction: 'ltr'}}
				/>
			</Folder>
		</>
	);
};

const FPS = 30;
const DIF = FPS * 2;

const schema = z.object({direction: z.enum(['rtl', 'ltr', 'btt', 'ttb'])});

function Background({direction = 'btt'}: z.infer<typeof schema>) {
	const frame = useCurrentFrame();

	const getTransform = () => {
		switch (direction) {
			case 'ltr':
				return `translateX(${interpolate(frame, [0, DIF], [-1920, 1920])}px)`;
			case 'rtl':
				return `translateX(${interpolate(frame, [0, DIF], [0, -1920])}px)`;
			case 'ttb':
				return `translateY(${interpolate(frame, [0, DIF], [-1080, 1080])}px)`;
			case 'btt':
				return `translateY(${interpolate(frame, [0, DIF], [0, -1080])}px)`;
			default:
				return `translateX(${interpolate(frame, [0, DIF], [0, -1920])}px)`;
		}
	};

	return (
		<AbsoluteFill style={{transform: getTransform()}}>
			<div className="grid-col-2 grid">
				<BrickWall1 width={1920} height={1080} />
				<BrickWall1 width={1920} height={1080} />
				<BrickWall1 width={1920} height={1080} />
				<BrickWall1 width={1920} height={1080} />
			</div>
		</AbsoluteFill>
	);
}

function ID0() {
	return <></>;
}
