import Slider from "react-slick";
import { GoChevronRight } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";
import api from "../api";
import { useEffect, useState } from "react";

function LinhaFotosPortfolio(props) {

  const [infoPrestador, setPrestador] = useState([])
  const [infoFotoPortfolio, setFotoPortfolio] = useState([])

  useEffect(() => {
      const infoPrestador = localStorage.dadosUsuario;
      if (infoPrestador) {
          setPrestador(infoPrestador);
      }

      async function buscarFotosPortfolio() {
          const resposta = await api.get(`portifolio/${localStorage.idPrestador}`);
          setFotoPortfolio(resposta.data);
          console.log("OLHA O QUE VEIO DA API!! --- Portfólio", resposta.data)
          console.log(infoFotoPortfolio)
      }
      buscarFotosPortfolio();

  }, [])

  const settings = {
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    nextArrow: <GoChevronRight color="red" />,
    prevArrow: <GoChevronLeft  color="red"/>
};

const imgTratada = `url(data:image;base64,${infoFotoPortfolio})`

const image = {
  imagemPortfolio: {
    backgroundImage: imgTratada
  }
}

  return (
    <>
      <div id="portfolio" class="padding-zero-twenty">
        {/* <Slider {...settings}> */}
          <div class="padding-zero-twenty" style={image.imagemPortfolio}>
          </div>
        {/* </Slider> */}
      </div>
    </>
  );
}

export default LinhaFotosPortfolio;