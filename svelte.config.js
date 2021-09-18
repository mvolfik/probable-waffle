import myPlugin from "./plugin.js";
import adapter from "@sveltejs/adapter-static";
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",
    vite: { plugins: [myPlugin] },
    adapter: adapter(),
  },
};

export default config;
