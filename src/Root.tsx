import {Folder, Still} from 'remotion';

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
import * as Diploma from './stills/diploma';

import './style.css';
import EnglishVocabulary from './stills/english-vocabulary';
import EmojiStinger from './compositions/emoji-stinger';
import OldTvStatic from './compositions/old-tv-static';
import VTuber from './compositions/vtuber';

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
				<Still
					id="diploma"
					{...Diploma}
					defaultProps={{
						background: '#f8f4f0',
						color: '#f2eeeb',
						title: 'Diploma de Honor',
						name: 'Lolzini',
						content: 'Por ser parte de la comunidad de lolzini',
						details: '2025',
					}}
				/>
			</Folder>

			<Folder name="generators">
				<Thumbnail />
				<Emoji />
				<EnglishVocabulary />
			</Folder>
			<Folder name="stingers">
				<EmojiStinger />
				<OldTvStatic />
				<VTuber />
			</Folder>
		</>
	);
};
