import express, { Router } from "express";

const port = process.env.HTTP_PORT || 3000;
const app = express();

export function serve(...routers: [Router[]]) {
  routers.forEach((router) => {
    app.use(router);
  });

  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
}
