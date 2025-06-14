import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";

// https://astro.build/config
export default defineConfig({
	site: "https://example.com",
	integrations: [
		mdx(),
		UnoCSS({
			injectReset: true,
		}),
		sitemap(),
	],
});
