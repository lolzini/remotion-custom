import {Series} from 'remotion';
import {sec} from '../../compositions/comp1';
import Dissolve from './dissolve';

export default ({children, dissolveIndex, duration = sec(1)}) => {
	return (
		<Series.Sequence
			className="flex items-center justify-center gap-20"
			durationInFrames={duration}
		>
			{children.map((child, index) =>
				index === dissolveIndex ? (
					<Dissolve key={index}>{child}</Dissolve>
				) : (
					child
				),
			)}
		</Series.Sequence>
	);
};
