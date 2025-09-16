export async function getCheckoutSession(tourId) {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}bookings/checkout-session/${tourId}`,
    {
      credentials: "include",
    }
  );
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "fetch failed");
  }

  const result = await response.json();
  const checkoutSession = await result.session;
  return checkoutSession;
}
