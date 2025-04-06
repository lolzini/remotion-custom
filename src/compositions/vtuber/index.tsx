import {
	useAudioData,
	visualizeAudio,
	getAudioData,
} from '@remotion/media-utils';
import {
	AbsoluteFill,
	Audio,
	CalculateMetadataFunction,
	Composition,
	Img,
	useCurrentFrame,
	staticFile,
	useVideoConfig,
	random,
} from 'remotion';
import {z} from 'zod';
import {SVGOutline} from '../../components/svg-outline';

const FPS = 30;

const schema = z.object({
	audioFile: z.string(),
	idleImage: z.string(),
	speakingImage: z.string(),
	idleImageClosed: z.string(),
	speakingImageClosed: z.string(),
	volumeSensitivity: z.number(),
	blinkFrequency: z.number().step(0.01).default(0.05),
	blinkDuration: z.number().step(1).default(5),
});

export const VTuberComponent = ({
	audioFile,
	idleImage,
	speakingImage,
	idleImageClosed,
	speakingImageClosed,
	volumeSensitivity,
	blinkFrequency,
	blinkDuration,
}: z.infer<typeof schema>) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const audioData = useAudioData(staticFile(audioFile));

	// Determine if speaking based on audio volume
	let isSpeaking = false;
	let jumpOffset;

	// Process audio data directly in the component
	if (audioData) {
		// Create a sliding window of volume samples
		const windowSize = 5; // Number of frames to consider
		const volumes = [];

		// Get volume samples for the window
		for (
			let i = -Math.floor(windowSize / 2);
			i <= Math.floor(windowSize / 2);
			i++
		) {
			const sampleFrame = Math.max(0, frame + i);
			const visualization = visualizeAudio({
				audioData,
				frame: sampleFrame,
				fps,
				numberOfSamples: 1,
			});
			volumes.push(visualization[0]);
		}

		// Calculate weighted average (center samples have more weight)
		const weights = volumes.map(
			(_, i) => 1 - Math.abs(i - Math.floor(windowSize / 2)) / windowSize,
		);
		const weightedSum = volumes.reduce(
			(sum, vol, i) => sum + vol * weights[i],
			0,
		);
		const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
		const smoothedVolume = weightedSum / totalWeight;

		// Determine if speaking based on the smoothed volume and sensitivity threshold
		isSpeaking = smoothedVolume > volumeSensitivity;
		jumpOffset = smoothedVolume * -100;
	}

	// Determine if the character should blink
	// Use random with a seed based on the frame to ensure consistent behavior
	// We divide by blinkDuration to make the blink last for multiple frames
	const shouldBlink =
		random(`blink-${Math.floor(frame / blinkDuration)}`) < blinkFrequency;

	// Select the appropriate image based on speaking state and blinking state
	const currentImage = isSpeaking
		? shouldBlink
			? speakingImageClosed
			: speakingImage
		: shouldBlink
			? idleImageClosed
			: idleImage;

	return (
		<>
			<AbsoluteFill>
				<SVGOutline strokeWidth={4} shadow={true} viewBox="0 0 1920 1080">
					<div
						style={{
							transform: `translateY(${jumpOffset}px)`,
						}}
					>
						<Img
							src={staticFile(currentImage)}
							style={{
								width: '100%',
								maxWidth: '75%',
								margin: '0 auto',
							}}
						/>
					</div>
				</SVGOutline>
			</AbsoluteFill>
			<Audio src={staticFile(audioFile)} />
		</>
	);
};

export default function () {
	return (
		<Composition
			id="vtuber"
			component={VTuberComponent}
			width={1920}
			height={1080}
			fps={FPS}
			durationInFrames={10 * FPS} // Default duration, will be dynamically set by calculateMetadata based on audio length
			schema={schema}
			defaultProps={{
				audioFile: 'vo/vo-02.wav',
				idleImage: 'lolzini/thinking-open.png',
				speakingImage: 'lolzini/talking-open.png',
				idleImageClosed: 'lolzini/thinking-closed.png',
				speakingImageClosed: 'lolzini/talking-closed.png',
				volumeSensitivity: 0.056, // Default sensitivity, will be overridden by calculateMetadata
				blinkFrequency: 0.05, // 5% chance to blink on each blink check
				blinkDuration: 5, // Blink lasts for 5 frames
			}}
			calculateMetadata={calculateVolumeMetadata}
		/>
	);
}

// Helpers ----------

// Calculate metadata for dynamic volume sensitivity based on audio file
const calculateVolumeMetadata: CalculateMetadataFunction<
	z.infer<typeof schema>
> = async ({props}) => {
	try {
		// Get the audio data from the file
		const audioData = await getAudioData(staticFile(props.audioFile));

		// Calculate the duration in frames based on audio length
		const fps = FPS;
		const durationInFrames = Math.floor(audioData.durationInSeconds * fps);
		console.info(
			`Audio duration: ${audioData.durationInSeconds}s, ${durationInFrames} frames`,
		);
		let totalVolume = 0;
		let sampleCount = 0;

		// Sample the audio at regular intervals
		const sampleInterval = Math.max(1, Math.floor(durationInFrames / 100)); // Take up to 100 samples

		for (let frame = 0; frame < durationInFrames; frame += sampleInterval) {
			const visualization = visualizeAudio({
				audioData,
				frame,
				fps,
				numberOfSamples: 1,
			});

			if (visualization[0] > 0) {
				totalVolume += visualization[0];
				sampleCount++;
			}
		}

		// Calculate the average volume
		const averageVolume = sampleCount > 0 ? totalVolume / sampleCount : 0;

		// Set sensitivity threshold based on average volume
		// If the average volume is very low, we need a lower threshold
		// If the average volume is high, we need a higher threshold
		let volumeSensitivity;

		if (averageVolume < 0.05) {
			// For very quiet audio
			volumeSensitivity = averageVolume * 0.8; // 80% of average
		} else if (averageVolume < 0.1) {
			// For quiet audio
			volumeSensitivity = averageVolume * 0.6; // 60% of average
		} else if (averageVolume < 0.2) {
			// For moderate audio
			volumeSensitivity = averageVolume * 0.5; // 50% of average
		} else {
			// For loud audio
			volumeSensitivity = averageVolume * 0.4; // 40% of average
		}

		console.info(
			`Audio analysis: Average volume = ${averageVolume}, Sensitivity = ${volumeSensitivity}`,
		);

		return {
			durationInFrames: durationInFrames,
			props: {
				...props,
				volumeSensitivity: Math.max(0.01, Math.min(0.2, volumeSensitivity)),
			},
		};
	} catch (err) {
		console.error('Error calculating audio metadata:', err);

		// Try to get just the duration even if volume calculation failed
		try {
			const audioData = await getAudioData(staticFile(props.audioFile));
			const durationInFrames = Math.floor(audioData.durationInSeconds * FPS);
			console.info(
				`Fallback: Using audio duration: ${audioData.durationInSeconds}s, ${durationInFrames} frames`,
			);

			return {
				durationInFrames: durationInFrames,
				props: {
					...props,
					volumeSensitivity: 0.056, // Fallback to default
				},
			};
		} catch (audioErr) {
			console.error('Failed to get audio duration:', audioErr);
			return {
				durationInFrames: 10 * FPS, // Last resort fallback
				props: {
					...props,
					volumeSensitivity: 0.056, // Fallback to default
				},
			};
		}
	}
};
