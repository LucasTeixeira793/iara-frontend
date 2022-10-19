import CardAgendaCliente from "../components/CardAgendaCliente";
import Footer from "../components/Footer";
import HeaderCliente from "../components/HearderCliente";
import CardInformacoesClienteAdm from "../components/CardInformacoesClienteAdm";
import { useEffect, useState } from "react";
import api from "../api";

function AccountCliente() {

    const [infoCliente, setCliente] = useState([])

    useEffect(() => {
        const infoCliente = localStorage.dadosUsuario;
        if (infoCliente) {
            setCliente(infoCliente);
        }

        async function buscarInfos() {
            const resposta = await api.get(`cliente/${localStorage.idCliente}`, {headers: {"Access-Control-Allow-Origin": "*"}});
            setCliente(resposta.data);
            console.log("OLHA O QUE VEIO DA API!! --- Infos", resposta.data)
            console.log(infoCliente)
        }
        buscarInfos();

    }, [])

    var generoCompleto;
    if(infoCliente.genero == 'F'){
        generoCompleto="Feminino";
    }
    else{
        generoCompleto="Masculino";
    }

    if (infoCliente.length != 0) { 
        return (
            <>
                <HeaderCliente />
                <main class="margin-top-thirty margin-bottom-thirty container">
                    <CardInformacoesClienteAdm
                    nome={infoCliente.nome}
                    sobrenome={infoCliente.sobrenome}
                    telefone={infoCliente.telefone}
                    genero={generoCompleto}
                    rua={infoCliente.enderecos[0].rua}
                    numero={infoCliente.enderecos[0].numero}
                    bairro={infoCliente.enderecos[0].bairro}
                    cidade={infoCliente.enderecos[0].cidade}
                    uf={infoCliente.enderecos[0].uf}
                    cep={infoCliente.enderecos[0].cep}
                    />
                    <div class="dflex jbetween margin-top-thirty">
                        <CardAgendaCliente/>
                    </div>
                </main>
                <Footer/>
            </>
        );
    }
}

export default AccountCliente;