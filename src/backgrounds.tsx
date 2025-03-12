import {Composition, Folder} from 'remotion';
import * as Background from './compositions/background';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Folder name="2-colors">
				<Composition
					id="cross-section"
					{...Background}
					defaultProps={{
						name: 'cross-section' as const,
						color: '#ffffff16',
						background: '#1a1a1a',
						direction: 'rtl' as const,
						scale: 4,
						offset: 20,
					}}
				/>
				<Composition
					id="brick-wall-1"
					{...Background}
					defaultProps={{
						name: 'brick-wall-1' as const,
						color: '#ffffff16',
						background: '#1a1a1a',
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
						color: '#ffffff16',
						background: '#1a1a1a',
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
						color: '#ffffff16',
						background: '#1a1a1a',
						direction: 'rtl' as const,
						scale: 2,
						offset: 34.116,
					}}
				/>
			</Folder>
		</>
	);
};
