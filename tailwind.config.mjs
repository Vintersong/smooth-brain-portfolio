/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  corePlugins: {
    // Bootstrap already defines `.container` and `.collapse` with different
    // semantics; Tailwind's generated utilities of the same name load after
    // Bootstrap's CSS and silently override it (navbar collapse breaks).
    container: false,
    visibility: false,
  },
  theme: {
    extend: {},
  },
  plugins: [],
}
