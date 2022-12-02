import Slider from "react-slick";
import { GoChevronRight } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";
import LinhaFotosPortfolio from "./LinhaFotosPortfolio";
import api from "../api";
import { useEffect, useState, useRef } from "react";
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
    
    const inputRef = useRef(null);
    const handleClick = () => {
        inputRef.current.click();
    };

    const handleFileChange = event => {
        const fileObj = event.target.files && event.target.files[0];
        if (!fileObj) {
            return;
        }

        event.target.value = null;

        console.log(event.target.files);

        console.log(fileObj);
        console.log(fileObj.name);

        const formData = new FormData();

        if (fileObj) {
            formData.append('novaFoto', fileObj, fileObj.name)
        }

        console.log("formData")
        console.log(formData)

        function atualizarTeste() {
            api.post(`portifolio/${localStorage.idPrestador}`, fileObj, {
                headers: {
                    'Content-Type': 'image/jpeg'
                }
            }
            ).then((res) => {
                console.log(res)
                console.log('nova foto salva')
                window.location.reload();
            });
        }

        atualizarTeste();

    };

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
                <input
                        style={{ display: 'none' }}
                        ref={inputRef}
                        type="file"
                        onChange={handleFileChange}
                    />
                    <button class="btn-editar-perfil pabsolute bg-hover-white txt-hover-dark-red  transform border-none" onClick={handleClick}>
                        <FontAwesomeIcon icon={faPen} />
                    </button>
                <h3 class="txt-bigger txt-red txt-bold">Portfólio</h3>
                <div id="portfolio" class="padding-zero-twenty">
                </div>
            </div>
        )

    } else {
        return (
            <div class="card margin-top-thirty prelative">
                <input
                        style={{ display: 'none' }}
                        ref={inputRef}
                        type="file"
                        onChange={handleFileChange}
                    />
                    <button class="btn-editar-perfil pabsolute bg-hover-white txt-hover-dark-red  transform border-none" onClick={handleClick}>
                        <FontAwesomeIcon icon={faPen} />
                    </button>
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
