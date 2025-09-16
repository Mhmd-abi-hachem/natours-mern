import Stripe from "stripe";

import Tour from "../models/TourModel.js";
import AppError from "../utils/appError.js";
import { catchAsync } from "../utils/catchAsync.js";

export const getCheckoutSession = catchAsync(async (req, res, next) => {
  const { tourId } = req.params;

  // 1) Get the currently booked tour
  const tour = await Tour.findById(tourId);
  if (!tour) {
    return next(new AppError("tour not found", 404));
  }

  // 2) Create checkout session
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    success_url: `${process.env.CLIENT_URL}/booking/booking-success?tour=${tour._id}`,
    cancel_url: `${process.env.CLIENT_URL}/tour/${tourId}?checkout=cancelled`,

    client_reference_id: tourId,
    line_items: [
      {
        price_data: {
          product_data: {
            name: `${tour.name} Tour`,
            description: tour.summary,
            images: [`https://www.natours.dev/img/tours/${tour.imageCover}`],
          },
          unit_amount: tour.price * 100,
          currency: "usd",
        },

        quantity: 1,
      },
    ],
    mode: "payment",
  });

  // 3) Create session response
  res.status(200).json({
    status: "success",
    session,
  });
});
