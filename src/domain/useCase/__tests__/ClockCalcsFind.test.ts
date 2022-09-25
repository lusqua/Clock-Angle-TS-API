import { ClockCalcsFindService } from "../ClockCalsFindService";

import { ICalcsCreateRepository, ICalcsFindRepository } from "../../types/ICalcsRepostory";


describe('ClockCalcsFind', (): void => {
  let clockCalcsFind: ICalcsFindRepository;
  let clockCalcsCreate: ICalcsCreateRepository;

  beforeEach(() => {
    jest.useFakeTimers()

    clockCalcsFind = {
      find: jest.fn().mockReturnValue(null),
    };
    clockCalcsCreate = {
      create: jest.fn().mockReturnThis(),
    }

    jest.clearAllMocks();
  });

  it('should return the angle 180 of the clock', async () => {

    const clockCalcsFindService = new ClockCalcsFindService(clockCalcsFind, clockCalcsCreate);

    const response = await clockCalcsFindService.handle(6, 0);

    expect(response.angle).toBe(180);

  });

  it('should return the angle 90 of the clock', async () => {

    clockCalcsFind.find = jest.fn().mockReturnValue(
      { angle: 90 }
    );

    const clockCalcsFindService = new ClockCalcsFindService(clockCalcsFind, clockCalcsCreate);

    const response = await clockCalcsFindService.handle(3, 0);

    expect(response.angle).toBe(90);
    }
  );
});