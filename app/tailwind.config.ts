import containerQueries from "@tailwindcss/container-queries";
import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
		screens: {
			xs: "0px",
			sm: "576px",
			md: "768px",
			lg: "992px",
			xl: "1200px",
			xxl: "1400px"
		},
		extend: {
			colors: {
				// CSS variables defined in app.css
				"pen-color": "rgb(var(--color-pen))",
				"line": {
					light: "rgb(var(--color-line-light))",
					dark: "rgb(var(--color-line-dark))"
				}
			},
			fontFamily: {
				pen: ["Caveat", "cursive"],
				graffiti: ["Sedgwick Ave", "cursive"],
				pencil: ["Waiting for the Sunrise", "serif"]
			}
		}
	},

	plugins: [typography, containerQueries]
} satisfies Config;
