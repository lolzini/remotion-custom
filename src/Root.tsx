import {AbsoluteFill, Composition, Folder, Still} from 'remotion';

import * as Socials from './compositions/socials/index';

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
import {FaTiktok, FaTwitch, FaYoutube} from 'react-icons/fa';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Folder name="covers">
				<CoverTwitch />
				<CoverX />
				<CoverYouTube />
			</Folder>
			<Folder name="socials">
				<Composition id="socials" {...Socials} />
				<Still
					id="logo"
					component={() => {
						return (
							<AbsoluteFill className="items-center justify-center">
								{/* <FaYoutube className="text-[12rem] text-[#ff0000]" /> */}
								<FaTiktok className="text-[12rem] text-[#000000]" />
								{/* <FaTwitch className="text-[12rem] text-[#6441a5]" /> */}
							</AbsoluteFill>
						);
					}}
					width={200}
					height={200}
				/>
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
