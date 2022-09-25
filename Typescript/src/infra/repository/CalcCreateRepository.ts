import { ICalcsCreateRepository } from "@/domain/types/ICalcsRepostory";
import { AppDataSource } from "../database/dataSource";

export class CalcCreateRepository implements ICalcsCreateRepository {
  async create(hour: number, minute: number = 0, angle: number): Promise<void> {
    const repo = AppDataSource.manager.getRepository("clockCalcs");

    // create a new entity
    await repo.insert({
      hour: hour,
      minute: minute,
      angle: angle,
    });
  }
}
