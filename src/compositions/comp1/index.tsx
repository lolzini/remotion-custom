import {AbsoluteFill, Composition} from 'remotion';
import Wipe from '../../components/animations/wipe';
import Dissolve from '../../components/animations/dissolve';

const SEC = 30;
const MIN = 60 * Number(SEC);

const Component = () => {
	return (
		<AbsoluteFill>
			<Dissolve durationInFrames={3.5 * SEC} className="text-9xl text-white">
				HOLA MUNDO
			</Dissolve>
		</AbsoluteFill>
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
	/>
);
