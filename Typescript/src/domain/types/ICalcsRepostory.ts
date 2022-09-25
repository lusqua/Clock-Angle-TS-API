import { ClockCalcsType } from "@/domain/entity/ClockCalcs";

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