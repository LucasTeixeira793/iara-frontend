import { useEffect, useState } from "react";
import api from "../api";
import CardAgendaDeAtendimentos from "../components/CardAgendaDeAtendimentos";
import CardInformacoesDoProfissionalAdm from "../components/CardInformacoesDoProfissionalAdm"
import CardPortifolioAdm from "../components/CardPortifolioAdm";
import CardTabelaDePrecosAdm from "../components/CardTabelaDePrecosAdm";
import Footer from "../components/Footer";
import HeaderColaborador from "../components/HearderColaborador";

function AccountProfissional() {

    const [infoPrestador, setPrestador] = useState([])

    useEffect(() => {
        const infoPrestador = localStorage.dadosUsuario;
        if (infoPrestador) {
            setPrestador(infoPrestador);
        }

        async function buscarInfos() {
            const resposta = await api.get(`prestador/${localStorage.idPrestador}`, { headers: { "Access-Control-Allow-Origin": "*" } });
            setPrestador(resposta.data);
            console.log("OLHA O QUE VEIO DA API!! --- Infos", resposta.data)
            console.log(infoPrestador)
        }
        buscarInfos();

    }, [])

    var generoCompleto;
    if (infoPrestador.genero == 'F') {
        generoCompleto = "Feminino";
    }
    else {
        generoCompleto = "Masculino";
    }

    var preferenciaCompleta;
    if (infoPrestador.atendeDomicilio == true) {
        preferenciaCompleta = "Em domicílio"
    } else {
        preferenciaCompleta = "Em estabelecimento"
    }

    if (infoPrestador.length != 0) {
        return (
            <>
                <HeaderColaborador />
                <main class="margin-top-thirty">
                    <div class="container">
                        <CardInformacoesDoProfissionalAdm
                            nome={infoPrestador.nome}
                            sobrenome={infoPrestador.sobrenome}
                            telefone={infoPrestador.telefone}
                            genero={generoCompleto}
                            rua={infoPrestador.enderecos[0].rua}
                            numero={infoPrestador.enderecos[0].numero}
                            bairro={infoPrestador.enderecos[0].bairro}
                            cidade={infoPrestador.enderecos[0].cidade}
                            uf={infoPrestador.enderecos[0].uf}
                            cep={infoPrestador.enderecos[0].cep}
                            raio={infoPrestador.distancia}
                            preferencias={preferenciaCompleta}
                        />
                        <div class="dflex jbetween margin-top-thirty">
                            <CardTabelaDePrecosAdm />
                            <CardAgendaDeAtendimentos />
                        </div>
                        <CardPortifolioAdm />
                    </div>
                </main>
                <Footer />
            </>
        )
    }
}
export default AccountProfissional;


