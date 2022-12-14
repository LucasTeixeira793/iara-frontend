import Slider from "react-slick";
import { GoChevronRight } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";
import LinhaFotosPortfolio from "./LinhaFotosPortfolio";
import api from "../api";
import { useEffect, useState } from "react";
import { useParams } from "react-router";


function CardPortifolio() {

    const [infoPrestador, setPrestador] = useState([])
    const [infoFotoPortfolio, setFotoPortfolio] = useState([])
    const params = useParams();

    useEffect(() => {
        const infoPrestador = localStorage.dadosUsuario;
        if (infoPrestador) {
            setPrestador(infoPrestador);
        }

        async function buscarFotosPortfolio() {
            const resposta = await api.get(`portifolio/${params.id}`);
            setFotoPortfolio(resposta.data);
            console.log(resposta.data)
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
    if (infoFotoPortfolio === "") {
        return "";
    } else {
        return (
            <div class="card margin-top-thirty prelative">
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

export default CardPortifolio;