/** @type {import('postcss-load-config').Config} */

const config = {
  plugins: {
    "postcss-import": {},
    "@csstools/postcss-global-data": {
      files: ["./libs/utils/styles/breakpoints.css"],
    },
    tailwindcss: {},
    cssnano: {},
    "postcss-preset-env": {},
  },
};

export default config;
