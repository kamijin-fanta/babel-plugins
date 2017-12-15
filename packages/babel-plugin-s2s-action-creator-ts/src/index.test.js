import plugin from './index';
import pluginTester from 'babel-plugin-tester';
import path from 'path';

const filename = path.resolve(process.cwd(), 'app', 'actionTypes.ts');

pluginTester({
  plugin,
  pluginOptions: {
  },
  babelOptions: {
    filename,
  },
  snapshot: true,
  tests: [
    {
      title: 'usePrefix: false',
      code: `
        import External from 'external';
        export type Action = Hoge | PiyoPiyo;
        
        export interface Hoge {
          type: Actions.Hoge;
          key: number;
          data: External;
        }
        export interface PiyoPiyo {
          type: Actions.PiyoPiyo;
        }
        
        /***** Do not edit below this line *****/
        export const enum Actions {
          Hoge = 'containers/Hoge',
          PiyoPiyo = 'containers/PiyoPiyo',
        }
      `,
    },
  ],
});
