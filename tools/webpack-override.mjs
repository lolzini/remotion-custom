import {enableTailwind} from '@remotion/tailwind';

export const webpackOverride = (currentConfiguration) => {
	return enableTailwind(currentConfiguration);
};
