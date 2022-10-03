import { useEffect, useState } from "react";
import { useParams } from "react-router";
import api from "../api";
import CardAgendaDeAtendimentos from "../components/CardAgendaDeAtendimentos";
import CardInformacoesDoProfissionalAdm from "../components/CardInformacoesDoProfissionalAdm"
import CardPortifolioAdm from "../components/CardPortifolioAdm";
import CardTabelaDePrecosAdm from "../components/CardTabelaDePrecosAdm";
import Footer from "../components/Footer";
import HeaderColaborador from "../components/HearderColaborador";


function AccountProfissional() {

    const [infoPrestador, setPrestador] = useState([])
    const [preferencias, setPreferencias] = useState([])

    async function buscarInfos(idPrestador) {
        const resposta = await api.get(`prestador/${idPrestador}`);
        setPrestador(resposta.data);
        console.log("OLHA O QUE VEIO DA API!!", resposta.data)
    }
    buscarInfos()

    return (
        <>
            <HeaderColaborador/>
            <main class="margin-top-thirty">
                <div class="container" funcaoInfos={buscarInfos}>
                    {infoPrestador.map((prestadores) => (
                        <CardInformacoesDoProfissionalAdm
                        nome={prestadores.nome}
                        />
                    ))}
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
export default AccountProfissional;


