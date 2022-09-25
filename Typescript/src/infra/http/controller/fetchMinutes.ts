import { CalcCreateRepository, CalcFindRepository } from "../../repository";
import { Request, Response } from "express";
import { ClockCalcsFindService } from "../../../domain/useCase/ClockCalsFindService";

type queryParamsType = {
  hour?: number;
  minutes?: number;
};

type responseType = {
  angle: number;
}

interface IClockAngleHourFetch {
  handle(req: Request, res: Response): Promise<responseType>;
}

export class ClockAngleMinutesFetch {
  constructor(
    private clockCalcsFindService?: ClockCalcsFindService
  ) {}

  async handle(req: Request, res: Response):
  Promise<responseType> {
    const { hour, minutes } = req.params as queryParamsType;

    const service = this ? this.clockCalcsFindService : new ClockCalcsFindService();
    const response = await service.handle(Number(hour), Number(minutes));

    res.send(response);

    return response;
  }
}
