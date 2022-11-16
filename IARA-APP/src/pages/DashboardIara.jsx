import DashIaraControleUsuarios from "../components/DashIaraControleUsuarios";
import DashIaraRelatorioAtendimentos from "../components/DashIaraRelatorioAtendimentos";
import DashIaraTotalAtendimentos from "../components/DashIaraTotalAtendimentos";
import Footer from "../components/Footer";
import GraficoProcuraServicoIara from "../components/GraficoProcuraServicoIara";
import GraficoSemanalIara from "../components/GraficoSemanalIara";
import HeaderColaborador from "../components/HearderColaborador";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import api from "../api";

function DashboardIara() {

    const [d90, setD90] = useState([{ct_ultimos_90_dias: 0}]);
    const [d30, setD30] = useState([{ct_ultimos_30_dias: 0}]);
    const [d7, setD7] = useState([{ct_ultimos_7_dias: 0}]);
    useEffect(() => {
        const interval = setInterval(() => {
            Set90Dias();
            Set30Dias();
            Set7Dias();

            function Set90Dias() {
                api.get(`/view/agendamento/contagem/90dias`).then(d90 => {
                    console.log(d90.data);
                    setD90(d90.data);
                }).catch(erro => {
                    console.log(erro)
                })
            }

            function Set30Dias() {
                api.get(`/view/agendamento/contagem/30dias`).then(d30 => {
                    console.log(d30.data);
                    setD30(d30.data);
                }).catch(erro => {
                    console.log(erro)
                })
            }

            function Set7Dias() {
                api.get(`/view/agendamento/contagem/7dias`).then(d7 => {
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
                <div class="dflex jbetween margin-bottom-80">
                    <div class="width-70-porc">
                        <h3 class="txt-center font-size-eighteen margin-top-ten"><b>NÚMERO DE ATENDIMENTOS POR DIA DA SEMANA</b></h3>
                        <GraficoSemanalIara />
                    </div>
                    <div class="width-30-margin-15 dflex fwrap">
                        <DashIaraTotalAtendimentos 
                         d90dias = {d90[0].ct_ultimos_90_dias}
                         d30dias = {d30[0].ct_ultimos_30_dias}
                         d7dias = {d7[0].ct_ultimos_7_dias}
                        />
                    </div>
                </div>
                <div class="dflex jbetween margin-bottom-110">
                    <DashIaraRelatorioAtendimentos />
                </div>
                <div class="dflex jaround margin-bottom-55">
                    <DashIaraControleUsuarios />
                </div>
                <div class="width-100-porc">
                    <h3 class="txt-center font-size-eighteen"><b>VISUALIZAÇÃO DE PROCURA DE SERVIÇOS</b></h3>
                    <GraficoProcuraServicoIara />
                </div>
            </main>
            <Footer />
        </>
    )
}

export default DashboardIara;