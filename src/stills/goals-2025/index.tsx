import {AbsoluteFill, Still, random} from 'remotion';
import {loadFont as loadShantellSans} from '@remotion/google-fonts/ShantellSans';
import {loadFont as loadCaveatBrush} from '@remotion/google-fonts/CaveatBrush';

const {fontFamily} = loadShantellSans();
const {fontFamily: CaveatBrush} = loadCaveatBrush();

import './style.css';
import clsx from 'clsx';

const goals = [
	{text: 'Terminar el curso gratuito de JS'},
	{text: 'Crear un curso de programación de paga'},
	{text: 'Publicar un ebook sobre programación'},
	{text: 'Publicar un video largo cada mes'},
	{text: 'Conseguir un video viral en YT'},
	{text: 'Crear por lo menos un artículo cada semana para el blog'},
	{text: 'Crear una ilustración cada semana'},
	{text: 'Interactuar más en Twitter/X'},
];

const Component = () => {
	return (
		<>
			<AbsoluteFill className="bg-white">
				<div className="flex flex-col items-center justify-center">
					{Array(20)
						.fill(null)
						.map(() => {
							return <Row />;
						})}
				</div>
			</AbsoluteFill>
			<AbsoluteFill
				className="items-center justify-center"
				style={{fontFamily}}
			>
				<section
					className={clsx(
						'post-it-container',
						'flex flex-wrap items-center justify-center gap-10 text-4xl',
					)}
				>
					{goals.map(({text, completed}, i) => {
						return (
							<>
								<PostIt completed={completed} id={i}>
									{text}
								</PostIt>
							</>
						);
					})}
				</section>
			</AbsoluteFill>
			<AbsoluteFill style={{fontFamily}}>
				<h1
					className={clsx(
						'tape',
						'w-fit translate-x-10 translate-y-4 rotate-3 px-10 py-5 text-center text-6xl font-bold text-black/70 shadow',
					)}
				>
					Metas 2025
				</h1>
				<h2
					className="fixed bottom-4 right-4 text-8xl"
					style={{fontFamily: CaveatBrush}}
				>
					lolzini
				</h2>
			</AbsoluteFill>
		</>
	);
};

export default () => {
	return (
		<Still id="goals-2025" width={1200} height={1200} component={Component} />
	);
};

function Completed() {
	return (
		<div className="absolute inset-0 flex items-center justify-center">
			<div className="rotate-[-10deg] rounded-md border-4 border-red-700 px-4 py-2 text-4xl font-bold uppercase text-red-700 opacity-90 shadow-lg">
				Completado
			</div>
		</div>
	);
}

function PostIt({children, id, completed}) {
	const colors = ['#FFFF99', '#FFCC99', '#CCFF99', '#99CCFF', '#FF99CC'];

	// Pick a random color from the list
	const backgroundColor = colors[Math.floor(random(id * 10) * colors.length)];

	return (
		<div
			className={clsx(
				'post-it',
				'flex h-[20rem] w-[20rem] items-center justify-center bg-[#FFFF99] p-8 text-center shadow-md',
			)}
			style={{backgroundColor}}
		>
			{children}
			{completed && <Completed />}
		</div>
	);
}

function Row() {
	return (
		<div className="flex">
			{Array(20)
				.fill(null)
				.map(() => (
					<div className="flex h-[60px] w-[60px] items-center justify-center">
						<div className="h-2 w-2 rounded-full bg-black/5" />
					</div>
				))}
		</div>
	);
}
