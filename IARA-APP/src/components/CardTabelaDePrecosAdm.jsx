import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import LinhaTabelaPrecos from "../components/LinhaTabelaPrecos";
import api from "../api";
import { useEffect, useState } from "react";
import 'moment/locale/pt-br'

function CardTabelaDePrecosAdm() {

    const [infoPreco, setPreco] = useState([])
    const [prestador, setPrestador] = useState([])

    useEffect(() => {
        // const infoPrestador = localStorage.dadosUsuario;
        // if (infoPrestador) {
        //     setPrestador(infoPrestador);
        // }
        async function buscarPrecos() {
            const resposta = await api.get(`servico/prestador/${localStorage.idPrestador}`);
            setPreco(resposta.data);
            console.log("OLHA O QUE VEIO DA API!! --- Preços", resposta.data)
            console.log(infoPreco)
        }
        buscarPrecos();
        
    }, [])

    const formCurrency = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    })

    if(infoPreco === null){
        return(
            <div>Vazio</div>
        );
    }else{
        return (
            <div class="card half prelative">
                <Link to={"/cadastrarServico"}>
                    <a class="btn-editar-perfil pabsolute bg-hover-white txt-hover-dark-red transform">
                        <FontAwesomeIcon icon={faPen} />
                    </a>
                </Link>
                <h3 class="txt-bigger txt-center txt-red txt-bold">Tabela de Preços</h3>
                {infoPreco.map((precos) => (
                    <LinhaTabelaPrecos
                        tipo={precos.tipo}
                        duracao={precos.duracaoEstimada + " h"}
                        preco={formCurrency.format(precos.valor)}
                    />
                ))}
            </div>       
        );          
    }
   


}

export default CardTabelaDePrecosAdm;