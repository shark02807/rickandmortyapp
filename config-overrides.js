const reactAppRewirePostcss = require('react-app-rewire-postcss');
const postcssCustomMedia = require('postcss-custom-media');

module.exports = config => reactAppRewirePostcss(config, {
  plugins: () => [
    require('postcss-nested'),
    require('autoprefixer'),
    postcssCustomMedia({
      importFrom: ['./src/styles/customMediaCss.css'],
    }),
  ]
});
