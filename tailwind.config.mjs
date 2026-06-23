/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  // Bootstrap (loaded globally via BaseLayout) ships utility classes that share
  // names with Tailwind's — `.order-*`, `.gap-*`, `.p-*`, `.m-*`, etc. — all
  // declared `!important`. On the Tailwind-based pages (timeline, projects)
  // those silently override Tailwind and break layout (e.g. the timeline grid
  // `order` reversed, collapsing cards into the center spine). Tailwind's
  // stylesheet loads last, so marking its utilities `!important` lets them win.
  important: true,
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
