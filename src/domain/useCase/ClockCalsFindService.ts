
import { ICalcsCreateRepository, ICalcsFindRepository } from "../types/ICalcsRepostory";

type ResponseType = {
  angle: number;
  error?: string;
};

export interface IClockCalcsFindService {
  handle(hour: number, minute?: number): Promise<ResponseType>;
}

export class ClockCalcsFindService implements IClockCalcsFindService {
  constructor(
    private findRepo: ICalcsFindRepository,
    private createRepo: ICalcsCreateRepository
  ) {}

  async handle(hour: number, minute: number = 0): Promise<ResponseType> {
    if(hour < 0) {
      return {
        angle: -1,
        error: "Hour must be greater than 0"
      }
    }

    hour > 12 ? hour = hour - 12 : hour = hour;


    const dbCalc = await this.findRepo.find(hour, minute);

    if (dbCalc) {
      return { angle: dbCalc.angle };
    }


    const minutesAngle = minute * 6;
    const hourAngle = hour * 60 * 0.5;

    const angle = Math.min(
      Math.abs((minutesAngle + 360) - hourAngle),
      Math.abs(hourAngle - minutesAngle)
    );


    await this.createRepo.create(hour, minute, angle);

    return { angle: angle };
  }
}
