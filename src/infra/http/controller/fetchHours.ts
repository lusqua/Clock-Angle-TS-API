import { CalcCreateRepository, CalcFindRepository } from "../../repository";
import { Request, Response } from "express";
import { ClockCalcsFindService, IClockCalcsFindService } from "../../../domain/useCase/ClockCalsFindService";

type queryParamsType = {
  hour?: number;
};

type responseType = {
  angle: number;
}

interface IClockAngleHourFetch {
  handle(req: Request, res: Response): Promise<responseType>;
}

export class ClockAngleHourFetch implements IClockAngleHourFetch {
  constructor(
    private clockCalcsFindService?: IClockCalcsFindService,
  ) {}

  async handle(req: Request, res: Response): Promise<responseType> {
    const { hour } = req.params as queryParamsType;

    const service = this.clockCalcsFindService

    const response = await service.handle(hour);

    res.send(response);

    return response;
  }
}
