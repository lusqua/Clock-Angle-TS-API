import { IClockCalcsFindService } from "@/domain/useCase/ClockCalsFindService";
import { Request, Response } from "express";
import { ClockAngleHourFetch } from "../fetchHours";

describe('the data is peanut butter', () => {

  let clockCalcsFind: IClockCalcsFindService;

  beforeEach(() => {
    clockCalcsFind = {
      handle: jest.fn().mockReturnValue({
        angle: 180
      }),
    };
  });

  it('the fetch fails with an error', async () => {

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
