import { loadStripe } from "@stripe/stripe-js";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { getCheckoutSession } from "./api";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

export function useBookTour(tourId) {
  const { mutate: createCheckoutSession } = useMutation({
    mutationFn: () => getCheckoutSession(tourId),

    onSuccess: async (session) => {
      const stripe = await stripePromise;

      if (!stripe) {
        toast.error("Stripe failed to load");
        return;
      }

      stripe.redirectToCheckout({
        sessionId: session.id,
      });
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { createCheckoutSession };
}
