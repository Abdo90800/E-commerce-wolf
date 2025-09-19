import { useState, useEffect } from "react";
import { heroSlides } from "./CategoryData";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [slideWidth, setSlideWidth] = useState(38 / 4);
  const totalSlides = heroSlides.length;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesToShow(1);
        setSlideWidth(6);
      } else {
        setSlidesToShow(4);
        setSlideWidth(38 / 4);
      }
    };

    // تعيين القيمة الأولية
    handleResize();

    // إضافة مستمع لتغيير حجم الشاشة
    window.addEventListener("resize", handleResize);

    // إزالة المستمع عند تفكيك المكون
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1 >= totalSlides ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 < 0 ? totalSlides - 1 : prev - 1));
  };

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
                Math.floor(currentSlide / slidesToShow) === index
                  ? "active"
                  : ""
              }`}
            />
          )
        )}
      </div>
    </div>
  );
};
