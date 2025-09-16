import { useParams } from "react-router-dom";

import Spinner from "../shared/ui/Spinner";
import TourHeader from "../features/tours/TourHeader";
import TourDescription from "../features/tours/TourDescription";
import TourPictures from "../features/tours/TourPictures";
import TourBooking from "../features/checkout/TourBooking";

import useTour from "../features/tours/useTour";

function TourDetails() {
  const { tourId } = useParams();

  const { isLoading, tour, isError, error } = useTour(tourId);

  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spinner />
      </div>
    );

  return (
    <section>
      {isError ? (
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-[#e74c3c] text-3xl text-center">{error.message}</p>
        </div>
      ) : (
        <>
          <TourHeader tour={tour} />
          <TourDescription tour={tour} />
          <TourPictures tour={tour} />
          <TourBooking tour={tour} />
        </>
      )}
    </section>
  );
}

export default TourDetails;
