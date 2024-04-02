const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				kodemono: ['Kode Mono Variable', 'monospace'],
				teko: ['Teko Variable', 'sans-serif']
			} 
		}
	},

	plugins: [forms, typography, require("daisyui")],

	daisyui: {
		themes: ["light", "dark", "coffee", "synthwave"],
		darkTheme: "coffee"
	}
};

module.exports = config;
