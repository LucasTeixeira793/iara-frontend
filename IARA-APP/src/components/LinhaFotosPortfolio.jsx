import Slider from "react-slick";
import { GoChevronRight } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";

function LinhaFotosPortfolio(props) {

  const settings = {
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    nextArrow: <GoChevronRight color="red" />,
    prevArrow: <GoChevronLeft  color="red"/>
};

  return (
    <>
      <div id="portfolio" class="padding-zero-twenty">
        <Slider {...settings}>
          <div class="padding-zero-twenty">
            <img src={`data:image/jpeg;base64,${props.foto}`} />
          </div>
        </Slider>
      </div>
    </>
  );
}

export default LinhaFotosPortfolio;