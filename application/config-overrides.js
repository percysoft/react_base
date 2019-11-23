const path = require("path");
const rewireSvgSpriteLoader = require("react-app-rewired-svg-sprite-loader");

module.exports = function override(config, env) {
  config.resolve = {
    ...config.resolve,
    alias: { "@": path.resolve(__dirname, "src") }
  };

  config = rewireSvgSpriteLoader(config, env); 
  return config;
};
