import plugin from './index';
import pluginTester from 'babel-plugin-tester';

pluginTester({
  plugin,
  pluginOptions: {
  },
  snapshot: true,
  tests: [
    {
      title: 'basic union',
      code: 'empty',
      pluginOptions: {
        input: 'packages/babel-plugin-s2s-action-root-ts/src/__fixtures__/basic/examples/**/actionTypes.ts',
        output: 'packages/babel-plugin-s2s-action-root-ts/src/__fixtures__/basic/types/action.ts',
        importName: 'Action',
        exportName: 'Action',
      },
    },
    {
      title: 'basic array',
      code: 'empty',
      pluginOptions: {
        input: 'packages/babel-plugin-s2s-action-root-ts/src/__fixtures__/basic/examples/**/actionTypes.ts',
        output: 'packages/babel-plugin-s2s-action-root-ts/src/__fixtures__/basic/types/action.ts',
        importName: 'Epic',
        exportName: 'Epics',
        exportType: 'array',
      },
    },
    {
      title: 'basic object',
      code: 'empty',
      pluginOptions: {
        input: 'packages/babel-plugin-s2s-action-root-ts/src/__fixtures__/basic/examples/**/actionTypes.ts',
        output: 'packages/babel-plugin-s2s-action-root-ts/src/__fixtures__/basic/types/action.ts',
        exportName: 'reducers',
        exportType: 'object',
      },
    },
    {
      title: 'equal path',
      code: 'empty',
      pluginOptions: {
        input: 'packages/babel-plugin-s2s-action-root-ts/src/__fixtures__/basic/examples/Container1/actionTypes.ts',
        output: 'packages/babel-plugin-s2s-action-root-ts/src/__fixtures__/basic/examples/Container1/action.ts',
        importName: 'reducer',
        exportName: 'reducers',
        exportType: 'object',
      },
    },
    {
      title: 'prefix / suffix',
      code: 'empty',
      pluginOptions: {
        input: 'packages/babel-plugin-s2s-action-root-ts/src/__fixtures__/basic/examples/**/actionTypes.ts',
        output: 'packages/babel-plugin-s2s-action-root-ts/src/__fixtures__/basic/types/action.ts',
        importName: 'Action',
        exportName: 'Action',
        prefix: 'pre_',
        suffix: '_suf',
      },
    },
  ],
});

pluginTester({
  plugin,
  pluginOptions: {
  },
  tests: [
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
