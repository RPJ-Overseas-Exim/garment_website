/** @type {import('postcss-load-config').Config} */

const config = {
  plugins: {
    "postcss-import": {},
    "@csstools/postcss-global-data": {
      files: ["./libs/utils/styles/*.css"],
    },
    tailwindcss: {},
    cssnano: {},
    "postcss-preset-env": {},
  },
};

export default config;
