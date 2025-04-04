/**
 * Note: When using the Node.JS APIs, the config file
 * doesn't apply. Instead, pass options directly to the APIs.
 *
 * All configuration options: https://remotion.dev/docs/config
 */

import {Config} from '@remotion/cli/config';
import {webpackOverride} from './src/webpack-override';

Config.setOverwriteOutput(true);
Config.setCodec('vp9');
Config.setVideoImageFormat('png');
Config.setPixelFormat('yuva420p');
Config.setCrf(1);
Config.setHardwareAcceleration('if-possible');
Config.setChromiumOpenGlRenderer('angle');
Config.overrideWebpackConfig(webpackOverride);
