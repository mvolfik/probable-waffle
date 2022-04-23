import myPlugin from "./plugin.js";
import adapter from "@sveltejs/adapter-static";
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    vite: { plugins: [myPlugin] },
    adapter: adapter(),
    prerender: {
      default: true,
    },
  },
};

export default config;
