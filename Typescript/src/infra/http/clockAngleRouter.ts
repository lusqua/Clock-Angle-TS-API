import { ClockCalcsFindService } from "../../domain/useCase/ClockCalsFindService";
import { Router } from "express";

import { ClockAngleHourFetch, ClockAngleMinutesFetch } from "./controller";

export function clockAngleRouter(): Router {
  const router = Router();

  const fetchByHour = new ClockAngleHourFetch();
  const fetchByMinutes = new ClockAngleMinutesFetch();

  router.get("/v1/rest/clock/:hour", fetchByHour.handle);
  router.get("/v1/rest/clock/:hour/:minutes", fetchByMinutes.handle);

  return router;
}
