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
  type: FOO;
}
export interface Bar {
  type: BAR;
  payload: string;
}


/***** Do not edit below this line *****/

export const FOO = "container/example/FOO";
export type FOO = typeof FOO;
export const BAR = "container/example/BAR";
export type BAR = typeof BAR;
export const Actions = {
  FOO,
  BAR
};
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
  type: FETCH_REQUEST;
}
export interface FetchSuccess {
  type: FETCH_SUCCESS;
}
export interface FetchFailure {
  type: FETCH_FAILURE;
}

/***** Do not edit below this line *****/
export const FETCH_REQUEST = "examples/request/FETCH_REQUEST";
export type FETCH_REQUEST = typeof FETCH_REQUEST;
export const FETCH_SUCCESS = "examples/request/FETCH_SUCCESS";
export type FETCH_SUCCESS = typeof FETCH_SUCCESS;
export const FETCH_FAILURE = "examples/request/FETCH_FAILURE";
export type FETCH_FAILURE = typeof FETCH_FAILURE;
export const Actions = {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE
};
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
