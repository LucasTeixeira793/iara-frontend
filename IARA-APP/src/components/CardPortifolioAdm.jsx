import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import LinhaFotosPortfolio from "../components/LinhaFotosPortfolio";
import api from "../api";
import { useEffect, useState } from "react";


function CardPortifolioAdm(props) {

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

    return (
        <div class="card margin-top-thirty prelative">
            <a class="btn-editar-perfil pabsolute bg-hover-white txt-hover-dark-red transform">
                <FontAwesomeIcon icon={faPen} />
            </a>
            <h3 class="txt-bigger txt-red txt-bold">Portfólio</h3>
            {infoFotoPortfolio.map((fotos) => (
                <LinhaFotosPortfolio
                    foto={fotos.foto}
                />
            ))}
        </div>
    );
}

export default CardPortifolioAdm;