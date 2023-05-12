import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MySankey from "./chart3";
import Area from "./chart4";

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div className="h-full p-8">
        <MySankey />
      </div>
      <div className="h-full p-8">
        <Area />
      </div>
    </Slider>
  );
}

export default Carousel;
