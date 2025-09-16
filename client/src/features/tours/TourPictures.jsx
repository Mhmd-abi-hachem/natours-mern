import React from "react";

function TourPictures({ tour }) {
  return (
    <section className="section-pictures">
      {tour.images.map((img, i) => (
        <div key={i}>
          <img
            className={`picture-box__img picture-box__img--${i + 1}`}
            src={`/tours/${img}`}
            alt={`Image taken from the ${tour.name} tour ${i + 1} `}
          />
        </div>
      ))}
    </section>
  );
}

export default TourPictures;
