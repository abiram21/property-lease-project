import { graphqlHTTP } from "express-graphql";
import { json } from "body-parser";
import schema from "./graphql/schema";
import { connect } from "./db/mongo";

module.exports = function (app: any) {
  app.use(json());

  // DB conncection
  connect();

  //All defined endpoints
  app.use(
    "/graphql",
    graphqlHTTP({
      schema: schema,
      graphiql: true,
    })
  );

  //All undefined endpoints
  app.use((req: Request, res: Response, next: (arg0: Error) => void) => {
    const error: any = new Error("Page not found!");
    error.status = 404;
    next(error);
  });

  //All unhandled errors
  app.use(
    (
      error: { status: any; message: any },
      req: any,
      res: {
        status: (arg0: any) => void;
        json: (arg0: { message: any }) => void;
      },
      next: any
    ) => {
      res.status(error.status || 500);
      res.json({
        message: error.message,
      });
    }
  );
};
