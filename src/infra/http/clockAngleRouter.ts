import { Router } from "express";
import { ClockAngleHourFetch, ClockAngleMinutesFetch } from "./controller";
import { ClockService } from "@domain/types/ICalcsRepostory";

export function clockAngleRouter(): Router {
  const router = Router();

  const fetchByHour = new ClockAngleHourFetch(ClockService);
  const fetchByMinutes = new ClockAngleMinutesFetch(ClockService);

  router.get("/v1/rest/clock/:hour", fetchByHour.handle);
  router.get("/v1/rest/clock/:hour/:minutes", fetchByMinutes.handle);

  return router;
}
