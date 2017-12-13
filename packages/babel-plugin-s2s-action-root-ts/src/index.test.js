import plugin from './index';
import pluginTester from 'babel-plugin-tester';

pluginTester({
  plugin,
  pluginOptions: {
  },
  tests: [
    {
      title: 'single',
      code: 'empty',
      pluginOptions: {
        input: 'packages/babel-plugin-s2s-action-root-ts/src/__fixtures__/single/examples/**/actionTypes.ts',
        output: 'packages/babel-plugin-s2s-action-root-ts/src/__fixtures__/single/types/action.ts',
      },
      snapshot: true,
    },
    {
      title: 'basic',
      code: 'empty',
      pluginOptions: {
        input: 'packages/babel-plugin-s2s-action-root-ts/src/__fixtures__/basic/examples/**/actionTypes.ts',
        output: 'packages/babel-plugin-s2s-action-root-ts/src/__fixtures__/basic/types/action.ts',
      },
      snapshot: true,
    },
    {
      title: 'option error(input)',
      code: 'empty',
      output: 'empty',
      error: 'require input option',
      pluginOptions: {
        output: '.',
      },
    },
    {
      title: 'option error(output)',
      code: 'empty',
      output: 'empty',
      error: 'require output option',
      pluginOptions: {
        input: '.',
      },
    },
  ],
});
