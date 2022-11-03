import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import api from '../api';
import { useEffect, useState } from "react";
import logo from "../html-css-template/img/logo-sem-fundo.png";

function HeaderCliente() {

    const [infoCliente, setCliente] = useState([])

    useEffect(() => {
        // const infoCliente = localStorage.dadosUsuario;
        // if (infoCliente) {
        //     setCliente(infoCliente);
        // }

        async function buscarInfos() {
            const resposta = await api.get(`cliente/${localStorage.idCliente}`, { headers: { "Access-Control-Allow-Origin": "*" } });
            setCliente(resposta.data);
            console.log("OLHA O QUE VEIO DA API!! --- Infos", resposta.data)
            console.log(infoCliente)
        }
            buscarInfos();

    }, [])

    const fotoTratada = `url("data:image;base64,${infoCliente.foto}")`

    

    const image = {
        imagemPortfolio: {
            backgroundImage: fotoTratada,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "78px",
            borderRadius: "50%"
        }
    }

    return (
        <header class="header-logged">
            <div class="container dflex acenter jbetween">
                <a href="/home" class="logo transform">
                    <img alt="Logo" src={logo} />
                </a>
                <form>
                    <input type="text" placeholder="Buscar" class="input-search" required />
                    <button type="submit" class="btn-search">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </form>
                <div class="dflex acenter">
                    <a href="http://s3-iara.s3-website-us-east-1.amazonaws.com/" class="txt-dark-red txt-medium margin-right-fifty transform">INSTITUCIONAL</a>
                </div>
                <div class="prelative">
                    <button type="button" class="btn-no-style btn-profile dflex acenter jcenter">
                    <div style={image.imagemPortfolio} alt="Foto de perfil" class="height-85 margin-right-twenty" />
                    </button>
                    <div class="itens jflex pabsolute txt-dark-red account-menu">
                        <a class="txt-dark-red transform-bold margin-bottom-10" href="/accountCliente">MINHA CONTA</a>
                        <a class="txt-dark-red transform-bold margin-bottom-10" href="/favoritos" >FAVORITOS</a>
                        <a class="txt-dark-red transform-bold" href="/">SAIR</a>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default HeaderCliente;
