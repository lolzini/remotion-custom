import {Folder} from 'remotion';

import StreamSchedule from './stills/stream-schedule-v1';
import DuolingoClub from './stills/duolingo-club';
import CoverTwitch from './stills/cover-twitch';
import CoverX from './stills/cover-x';
import CoverYouTube from './stills/cover-youtube';
import CheckerBg from './compositions/checker-bg';
import LineBg from './compositions/line-bg';
import DotBg from './compositions/dot-bg';
import Goals2025 from './stills/goals-2025';
import DotBgOriginal from './compositions/dot-bg-original';
import Thumbnail from './thumbnails/thumbnail';
import Emoji from './emoji';

import './style.css';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Folder name="covers">
				<CoverTwitch />
				<CoverX />
				<CoverYouTube />
			</Folder>
			<Folder name="backgrounds">
				<LineBg />
				<CheckerBg />
				<DotBg />
				<DotBgOriginal />
			</Folder>
			<Folder name="posts">
				<StreamSchedule />
				<Goals2025 />
				<DuolingoClub />
			</Folder>

			<Folder name="thumbnails">
				<Thumbnail />
				<Emoji />
			</Folder>
		</>
	);
};
