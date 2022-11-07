import CardAgendaCliente from "../components/CardAgendaCliente";
import Footer from "../components/Footer";
import HeaderCliente from "../components/HearderCliente";
import CardInformacoesClienteAdm from "../components/CardInformacoesClienteAdm";
import { useEffect, useState } from "react";
import api from "../api";

function AccountCliente() {

    const [infoCliente, setCliente] = useState([])
    const [infoAvaliacao, setAvaliacao] = useState([])

    useEffect(() => {
        const infoCliente = localStorage.dadosUsuario;
        if (infoCliente) {
            setCliente(infoCliente);
        }

        async function buscarInfos() {
            const respostaInfos = await api.get(`cliente/${localStorage.idCliente}`, { headers: { "Access-Control-Allow-Origin": "*" } });
            setCliente(respostaInfos.data);
            console.log("OLHA O QUE VEIO DA API!! --- Infos", respostaInfos.data)

            const respostaAvaliacao = await api.get(`cliente/avaliacao/${localStorage.idCliente}`, { headers: { "Access-Control-Allow-Origin": "*" } });
            setAvaliacao(respostaAvaliacao.data);
            console.log("OLHA O QUE VEIO DA API!! --- Avaliação", respostaAvaliacao.data)
        }
        buscarInfos();

    }, [])

    if (infoAvaliacao.avaliacao == "NaN") {
        infoAvaliacao.avaliacao = 0;
    }
    else {
        var formatAvaliacao = parseFloat(infoAvaliacao.avaliacao).toFixed(1);
        if (formatAvaliacao == 5.0) {
            formatAvaliacao = 5
        }
    }

    var generoCompleto;
    if (infoCliente.genero == 'F') {
        generoCompleto = "Feminino";
    }
    else {
        generoCompleto = "Masculino";
    }

    if (infoCliente.length != 0) {
        return (
            <>
                <HeaderCliente />
                <main class="margin-top-thirty margin-bottom-thirty container">
                    <CardInformacoesClienteAdm
                        foto={infoCliente.foto}
                        avaliacao={infoAvaliacao.avaliacao ? formatAvaliacao : "0"}
                        nome={infoCliente.nome}
                        sobrenome={infoCliente.sobrenome}
                        telefone={infoCliente.telefone}
                        genero={generoCompleto}
                        rua={infoCliente.enderecos.length > 0 ? infoCliente.enderecos[0].rua : "Não tem rua"}
                        numero={infoCliente.enderecos.length > 0 ? infoCliente.enderecos[0].numero : "Não tem número"}
                        bairro={infoCliente.enderecos.length > 0 ? infoCliente.enderecos[0].bairro : "Não tem bairro"}
                        cidade={infoCliente.enderecos.length > 0 ? infoCliente.enderecos[0].cidade : "Não tem cidade"}
                        uf={infoCliente.enderecos.length > 0 ? infoCliente.enderecos[0].uf : "Não tem UF"}
                        cep={infoCliente.enderecos.length > 0 ? infoCliente.enderecos[0].cep : "Não tem cep"}
                        complemento={infoCliente.enderecos.length > 0 ? infoCliente.enderecos[0].complemento : "Não tem cep"}
                    />
                    <div class="dflex jbetween margin-top-thirty">
                        <CardAgendaCliente id={infoCliente.id} />
                    </div>
                </main>
                <Footer />
            </>
        );
    }
}

export default AccountCliente;