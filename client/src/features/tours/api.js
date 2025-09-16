export async function getAllTours() {
  const response = await fetch(`${import.meta.env.VITE_API_URL}tours`);

  if (!response.ok) {
    const error = await response.json();
    throw new Error(
      error.message || "Failed to fetch tours. Please try again later."
    );
  }

  const result = await response.json();

  const tours = result.data;
  return tours;
}

export async function getTour(tourId) {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}tours/${tourId}`
  );

  if (!response.ok) {
    const error = await response.json();
    throw new Error(
      error.message || "Failed to load tour. Please try again later."
    );
  }

  const result = await response.json();
  const tour = await result.data;

  return tour;
}
