import { ClockCalcsType } from "@domain/entity/ClockCalcs";
import { ICalcsFindRepository } from "@domain/types/ICalcsRepostory";
import { AppDataSource } from "../database/dataSource";

export class CalcFindRepository implements ICalcsFindRepository {
  async find(hour: number, minute: number = 0): Promise<ClockCalcsType> {
    const repo = AppDataSource.manager.getRepository("clockCalcs");

    const database = await repo.findOne({
      where: {
        hour: hour,
        minute: minute,
      },
    });

    return database as ClockCalcsType;
  }
}
