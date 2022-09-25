
import { CalcCreateRepository, CalcFindRepository } from "../../infra/repository";
import { ICalcsCreateRepository, ICalcsFindRepository } from "../types/ICalcsRepostory";

type ResponseType = {
  angle: number;
};

export interface IClockCalcsFindService {
  handle(hour: number, minute?: number): Promise<ResponseType>;
}

export class ClockCalcsFindService implements IClockCalcsFindService {
  constructor(
    private findRepository?: ICalcsFindRepository,
    private createRepository?: ICalcsCreateRepository
  ) {}

  async handle(hour: number, minute: number = 0): Promise<ResponseType> {

    hour > 12 ? hour = hour - 12 : hour = hour;

    const findRepo = this.findRepository ? this.findRepository : new CalcFindRepository();

    const dbCalc = await findRepo.find(hour, minute);

    if (dbCalc) {
      return { angle: dbCalc.angle };
    }


    const minutesAngle = minute * 6;
    const hourAngle = hour * 60 * 0.5;

    const angle = Math.min(
      Math.abs((minutesAngle + 360) - hourAngle),
      Math.abs(hourAngle - minutesAngle)
    );

    const createRepo = this.createRepository ? this.createRepository : new CalcCreateRepository();

    await createRepo.create(hour, minute, angle);

    return { angle: angle };
  }
}
