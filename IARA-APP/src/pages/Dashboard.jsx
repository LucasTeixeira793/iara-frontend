import DashCardRelatorioAtendimentos from "../components/DashCardRelatorioAtendimentos";
import DashCardServicoAtendimentos from "../components/DashCardServicoAtendimentos";
import DashCardTotalAtendimentos from "../components/DashCardTotalAtendimentos";
import Footer from "../components/Footer";
import GraficoProcuraServicos from "../components/GraficoProcuraServico";
import GraficoSemanal from "../components/GraficoSemanal";
import HeaderColaborador from "../components/HearderColaborador";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import api from "../api";


function Dashboard() {

    
    const [d90, setD90] = useState([{contagemUltimos90Dias: 0}]);
    const [d30, setD30] = useState([{contagemUltimos30Dias: 0}]);
    const [d7, setD7] = useState([{contagemUltimos7Dias: 0}]);

    useEffect(() => {
        const interval = setInterval(() => {
            Set90Dias();
            Set30Dias();
            Set7Dias();

            function Set90Dias() {
                api.get(`/view/agendamento/contagem/90dias/prestador?idPrestador=${localStorage.idPrestador}`).then(d90 => {
                    console.log(d90.data);
                    setD90(d90.data);
                }).catch(erro => {
                    console.log(erro)
                })    
            }

            function Set30Dias() {
                api.get(`/view/agendamento/contagem/30dias/prestador?idPrestador=${localStorage.idPrestador}`).then(d30 => {
                    console.log(d30.data);
                    setD30(d30.data);
                }).catch(erro => {
                    console.log(erro)
                })
            }

            function Set7Dias() {
                api.get(`/view/agendamento/contagem/7dias/prestador?idPrestador=${localStorage.idPrestador}`).then(d7 => {
                    console.log(d7.data);
                    setD7(d7.data);
                }).catch(erro => {
                    console.log(erro)
                })
            }
            return clearInterval(interval);
        }, 400)


    }, []);





    return (
        <>
            <HeaderColaborador />
            <main class="margin-top-thirty margin-bottom-thirty container">
                <h3 class="font-size-fifteen margin-bottom-80"><a href="accountProfissional.html" class="txt-black"><u>Perfil</u></a> / Análises</h3>
                <div class="dflex jbetween margin-bottom-80">
                    <div class="width-70-porc">
                        <h3 class="txt-center font-size-eighteen margin-top-ten"><b>NÚMERO DE ATENDIMENTOS EM COMPARAÇÃO COM A SEMANA ANTERIOR</b></h3>
                        <GraficoSemanal />
                    </div>
                    <div class="width-30-margin-15 dflex fwrap">
                        <DashCardTotalAtendimentos 
                            d90dias = {d90[0].contagemUltimos90Dias}
                            d30dias = {d30[0].contagemUltimos30Dias}
                            d7dias = {d7[0].contagemUltimos7Dias}
                        />
                    </div>
                </div>
                <div class="dflex jbetween margin-bottom-110">
                    <DashCardRelatorioAtendimentos />
                </div>
                <div class="dflex jbetween margin-bottom-80">
                    <DashCardServicoAtendimentos />
                    <div class="width-60-porc">
                        <h3 class="txt-center font-size-eighteen margin-bottom-neg-5"><b>VISUALIZAÇÃO DE PROCURA DE SERVIÇOS</b></h3>
                        <div id="chart_procura_servicos" height="400px">
                            <GraficoProcuraServicos />
                        </div>
                    </div>
                </div>

            </main>
            <Footer />
        </>

    )
}
export default Dashboard;