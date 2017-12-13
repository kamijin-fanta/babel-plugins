import plugin from './index';
import pluginTester from 'babel-plugin-tester';
import path from 'path';

pluginTester({
  plugin,
  fixtures: path.resolve(__dirname, '__fixtures__'),
  pluginOptions: {
    removePrefix: 'packages/babel-plugin-s2s-action-types-ts/src/__fixtures__/',
  },
});

pluginTester({
  plugin,
  pluginOptions: {
    usePrefix: false,
  },
  snapshot: true,
  tests: [
    {
      title: 'usePrefix: false',
      code: `export type Action = Foo`,
    },
  ],
});
