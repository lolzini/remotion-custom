import {
	AbsoluteFill,
	Composition,
	Img,
	random,
	Series,
	staticFile,
} from 'remotion';
import Shrink from '../../components/animations/shrink';
import Dissolve from '../../components/animations/dissolve';
import {z} from 'zod';

const FPS = 30;
const DIF = FPS * 2;

const schema = z.object({
	emojiSeed: z.number(),
	positionSeed: z.number(),
	rotationSeed: z.number(),
	zIndexSeed: z.number(),
});

const friendlyEmojis = [
	'😀_1F600',
	'😁_1F601',
	'😂_1F602',
	'😃_1F603',
	'😄_1F604',
	'😅_1F605',
	'😆_1F606',
	'😇_1F607',
	'😈_1F608',
	'😉_1F609',
	'😊_1F60A',
	'😋_1F60B',
	'😌_1F60C',
	'😍_1F60D',
	'😎_1F60E',
	'😏_1F60F',
	'😐_1F610',
	'😑_1F611',
	'😒_1F612',
	'😓_1F613',
	'😔_1F614',
	'😕_1F615',
	'😖_1F616',
	'😗_1F617',
	'😘_1F618',
	'😙_1F619',
	'😚_1F61A',
	'😛_1F61B',
	'😜_1F61C',
	'😝_1F61D',
	'😞_1F61E',
	'😟_1F61F',
	'😠_1F620',
	'😡_1F621',
	'😢_1F622',
	'😣_1F623',
	'😤_1F624',
	'😥_1F625',
	'😦_1F626',
	'😧_1F627',
	'😨_1F628',
	'😩_1F629',
	'😪_1F62A',
	'😫_1F62B',
	'😬_1F62C',
	'😭_1F62D',
	'😮_1F62E',
	'😯_1F62F',
	'😰_1F630',
	'😱_1F631',
	'😲_1F632',
	'😳_1F633',
	'😴_1F634',
	'😵_1F635',
	'😶_1F636',
	'😷_1F637',
	'😸_1F638',
	'😹_1F639',
	'😺_1F63A',
	'😻_1F63B',
	'😼_1F63C',
	'😽_1F63D',
	'😾_1F63E',
	'😿_1F63F',
	'🙀_1F640',
	'🙁_1F641',
	'🙂_1F642',
	'🙃_1F643',
	'🙄_1F644',
	'🤗_1F917',
	'🤘_1F918',
	'🤙_1F919',
	'🤚_1F91A',
	'🤛_1F91B',
	'🤜_1F91C',
	'🤝_1F91D',
	'🤞_1F91E',
	'🤟_1F91F',
	'🤠_1F920',
	'🥐_1F950',
	'🥖_1F956',
	'🥞_1F95E',
	'🥪_1F96A',
	'🥰_1F970',
	'🥴_1F974',
	'🥵_1F975',
	'🥸_1F978',
	'🥹_1F979',
	'🥺_1F97A',
	'🧐_1F9D0',
	'🫠_1FAE0',
	'🫡_1FAE1',
	'🫢_1FAE2',
	'🫣_1FAE3',
	'🫤_1FAE4',
	'🫨_1FAE8',
	'🫰_1FAF0',
	'🫱_1FAF1',
	'🫲_1FAF2',
	'🫳_1FAF3',
	'🫴_1FAF4',
	'🫵_1FAF5',
	'🫶_1FAF6',
	'🫷_1FAF7',
	'🫸_1FAF8',
];

export const Component = ({
	emojiSeed,
	positionSeed,
	rotationSeed,
	zIndexSeed,
}: z.infer<typeof schema>) => {
	return (
		<AbsoluteFill>
			<Series>
				<Series.Sequence durationInFrames={30} layout="none">
					<EmojiGrid
						emojiSeed={emojiSeed}
						positionSeed={positionSeed}
						rotationSeed={rotationSeed}
						zIndexSeed={zIndexSeed}
					/>
				</Series.Sequence>
				<Series.Sequence durationInFrames={30} layout="none">
					<EmojiGrid
						emojiSeed={emojiSeed}
						positionSeed={positionSeed}
						rotationSeed={rotationSeed}
						zIndexSeed={zIndexSeed}
						reverse
						fromScale={1}
						toScale={2}
					/>
				</Series.Sequence>
			</Series>
		</AbsoluteFill>
	);
};

export default function () {
	return (
		<Composition
			id="emoji-stinger"
			component={Component}
			width={1920}
			height={1080}
			fps={30}
			durationInFrames={DIF}
			schema={schema}
			defaultProps={{
				emojiSeed: 233637739,
				positionSeed: 86,
				rotationSeed: 77,
				zIndexSeed: 171717256942017,
			}}
		/>
	);
}

// HELPERS ------------

const exceptions: number[] = [100, 8, 101, 98, 87, 78, 114, 136, 109];

const EmojiGrid = ({
	emojiSeed,
	positionSeed,
	rotationSeed,
	zIndexSeed,
	reverse = false,
	fromScale = 0,
	toScale = 1,
}: z.infer<typeof schema> & {
	reverse?: boolean;
	fromScale?: number;
	toScale?: number;
}) => (
	<div className="-m-40 flex flex-wrap">
		{Array(144)
			.fill(null)
			.map((_, i) => {
				const {x, y} = getRandomPosition({
					seed: `${i * positionSeed}-position`,
					xMin: -120,
					xMax: 120,
					yMin: -120,
					yMax: 120,
				});
				const size = getRandomSize({seed: i});
				const emoji = getRandomEmoji({seed: i * emojiSeed});
				const delay = getRandomNumber({
					seed: `${i}-delay`,
					min: 0,
					max: 15,
				});

				const transformX = getRandomNumber({
					seed: `${i}-transformX`,
					min: -100,
					max: 100,
				});

				const transformY = getRandomNumber({
					seed: `${i}-transformY`,
					min: -600,
					max: 600,
				});

				if (exceptions.includes(i)) return <div className="size-[120px]" />;

				return (
					<div
						key={i}
						className="relative size-[120px]"
						style={{zIndex: Math.floor(random(i * zIndexSeed + 'z') * 100)}}
					>
						<Dissolve reverse={reverse} delay={delay} durationInFrames={15}>
							<Shrink
								delay={delay}
								fromScale={fromScale}
								toScale={toScale}
								transformX={transformX}
								transformY={transformY}
								durationInFrames={15}
							>
								<Img
									style={{
										position: 'absolute',
										objectFit: 'contain',
										left: x,
										top: y,
										width: `${size}px`,
										height: `${size}px`,
										maxWidth: 'unset',
										maxHeight: 'unset',
										transform: `rotate(${getRandomRotation({seed: `${i * rotationSeed}`})}deg)`,
									}}
									src={staticFile(`/emojis/${emoji}.png`)}
									data-id={i}
								/>
							</Shrink>
						</Dissolve>
					</div>
				);
			})}
	</div>
);

const getRandomNumber = ({
	seed,
	min,
	max,
}: {
	seed: number | string;
	min: number;
	max: number;
}): number => {
	return Math.floor(random(seed) * (max - min + 1)) + min;
};

const getRandomPosition = ({
	seed,
	xMin = 0,
	xMax = 1920,
	yMin = 0,
	yMax = 1080,
}: {
	seed: number | string;
	xMin?: number;
	xMax?: number;
	yMin?: number;
	yMax?: number;
}) => {
	return {
		x: getRandomNumber({seed, min: xMin, max: xMax}),
		y: getRandomNumber({seed: `${seed}-y`, min: yMin, max: yMax}),
	};
};

const getRandomSize = ({
	seed,
	min = 300,
	max = 600,
}: {
	seed: number | string;
	min?: number;
	max?: number;
}): number => {
	return getRandomNumber({seed, min, max});
};

const getRandomEmoji = ({seed}: {seed: number | string}): string => {
	const index = getRandomNumber({seed, min: 0, max: friendlyEmojis.length - 1});
	return friendlyEmojis[index];
};

const getRandomRotation = ({seed}: {seed: number | string}): number => {
	return getRandomNumber({seed: `${seed}-rotation`, min: 0, max: 359});
};
