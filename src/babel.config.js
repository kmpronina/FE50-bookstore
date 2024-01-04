module.exports = function (api) {
  api.cache(true);

  const presets = [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
    '@babel/preset-react',
    '@babel/preset-flow',
  ];
  const plugins = [
    '@babel/plugin-transform-modules-commonjs',
    'babel-plugin-styled-components',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-jsx',
  ];

  return {
    presets,
    plugins,
  };
};
