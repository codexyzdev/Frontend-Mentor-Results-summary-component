/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			White: 'hsl(0, 0%, 100%)',
			PaleBlue: 'hsl(221, 100%, 96%)',
			LightLavender: 'hsl(241, 100%, 89%)',
			DarkGrayBlue: 'hsl(224, 30%, 27%)',
			LightRed: 'hsl(0, 100%, 67%)',
			OrangeyYellow: 'hsl(39, 100%, 56%)',
			GreenTeal: 'hsl(166, 100%, 37%)',
			CobaltBlue: 'hsl(234, 85%, 45%)'
		}
	},
	plugins: []
}
