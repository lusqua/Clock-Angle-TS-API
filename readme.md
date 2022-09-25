# This is a clock angle challenge in TypeScript
## How to run

1. Install typescript

```bash
npm install -g typescript
```

2. Install the project dependencies

Usining npm
```bash
npm install
```

or using yarn
```bash
yarn install
```

3. Run the project

Usining npm
```bash
npm run start
```
or using yarn
```bash
yarn start
```


### After running the project, just send requests

Request examples
```
GET - http://localhost:3000/v1/rest/clock/6
OR
GET - http://localhost:3000/v1/rest/clock/6/0

Response
{
  "angle": 180
}

```

## How to test

Using npm
```bash
npm run test
```
or using yarn
```bash
yarn test
```