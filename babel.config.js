module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        corejs: '3.25',
        useBuiltIns: 'usage',
      },
    ],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic', // enable new JSX Transform: https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html
      },
    ],
    '@babel/preset-typescript',
  ],
};