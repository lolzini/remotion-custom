import {
	AbsoluteFill,
	Audio,
	Composition,
	Img,
	Sequence,
	Series,
	Video,
	staticFile,
} from 'remotion';
import {z} from 'zod';
import {loadFont} from '@remotion/google-fonts/ShantellSans';

import {AnimatedText} from '../../components/animations/animated-text';
import Dissolve from '../../components/animations/dissolve';
import PostIt from '../../components/post-it';
import Shrink from '../../components/animations/shrink';
import Rect from '../../components/rect';
import Wrapper from '../../components/animations/wrapper';
import AnimatedStep from '../../components/animations/animated-step';

const {fontFamily} = loadFont();

const FPS = 30;
const SEC = FPS;
const MIN = 60 * Number(SEC);

export const sec = (num: number = 1) => num * SEC;

const schema = z.object({
	bg: z.enum([
		'dot-bg-original_str',
		'dot-bg-original',
		'checker-bg',
		'line-bg',
	]),
});

const Component = ({bg}) => {
	return (
		<main style={{fontFamily}}>
			<Background bg={bg} />
			<Intro />
			<Skills />
		</main>
	);
};

export default () => (
	<Composition
		id="comp1"
		component={Component}
		width={1920}
		height={1080}
		fps={FPS}
		durationInFrames={1 * Number(MIN)}
		schema={schema}
		defaultProps={{bg: 'dot-bg-original_str'}}
	/>
);

function Background({bg}) {
	return (
		<AbsoluteFill>
			<Video loop src={staticFile(`/videos/${bg}.mp4`)} />
		</AbsoluteFill>
	);
}

function Intro() {
	return (
		<>
			<Series>
				<Series.Sequence durationInFrames={sec(3)}>
					<AbsoluteFill className="flex items-center justify-center">
						<AnimatedText
							className="text-9xl font-bold"
							text="¿Cómo aprender inglés?"
							durationPerLetter={2}
						/>
						<Audio
							src={staticFile('audio/writing-effect.mp3')}
							startFrom={3}
							endAt={45}
						/>
					</AbsoluteFill>
				</Series.Sequence>
				<Series.Sequence durationInFrames={sec(0.5)}>
					<AbsoluteFill className="flex items-center justify-center">
						<Dissolve reverse durationInFrames={sec(0.5)}>
							<div className="text-9xl font-bold">¿Cómo aprender inglés?</div>
						</Dissolve>
					</AbsoluteFill>
				</Series.Sequence>
			</Series>
			<Sequence
				className="flex translate-y-60 items-center justify-center"
				from={sec(2.66)}
				durationInFrames={sec(2)}
			>
				<Shrink>
					<Dissolve>
						<PostIt
							className="flex rotate-3 items-center text-center"
							size="lg"
						>
							la única guía que vamos a necesitar
						</PostIt>
					</Dissolve>
				</Shrink>
			</Sequence>
			<Sequence
				className="flex translate-y-60 items-center justify-center"
				from={110}
				durationInFrames={30}
			>
				<Dissolve reverse>
					<PostIt className="flex rotate-3 items-center text-center" size="lg">
						la única guía que vamos a necesitar
					</PostIt>
				</Dissolve>
			</Sequence>
			<Sequence from={110} durationInFrames={30}>
				<div className="absolute bottom-40 right-40 rotate-12">
					<Dissolve>
						<Shrink>
							<Img
								className="max-h-20 object-cover"
								src={staticFile('/images/resultao_1.webp')}
							/>
						</Shrink>
					</Dissolve>
				</div>
			</Sequence>
		</>
	);
}

function Skills() {
	return (
		<Series>
			<Series.Sequence
				className="flex flex-col items-center justify-center gap-5"
				offset={sec(5)}
				durationInFrames={sec()}
			>
				<Dissolve durationInFrames={sec()}>
					<Rect>Leer 👁️</Rect>
				</Dissolve>
				<Rect className="opacity-0">Escribir ✍️</Rect>
				<Rect className="opacity-0">Hablar 🗣️</Rect>
				<Rect className="opacity-0">Escuchar 👂</Rect>
			</Series.Sequence>
			<Series.Sequence
				className="flex flex-col items-center justify-center gap-5"
				durationInFrames={sec()}
			>
				<Rect>Leer 👁️</Rect>
				<Dissolve durationInFrames={sec()}>
					<Rect>Escribir ✍️</Rect>
				</Dissolve>
				<Rect className="opacity-0">Hablar 🗣️</Rect>
				<Rect className="opacity-0">Escuchar 👂</Rect>
			</Series.Sequence>
			<Series.Sequence
				className="flex flex-col items-center justify-center gap-5"
				durationInFrames={sec()}
			>
				<Rect>Leer 👁️</Rect>
				<Rect>Escribir ✍️</Rect>
				<Dissolve durationInFrames={sec()}>
					<Rect>Hablar 🗣️</Rect>
				</Dissolve>
				<Rect className="opacity-0">Escuchar 👂</Rect>
			</Series.Sequence>
			<Series.Sequence
				className="flex flex-col items-center justify-center gap-5"
				durationInFrames={sec(2)}
			>
				<Rect>Leer 👁️</Rect>
				<Rect>Escribir ✍️</Rect>
				<Rect>Hablar 🗣️</Rect>
				<Dissolve durationInFrames={sec()}>
					<Rect>Escuchar 👂</Rect>
				</Dissolve>
			</Series.Sequence>
			<Series.Sequence
				className="flex flex-col items-center justify-center gap-5"
				durationInFrames={sec()}
			>
				<Dissolve reverse durationInFrames={sec()}>
					<Rect>Leer 👁️</Rect>
				</Dissolve>
				<Dissolve reverse durationInFrames={sec()}>
					<Rect>Escribir ✍️</Rect>
				</Dissolve>
				<Dissolve reverse durationInFrames={sec()}>
					<Rect>Hablar 🗣️</Rect>
				</Dissolve>
				<Dissolve reverse durationInFrames={sec()}>
					<Rect>Escuchar 👂</Rect>
				</Dissolve>
			</Series.Sequence>
		</Series>
	);
}

function Categories() {
	return (
		<Series>
			<Series.Sequence
				className="items-center justify-center"
				offset={sec(11)}
				durationInFrames={sec(5)}
			>
				<Dissolve>
					<div className="flex h-fit gap-20 p-10">
						<section className="flex flex-col justify-center">
							<Rect className="min-w-full" color="blue">
								Intención
							</Rect>
						</section>
						<section className="flex flex-col items-center justify-around">
							<Rect className="min-w-full" color="blue">
								Comprensión
							</Rect>
							<Rect className="min-w-full" color="blue">
								Expresión
							</Rect>
						</section>
						<section className="flex flex-col gap-20">
							<div className="flex flex-col items-center gap-10">
								<Rect className="min-w-full" color="blue">
									Leer 👁️
								</Rect>
								<Rect className="min-w-full" color="blue">
									Escuchar 👂
								</Rect>
							</div>
							<div className="flex flex-col items-center gap-10">
								<Rect className="min-w-full" color="blue">
									Escribir ✍️
								</Rect>
								<Rect className="min-w-full" color="blue">
									Hablar 🗣️
								</Rect>
							</div>
						</section>
					</div>
				</Dissolve>
			</Series.Sequence>
			<Series.Sequence
				className="items-center justify-center"
				durationInFrames={sec()}
			>
				<Dissolve reverse>
					<div className="flex h-fit gap-20 p-10">
						<section className="flex flex-col justify-center">
							<Rect className="min-w-full" color="blue">
								Intención
							</Rect>
						</section>
						<section className="flex flex-col items-center justify-around">
							<Rect className="min-w-full" color="blue">
								Comprensión
							</Rect>
							<Rect className="min-w-full" color="blue">
								Expresión
							</Rect>
						</section>
						<section className="flex flex-col gap-20">
							<div className="flex flex-col items-center gap-10">
								<Rect className="min-w-full" color="blue">
									Leer 👁️
								</Rect>
								<Rect className="min-w-full" color="blue">
									Escuchar 👂
								</Rect>
							</div>
							<div className="flex flex-col items-center gap-10">
								<Rect className="min-w-full" color="blue">
									Escribir ✍️
								</Rect>
								<Rect className="min-w-full" color="blue">
									Hablar 🗣️
								</Rect>
							</div>
						</section>
					</div>
				</Dissolve>
			</Series.Sequence>
			<Series.Sequence
				className="items-center justify-center"
				durationInFrames={sec(5)}
			>
				<Dissolve>
					<div className="flex h-fit gap-20 p-10">
						<section className="flex flex-col justify-center">
							<Rect className="min-w-full" color="red">
								Contexto
							</Rect>
						</section>
						<section className="flex flex-col items-center justify-around">
							<Rect className="min-w-full" color="red">
								Académico
							</Rect>
							<Rect className="min-w-full" color="red">
								Social
							</Rect>
						</section>
						<section className="flex flex-col gap-20">
							<div className="flex flex-col items-center gap-10">
								<Rect className="min-w-full" color="red">
									Leer 👁️
								</Rect>
								<Rect className="min-w-full" color="red">
									Escribir ✍️
								</Rect>
							</div>
							<div className="flex flex-col items-center gap-10">
								<Rect className="min-w-full" color="red">
									Escuchar 👂
								</Rect>
								<Rect className="min-w-full" color="red">
									Hablar 🗣️
								</Rect>
							</div>
						</section>
					</div>
				</Dissolve>
			</Series.Sequence>
			<Series.Sequence
				className="items-center justify-center"
				durationInFrames={sec()}
			>
				<Dissolve reverse>
					<div className="flex h-fit gap-20 p-10">
						<section className="flex flex-col justify-center">
							<Rect className="min-w-full" color="red">
								Contexto
							</Rect>
						</section>
						<section className="flex flex-col items-center justify-around">
							<Rect className="min-w-full" color="red">
								Académico
							</Rect>
							<Rect className="min-w-full" color="red">
								Social
							</Rect>
						</section>
						<section className="flex flex-col gap-20">
							<div className="flex flex-col items-center gap-10">
								<Rect className="min-w-full" color="red">
									Leer 👁️
								</Rect>
								<Rect className="min-w-full" color="red">
									Escribir ✍️
								</Rect>
							</div>
							<div className="flex flex-col items-center gap-10">
								<Rect className="min-w-full" color="red">
									Escuchar 👂
								</Rect>
								<Rect className="min-w-full" color="red">
									Hablar 🗣️
								</Rect>
							</div>
						</section>
					</div>
				</Dissolve>
			</Series.Sequence>
			<Series.Sequence
				className="items-center justify-center"
				durationInFrames={sec(3)}
			>
				<div className="flex flex-wrap gap-8">
					<Shrink>
						<Dissolve>
							<PostIt
								className="flex items-center justify-center text-center"
								size="lg"
							>
								Nuestro esfuerzo debe priorizarse
							</PostIt>
						</Dissolve>
					</Shrink>
				</div>
			</Series.Sequence>
			<Series.Sequence
				className="items-center justify-center"
				durationInFrames={sec()}
			>
				<div className="flex flex-wrap gap-8">
					<Shrink reverse>
						<Dissolve reverse>
							<PostIt
								className="flex items-center justify-center text-center"
								size="lg"
							>
								Nuestro esfuerzo debe priorizarse
							</PostIt>
						</Dissolve>
					</Shrink>
				</div>
			</Series.Sequence>
			<Series.Sequence
				className="items-center justify-center"
				durationInFrames={sec(3)}
			>
				<main className="flex gap-20">
					<section className="flex flex-col items-center justify-around">
						<Rect className="min-w-full" color="blue">
							Comprensión
						</Rect>
						<Rect className="min-w-full border-dashed" color="lightBlue">
							Expresión
						</Rect>
					</section>
					<section className="flex flex-col items-center gap-20">
						<div className="flex flex-col gap-10">
							<Rect className="min-w-full" color="blue">
								Leer 👁️
							</Rect>
							<Rect className="min-w-full" color="blue">
								Escuchar 👂
							</Rect>
						</div>
						<div className="flex flex-col gap-10">
							<Rect className="min-w-full border-dashed" color="lightBlue">
								Escribir ✍️
							</Rect>
							<Rect className="min-w-full border-dashed" color="lightBlue">
								Hablar 🗣️
							</Rect>
						</div>
					</section>
				</main>
			</Series.Sequence>
			<Series.Sequence
				className="items-center justify-center"
				durationInFrames={sec(3)}
			>
				<main className="flex gap-20">
					<section className="flex flex-col items-center justify-around">
						<Rect className="min-w-full" color="red">
							Académico
						</Rect>
						<Rect className="min-w-full border-dashed" color="pink">
							Social
						</Rect>
					</section>
					<section className="flex flex-col items-center gap-20">
						<div className="flex flex-col gap-10">
							<Rect className="min-w-full" color="red">
								Leer 👁️
							</Rect>
							<Rect className="min-w-full" color="red">
								Escribir ✍️
							</Rect>
						</div>
						<div className="flex flex-col gap-10">
							<Rect className="min-w-full border-dashed" color="pink">
								Escuchar 👂
							</Rect>
							<Rect className="min-w-full border-dashed" color="pink">
								Hablar 🗣️
							</Rect>
						</div>
					</section>
				</main>
			</Series.Sequence>
		</Series>
	);
}

function Steps() {
	return (
		<Series>
			<Series.Sequence
				name="post-it"
				className="items-center justify-center"
				durationInFrames={sec(2)}
			>
				<Dissolve>
					<Shrink>
						<PostIt center size="lg">
							Dependen del nivel que tengamos
						</PostIt>
					</Shrink>
				</Dissolve>
			</Series.Sequence>
			<Series.Sequence
				name="post-it"
				className="items-center justify-center"
				durationInFrames={sec(1)}
			>
				<Dissolve reverse>
					<Shrink reverse>
						<PostIt center size="lg">
							Dependen del nivel que tengamos
						</PostIt>
					</Shrink>
				</Dissolve>
			</Series.Sequence>
			<Series.Sequence
				className="flex items-center justify-center gap-20"
				durationInFrames={sec(1)}
			>
				<Dissolve>
					<Wrapper className="flex flex-col items-center justify-end gap-20">
						<Rect className="border-dashed">Abecedario</Rect>
					</Wrapper>
				</Dissolve>
				<Wrapper
					hidden
					className="flex flex-col items-center justify-end gap-20"
				>
					<Rect className="border-dashed">Frases básicas</Rect>
				</Wrapper>
				<Wrapper
					hidden
					className="flex flex-col items-center justify-end gap-20"
				>
					<Rect className="border-dashed">Vida diaria</Rect>
					<Rect>Vocabulario fundamental</Rect>
					<Rect className="border-dashed">Técnico</Rect>
				</Wrapper>
				<Wrapper
					hidden
					className="flex flex-col items-center justify-end gap-20"
				>
					<Rect>Salto de fe</Rect>
				</Wrapper>
			</Series.Sequence>
			<Series.Sequence
				className="flex items-center justify-center gap-20"
				durationInFrames={sec(1)}
			>
				<Wrapper className="flex flex-col items-center justify-end gap-20">
					<Rect className="border-dashed">Abecedario</Rect>
				</Wrapper>

				<Dissolve>
					<Wrapper className="flex flex-col items-center justify-end gap-20">
						<Rect className="border-dashed">Frases básicas</Rect>
					</Wrapper>
				</Dissolve>
				<Wrapper
					hidden
					className="flex flex-col items-center justify-end gap-20"
				>
					<Rect className="border-dashed">Vida diaria</Rect>
					<Rect>Vocabulario fundamental</Rect>
					<Rect className="border-dashed">Técnico</Rect>
				</Wrapper>
				<Wrapper
					hidden
					className="flex flex-col items-center justify-end gap-20"
				>
					<Rect>Salto de fe</Rect>
				</Wrapper>
			</Series.Sequence>
			<Series.Sequence
				className="flex items-center justify-center gap-20"
				durationInFrames={sec(1)}
			>
				<Wrapper className="flex flex-col items-center justify-end gap-20">
					<Rect className="border-dashed">Abecedario</Rect>
				</Wrapper>

				<Wrapper className="flex flex-col items-center justify-end gap-20">
					<Rect className="border-dashed">Frases básicas</Rect>
				</Wrapper>
				<Wrapper className="flex flex-col items-center justify-end gap-20">
					<Wrapper hidden>
						<Rect className="border-dashed">Vida diaria</Rect>
					</Wrapper>
					<Dissolve>
						<Rect>Vocabulario fundamental</Rect>
					</Dissolve>
					<Wrapper hidden>
						<Rect className="border-dashed">Técnico</Rect>
					</Wrapper>
				</Wrapper>
				<Wrapper
					hidden
					className="flex flex-col items-center justify-end gap-20"
				>
					<Rect>Salto de fe</Rect>
				</Wrapper>
			</Series.Sequence>
			<Series.Sequence
				className="flex items-center justify-center gap-20"
				durationInFrames={sec(1)}
			>
				<Wrapper className="flex flex-col items-center justify-end gap-20">
					<Rect className="border-dashed">Abecedario</Rect>
				</Wrapper>

				<Wrapper className="flex flex-col items-center justify-end gap-20">
					<Rect className="border-dashed">Frases básicas</Rect>
				</Wrapper>
				<Wrapper className="flex flex-col items-center justify-end gap-20">
					<Dissolve>
						<Wrapper>
							<Rect className="border-dashed">Vida diaria</Rect>
						</Wrapper>
					</Dissolve>
					<Rect>Vocabulario fundamental</Rect>
					<Wrapper hidden>
						<Rect className="border-dashed">Técnico</Rect>
					</Wrapper>
				</Wrapper>
				<Wrapper
					hidden
					className="flex flex-col items-center justify-end gap-20"
				>
					<Rect>Salto de fe</Rect>
				</Wrapper>
			</Series.Sequence>
			<Series.Sequence
				className="flex items-center justify-center gap-20"
				durationInFrames={sec(1)}
			>
				<Wrapper className="flex flex-col items-center justify-end gap-20">
					<Rect className="border-dashed">Abecedario</Rect>
				</Wrapper>

				<Wrapper className="flex flex-col items-center justify-end gap-20">
					<Rect className="border-dashed">Frases básicas</Rect>
				</Wrapper>
				<Wrapper className="flex flex-col items-center justify-end gap-20">
					<Wrapper>
						<Rect className="border-dashed">Vida diaria</Rect>
					</Wrapper>
					<Rect>Vocabulario fundamental</Rect>
					<Dissolve>
						<Wrapper>
							<Rect className="border-dashed">Técnico</Rect>
						</Wrapper>
					</Dissolve>
				</Wrapper>
				<Wrapper
					hidden
					className="flex flex-col items-center justify-end gap-20"
				>
					<Rect>Salto de fe</Rect>
				</Wrapper>
			</Series.Sequence>
			<Series.Sequence
				className="flex items-center justify-center gap-20"
				durationInFrames={sec(3)}
			>
				<Wrapper className="flex flex-col items-center justify-end gap-20">
					<Rect className="border-dashed">Abecedario</Rect>
				</Wrapper>

				<Wrapper className="flex flex-col items-center justify-end gap-20">
					<Rect className="border-dashed">Frases básicas</Rect>
				</Wrapper>
				<Wrapper className="flex flex-col items-center justify-end gap-20">
					<Wrapper>
						<Rect className="border-dashed">Vida diaria</Rect>
					</Wrapper>
					<Rect>Vocabulario fundamental</Rect>

					<Wrapper>
						<Rect className="border-dashed">Técnico</Rect>
					</Wrapper>
				</Wrapper>
				<Dissolve>
					<Wrapper className="flex flex-col items-center justify-end gap-20">
						<Rect>Salto de fe</Rect>
					</Wrapper>
				</Dissolve>
			</Series.Sequence>
		</Series>
	);
}
