import Slider from "react-slick";
import { GoChevronRight } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";
import LinhaFotosPortfolio from "./LinhaFotosPortfolio";
import api from "../api";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

function CardPortifolioAdm() {

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

    const imgTratada = `url(data:image;base64,${infoFotoPortfolio})`

    const image = {
        imagemPortfolio: {
            backgroundImage: imgTratada,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "344px",
            width: "480px"
        }
    }

    const settings = {
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        nextArrow: <GoChevronRight color="red" />,
        prevArrow: <GoChevronLeft color="red" />
    };
    // alert("'" + infoFotoPortfolio + "'");
    if (infoFotoPortfolio === "") {
        return (
            <div class="card margin-top-thirty prelative">
                <a class="btn-editar-perfil pabsolute bg-hover-white txt-hover-dark-red transform">
                    <FontAwesomeIcon icon={faPen} />
                </a>
                <h3 class="txt-bigger txt-red txt-bold">Portfólio</h3>
                <div id="portfolio" class="padding-zero-twenty">
                </div>
            </div>
        )

    } else {
        return (
            <div class="card margin-top-thirty prelative">
                <a class="btn-editar-perfil pabsolute bg-hover-white txt-hover-dark-red transform">
                    <FontAwesomeIcon icon={faPen} />
                </a>
                <h3 class="txt-bigger txt-red txt-bold">Portfólio</h3>
                <div id="portfolio" class="padding-zero-twenty">
                    <Slider {...settings}>
                        {infoFotoPortfolio.map((fotos) => (
                            <LinhaFotosPortfolio
                                imagem={fotos.length > 0 ? fotos : "Adicione uma foto ao portfólio!"}
                            />
                        ))}
                    </Slider>
                </div>
            </div>
        );
    }
}
export default CardPortifolioAdm;