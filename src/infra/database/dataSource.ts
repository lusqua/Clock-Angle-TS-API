import * as dotenv from "dotenv";
import { DataSource } from "typeorm";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: process.env.DB_PASSWORD,
  database: "clockAngle",
  migrations: ["src/infra/database/migrations/*.ts"],
  entities: ["src/domain/entity/*.ts"],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
