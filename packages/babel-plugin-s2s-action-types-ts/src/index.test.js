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
