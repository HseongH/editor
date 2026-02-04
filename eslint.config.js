import config from 'eslint-config-xo';
import {defineConfig} from 'eslint/config';
import globals from 'globals';

export default defineConfig([
	config,
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
	},
]);
