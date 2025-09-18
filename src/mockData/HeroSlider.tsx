import { useState } from "react";
import { heroSlides } from "./CategoryData";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesToShow = 4;
  const totalSlides = heroSlides.length;

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev + slidesToShow >= totalSlides ? 0 : prev + slidesToShow
    );
  };
  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev - slidesToShow < 0 ? totalSlides - slidesToShow : prev - slidesToShow
    );
  };

  const slideWidth = 38 / slidesToShow;

  return (
    <div className="hero-slider">
      <div
        className="slides-container"
        style={{
          width: `${(totalSlides / slidesToShow) * 100}%`,
          display: "flex",
          gap: "1rem",
          transition: "transform 0.5s ease-in-out",
          transform: `translateX(-${(currentSlide / totalSlides) * 100}%)`,
        }}
      >
        {heroSlides.map((slide) => (
          <div
            key={slide.id}
            className="slide"
            style={{
              flex: `0 0 ${slideWidth}%`,
              maxWidth: `${slideWidth}%`,
            }}
          >
            <div
              className="content"
              style={{ position: "relative", padding: 0 }}
            >
              <img
                className="img-slider"
                src={slide.image}
                alt={`slide-${slide.id}`}
              />
              <button
                className="ptn-slider"
                onClick={() => alert("View clicked!")}
              >
                View Products
              </button>
            </div>
          </div>
        ))}
      </div>
      <button onClick={prevSlide} className="nav-button prev">
        <IoIosArrowRoundBack />
      </button>
      <button onClick={nextSlide} className="nav-button next">
        <IoIosArrowRoundForward />
      </button>
      <div className="dots">
        {Array.from({ length: Math.ceil(totalSlides / slidesToShow) }).map(
          (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index * slidesToShow)}
              className={`dot ${
                currentSlide === index * slidesToShow ? "active" : ""
              }`}
            />
          )
        )}
      </div>
    </div>
  );
};
