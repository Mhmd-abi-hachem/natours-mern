import Spinner from "../shared/ui/Spinner";
import TourCard from "../features/tours/TourCard";
import { useTours } from "../features/tours/useTours";

function HomePage() {
  const { isLoading, tours, isError, error } = useTours();

  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spinner />
      </div>
    );

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-18  md:gap-20 lg:gap-22">
      {isError ? (
        <div className="min-h-[80vh] flex items-center justify-center">
          <p className="text-[#e74c3c] text-3xl text-center">{error.message}</p>
        </div>
      ) : (
        tours.map((tour) => <TourCard tour={tour} key={tour._id} />)
      )}
    </section>
  );
}

export default HomePage;
