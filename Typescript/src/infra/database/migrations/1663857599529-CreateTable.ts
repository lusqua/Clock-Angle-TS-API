import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTable1663857599529 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: "clockCalcs",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "hour",
            type: "int",
          },
          {
            name: "minute",
            type: "int",
          },
          {
            name: "angle",
            type: "int",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable("clockCalcs");
  }
}
