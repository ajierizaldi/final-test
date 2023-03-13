const express = require("express");
const controllers = require("../app/controllers");
const middlewares = require("../app/middlewares");
const appRouter = express.Router();
const apiRouter = express.Router();

/** Mount GET / handler */
appRouter.get("/", controllers.main.index);

/**
 * TODO: Implement your own API
 *       implementations
 */
/** AUTH */
apiRouter.post("/user/register", controllers.api.v1.authControllers.register);
apiRouter.post("/user/login", controllers.api.v1.authControllers.login);


/** EMPLOYEE */
// 1. Request Overtime
apiRouter.post("/overtime",
  middlewares.tokenChecker,
  controllers.api.v1.overtimeControllers.reqOvertime);


/** HR */

/**
 * TODO: Delete this, this is just a demonstration of
 *       error handler
 */
apiRouter.get("/api/v1/errors", () => {
  throw new Error(
    "The Industrial Revolution and its consequences have been a disaster for the human race."
  );
});

apiRouter.use(controllers.api.main.onLost);
apiRouter.use(controllers.api.main.onError);

/**
 * TODO: Delete this, this is just a demonstration of
 *       error handler
 */
appRouter.get("/errors", () => {
  throw new Error(
    "The Industrial Revolution and its consequences have been a disaster for the human race."
  );
});

appRouter.use(apiRouter);

/** Mount Not Found Handler */
appRouter.use(controllers.main.onLost);

/** Mount Exception Handler */
appRouter.use(controllers.main.onError);

module.exports = appRouter;
