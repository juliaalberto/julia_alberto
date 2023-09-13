import {useState} from "react";
import "./AboutCarousel.css";



const Carousel = ({images}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex + 1 === images.length ? 0 : prevIndex + 1
        );
      };
      const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
        );
      };
      const handleDotClick = (index) => {
        setCurrentIndex(index);
      };
    
    return (
        <div className="carousel">
            {/*https://www.freecodecamp.org/news/build-an-image-carousel-with-react-and-framer-motion/ */}

            <img
            key={currentIndex}
            src={images[currentIndex]}
            />
            <div className="slide_direction">
            <div className="left" onClick={handlePrevious}>
                <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
            </div>

            <div className="indicator">
            {images.map((_, index) => (
            <div
                key={index}
                className={`dot ${currentIndex === index ? "active" : ""}`}
                onClick={() => handleDotClick(index)}
            ></div>
            ))}
        </div>

            <div className="right" onClick={handleNext}>
                
                <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
            </div>
        </div>

        </div>
    );
};

export default Carousel;