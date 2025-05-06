import Carousel from "../AboutCarousel/AboutCarousel";

import Amsterdam_Photo from "../AboutImages/Amsterdam_Photo.png";
import Family_Photo from "../AboutImages/Family_Photo.png";
import Dog_Photo from "../AboutImages/Dog_Photo.png";
import BTS_Photo from "../AboutImages/BTS_Photo.png"


import "./AboutExperienceContainer.css"

const images = [
    Amsterdam_Photo,
    Family_Photo,
    Dog_Photo,
    BTS_Photo
  ];

  const AboutExperienceContainer = () => {
    return (
      <div>
        <h1 className="AboutExperienceTitle"> Playground </h1>
        <Carousel images={images} />

    </div>
    );
  };


  export default AboutExperienceContainer;
