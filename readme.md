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

3. Change database configuration in `src/infra/database/dataSource.ts`

```json
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: process.env.DB_PASSWORD,
  database: "clockAngle",
  migrations: ["src/infra/database/migrations/*.ts"],
  entities: ["src/domain/entity/*.ts"],
```

4. Run the migrations

Usining npm
```bash
npm run typeorm migration:run
```

or using yarn
```bash
yarn typeorm migration:run
```

5. Run the project

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