import {AbsoluteFill, Img, staticFile} from 'remotion';
import {loadFont as loadTangerine} from '@remotion/google-fonts/Tangerine';
// import {loadFont as loadCormorant} from '@remotion/google-fonts/CormorantGaramond';
// import {loadFont as loadAlexBrush} from '@remotion/google-fonts/AlexBrush';
// import {loadFont as loadAllura} from '@remotion/google-fonts/Allura';
import {loadFont as loadParisienne} from '@remotion/google-fonts/Parisienne';
import {loadFont as loadLora} from '@remotion/google-fonts/Lora';
import {loadFont as loadRaleway} from '@remotion/google-fonts/Raleway';
import {z} from 'zod';

const {fontFamily: Tangerine} = loadTangerine();
// const {fontFamily: Cormorant} = loadCormorant();
// const {fontFamily: AlexBrush} = loadAlexBrush();
// const {fontFamily: Allura} = loadAllura();
const {fontFamily: Parisienne} = loadParisienne();
const {fontFamily: Lora} = loadLora();
const {fontFamily: Raleway} = loadRaleway();

const width = 1920;
const height = 1080;

const schema = z.object({
	background: z.string(),
	color: z.string(),
	title: z.string(),
	name: z.string(),
	content: z.string(),
	details: z.string(),
});

function Component({
	background,
	color,
	title,
	name,
	content,
	details,
}: z.infer<typeof schema>) {
	return (
		<>
			<AbsoluteFill>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width={width}
					height={height}
					viewBox={`0 0 ${width} ${height}`}
				>
					<defs>
						<pattern
							id="a"
							width="40"
							height="40"
							patternTransform="scale(2)"
							patternUnits="userSpaceOnUse"
						>
							<rect width="100%" height="100%" fill={background} />
							<path
								fill="none"
								stroke={color}
								d="M45.69 13.342c-1.677.945-3.557 1.6-5.48 1.588-1.922-.012-3.795-.691-5.462-1.653-1.668-.962-3.156-2.202-4.637-3.435-1.48-1.232-2.97-2.47-4.641-3.427S21.923 4.787 20 4.787s-3.8.67-5.47 1.628c-1.67.956-3.161 2.195-4.641 3.427s-2.97 2.473-4.637 3.435-3.54 1.641-5.463 1.653c-1.922.012-3.802-.643-5.478-1.588v13.316c1.676-.945 3.556-1.6 5.478-1.588 1.923.012 3.796.691 5.463 1.653s3.156 2.202 4.637 3.435c1.48 1.232 2.97 2.47 4.641 3.427s3.547 1.628 5.47 1.628 3.8-.67 5.47-1.628c1.67-.956 3.161-2.195 4.641-3.427s2.97-2.473 4.637-3.435 3.54-1.641 5.463-1.653c1.922-.012 3.802.643 5.478 1.588z"
							/>
						</pattern>
					</defs>
					<rect width="800%" height="800%" fill="url(#a)" />
				</svg>
			</AbsoluteFill>
			<AbsoluteFill className="items-center justify-center">
				<div className="flex flex-col items-center gap-4">
					<p className="text-9xl" style={{fontFamily: Tangerine}}>
						{title}
					</p>
					<p className="my-10 text-[12rem]" style={{fontFamily: Parisienne}}>
						{name}
					</p>
					<p className="my-10 text-5xl" style={{fontFamily: Lora}}>
						{content}
					</p>
					<p className="text-5xl" style={{fontFamily: Raleway}}>
						{details}
					</p>
				</div>
			</AbsoluteFill>
			<AbsoluteFill style={{top: '4rem', left: '4rem'}}>
				<Img className="w-64 rounded-full" src={staticFile('images/pp.png')} />
			</AbsoluteFill>
		</>
	);
}

export {Component as component, schema, width, height};
