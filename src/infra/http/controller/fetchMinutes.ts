import { Request, Response } from "express";
import { IClockCalcsFindService } from "@domain/useCase/ClockCalsFindService";

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

export class ClockAngleMinutesFetch implements IClockAngleHourFetch {
  constructor(
    private service: IClockCalcsFindService
  ) {}

  handle = async (req: Request, res: Response):
  Promise<responseType> => {
    const { hour, minutes } = req.params as queryParamsType;

    const response = await this.service.handle(Number(hour), Number(minutes));

    res.send(response);

    return response;
  }
}
