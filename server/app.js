import express from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import cors from "cors";

import tourRouter from "./routes/tourRoutes.js";
import userRouter from "./routes/userRoutes.js";
import globalErrorHandler from "./controllers/errorController.js";
import cookieParser from "cookie-parser";
import bookingRouter from "./routes/bookingRoutes.js";
import AppError from "./utils/appError.js";

const app = express();

// 1) Global middlewares

app.use(helmet());
app.use(
  cors({
    origin: [process.env.CLIENT_URL, "http://localhost:5173"],
    credentials: true,
  })
);

// Rate limiting
const limiter = rateLimit({
  max: 100,
  windowsMs: 60 * 60 * 1000, // in milliseconds
  message: "Too many requests, please try again in one hour!",
});
app.use("/api", limiter);

// Body &&& cookie parser
app.use(express.json({ limit: "10kb" }));
app.use(cookieParser());

// Data sanitization

//  Data sanitization to sanitize only req.body and req.params
app.use((req, res, next) => {
  if (req.body) {
    req.body = mongoSanitize.sanitize(req.body, { replaceWith: "_" });
  }
  if (req.params) {
    req.params = mongoSanitize.sanitize(req.params, { replaceWith: "_" });
  }
  next();
});

// 2) Routes
app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/bookings", bookingRouter);

// Handiling unhandled routes
app.all(/.*/, (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Error middleware
app.use(globalErrorHandler);

export default app;
