import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import LinhaFotosPortfolio from "../components/LinhaFotosPortfolio";
import api from "../api";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import { GoChevronRight } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";
import imagem1 from "../html-css-template/img/portfolio/1.png";
import imagem2 from "../html-css-template/img/portfolio/2.png";
import imagem3 from "../html-css-template/img/portfolio/3.png";
import imagem4 from "../html-css-template/img/portfolio/4.png";


function CardPortifolioAdm(props) {

    // const [infoPrestador, setPrestador] = useState([])
    // const [infoFotoPortfolio, setFotoPortfolio] = useState([])

    // useEffect(() => {
    //     const infoPrestador = localStorage.dadosUsuario;
    //     if (infoPrestador) {
    //         setPrestador(infoPrestador);
    //     }

    //     async function buscarFotosPortfolio() {
    //         const resposta = await api.get(`portifolio/${localStorage.idPrestador}`);
    //         setFotoPortfolio(resposta.data);
    //         console.log("OLHA O QUE VEIO DA API!! --- Portfólio", resposta.data)
    //         console.log(infoFotoPortfolio)
    //     }
    //     buscarFotosPortfolio();

    // }, [])

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
        <div class="card margin-top-thirty prelative">
            <a class="btn-editar-perfil pabsolute bg-hover-white txt-hover-dark-red transform">
                <FontAwesomeIcon icon={faPen} />
            </a>
            <h3 class="txt-bigger txt-red txt-bold">Portfólio</h3>
            <div id="portfolio" class="padding-zero-twenty">
                <Slider {...settings}>
                    <div class="padding-zero-twenty">
                        <img src={imagem1} alt="Imagem 1 do Portfólio" />
                    </div>
                    <div class="padding-zero-twenty">
                        <img src={imagem2} alt="Imagem 2 do Portfólio" />
                    </div>
                    <div class="padding-zero-twenty">
                        <img src={imagem3} alt="Imagem 3 do Portfólio" />
                    </div>
                    <div class="padding-zero-twenty">
                        <img src={imagem4} alt="Imagem 4 do Portfólio" />
                    </div>
                </Slider>
            </div>


            {/* ##INTEGRAÇÃO BACKEND */}
            {/* <Slider {...settings}>
                {infoFotoPortfolio.map((fotos) => (
                    <LinhaFotosPortfolio
                        foto={fotos.foto}
                    />
                ))}
            </Slider> */}


        </div>
    );
}

export default CardPortifolioAdm;