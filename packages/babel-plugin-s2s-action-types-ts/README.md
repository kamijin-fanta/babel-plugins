# babel-plugin-s2s-action-types-ts

plugin for https://github.com/akameco/s2s


## Install

```
$ npm install --save-dev babel-plugin-s2s-action-types-ts
```


## Example


### Basic

#### IN:

```typescript
export type Action = Foo | Bar;
```

#### OUT:

```typescript
export type Action = Foo | Bar;

export interface Foo {
  type: Actions.Foo;
}
export interface Bar {
  type: Actions.Bar;
  payload: string;
}

/***** Do not edit below this line *****/
export const enum Actions {
  Foo = "container/example/Foo",
  Bar = "container/example/Bar",
}
```

### Request/Success/Failure pattern

#### IN:

```typescript
export type Action = FetchRequest;
```

#### OUT:

```typescript
export type Action = FetchRequest;

export interface FetchRequest {
  type: Actions.FetchRequest;
}
export interface FetchSuccess {
  type: Actions.FetchSuccess;
}
export interface FetchFailure {
  type: Actions.FetchFailure;
}

/***** Do not edit below this line *****/
export const enum Actions {
  FetchRequest = "examples/request/FetchRequest",
  FetchSuccess = "examples/request/FetchSuccess",
  FetchFailure = "examples/request/FetchFailure",
}
```


## Usage

```
module.exports = {
  watch: './**/*.ts',
  plugins: [
    {
      test: /actionTypes.ts$/,
      plugin: ['s2s-action-types-ts', {
        usePrefix: true,
        removePrefix: 'src/',
      }],
    },
  ],
}
```

### usePrefix

type: `boolean` <br>
required: false

### removePrefix

type: `string` <br>
required: false

outputh path.
