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
						offset: 30,
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
						scale: 4,
						offset: 34.116,
					}}
				/>
				<Composition
					id="jigsaw"
					{...Background}
					defaultProps={{
						name: 'jigsaw' as const,
						color: '#ffffff16',
						background: '#1a1a1a',
						direction: 'rtl' as const,
						scale: 2,
						offset: 160,
					}}
				/>
				<Composition
					id="plaid-pattern-2"
					{...Background}
					defaultProps={{
						name: 'plaid-pattern-2' as const,
						color: '#ffffff16',
						background: '#1a1a1a',
						direction: 'rtl' as const,
						scale: 4,
						offset: 40,
					}}
				/>
				<Composition
					id="eyes-4"
					{...Background}
					defaultProps={{
						name: 'eyes-4' as const,
						color: '#ffffff16',
						background: '#1a1a1a',
						direction: 'rtl' as const,
						scale: 4,
						offset: 40,
					}}
				/>
				<Composition
					id="japanese-pattern-3"
					{...Background}
					defaultProps={{
						name: 'japanese-pattern-3' as const,
						color: '#ffffff16',
						background: '#1a1a1a',
						direction: 'rtl' as const,
						scale: 4,
						offset: 69.141,
					}}
				/>
				<Composition
					id="hexagon-1"
					{...Background}
					defaultProps={{
						name: 'hexagon-1' as const,
						color: '#ffffff16',
						background: '#1a1a1a',
						direction: 'rtl' as const,
						scale: 4,
						offset: 40,
					}}
				/>
				<Composition
					id="plus-2"
					{...Background}
					defaultProps={{
						name: 'plus-2' as const,
						color: '#ffffff16',
						background: '#1a1a1a',
						direction: 'rtl' as const,
						scale: 4,
						offset: 40,
					}}
				/>
			</Folder>
		</>
	);
};
