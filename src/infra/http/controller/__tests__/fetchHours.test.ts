import { Request, Response } from "express";

import { IClockCalcsFindService } from "../../../../domain/useCase/ClockCalsFindService";
import { ClockAngleHourFetch } from "../fetchHours";

describe('Test fetch hour route', () => {

  let clockCalcsFind: IClockCalcsFindService;

  beforeEach(() => {
    jest.useFakeTimers()

    clockCalcsFind = {
      handle: jest.fn().mockReturnValue({
        angle: 180
      }),
    };
  });

  it('should be 180 degree', async () => {

    const fectch = new ClockAngleHourFetch(clockCalcsFind);

    const req = {
      params: {
        hour: 6
      }
    } as unknown;

    const res = {
      send: jest.fn()
    } as unknown;


    const response = await fectch.handle(req as Request, res as Response);

    expect(response.angle).toBe(180);
  });
});
