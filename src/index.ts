import "reflect-metadata";

import { serve } from "./infra/http/serve";
import { clockAngleRouter } from "./infra/http/clockAngleRouter";
import { AppDataSource } from "./infra/database/dataSource";

const routers = [clockAngleRouter()];

AppDataSource.initialize();

serve(routers);
