module.exports = {
  title: 'Palindrome Checker',
  exampleMode: 'hide',
  components: [
    'src/components/**/*.{js,jsx,ts,tsx}',
    'src/utils/**/*.{js,jsx,ts,tsx}',
  ],
  propsParser: require('react-docgen-typescript').withCustomConfig(
    './tsconfig.json'
  ).parse,
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.(j|t)sx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
    },
  },
};
