import { ClockCalcsType } from "../entity/ClockCalcs";
import { CalcCreateRepository, CalcFindRepository } from "@infra/repository";
import { ClockCalcsFindService } from "../useCase/ClockCalsFindService";

export interface ICalcsFindRepository {
  find(
    hour: number,
    minute: number
    ): Promise<ClockCalcsType>
}

export interface ICalcsCreateRepository {
  create(
    hour: number,
    minute: number,
    angle: number
    ): Promise<void>
}

export const ClockService = new ClockCalcsFindService(new CalcFindRepository(), new CalcCreateRepository());