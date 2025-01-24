import {
	AbsoluteFill,
	Composition,
	Img,
	Sequence,
	Video,
	staticFile,
} from 'remotion';

import {z} from 'zod';
import PostIt from '../../components/post-it';
import Dissolve from '../../components/animations/dissolve';
import Shrink from '../../components/animations/shrink';

const SEC = 30;
const MIN = 60 * Number(SEC);

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
		<>
			<Background bg={bg} />
			<AbsoluteFill className="items-center justify-center">
				<PostIt size="md" color="blue">
					Hola mundo
				</PostIt>
			</AbsoluteFill>
			<Sequence style={{left: '3%', top: '6%'}}>
				<Shrink>
					<Dissolve>
						<PostIt className="-rotate-6" size="md" color="pink">
							<div className="flex h-full items-center justify-center">
								lovezini 💖
							</div>
						</PostIt>
					</Dissolve>
				</Shrink>
			</Sequence>
			<Sequence from={60} style={{left: '3%', top: '7%'}}>
				<Shrink>
					<Dissolve>
						<PostIt className="-rotate-6" size="md" color="blue">
							<div className="flex h-full items-center justify-center">
								Hola mundo
							</div>
						</PostIt>
					</Dissolve>
				</Shrink>
			</Sequence>
			<Sequence from={90} style={{left: '3.2%', top: '7.2%'}}>
				<Shrink>
					<Dissolve>
						<PostIt className="rotate-6" size="md" color="green">
							<div className="flex h-full items-center justify-center">
								Noescierto
							</div>
						</PostIt>
					</Dissolve>
				</Shrink>
			</Sequence>
		</>
	);
};

export default () => (
	<Composition
		id="comp1"
		component={Component}
		width={1920}
		height={1080}
		fps={30}
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
