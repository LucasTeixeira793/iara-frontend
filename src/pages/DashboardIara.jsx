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

    const [d90, setD90] = useState([{ ct_ultimos_90_dias: 0 }]);
    const [d30, setD30] = useState([{ ct_ultimos_30_dias: 0 }]);
    const [d7, setD7] = useState([{ ct_ultimos_7_dias: 0 }]);
    const [usuariosCadastrados, setUsuariosCadastrados] = useState([{ ct_total_usuarios_cadastrados: 0 }]);
    const [usuariosAtivos, setUsuariosAtivos] = useState([{ vw_ct_total_usuarios_solicitaram_atendimento: 0 }]);
    const [diaComMaisAtendimento, setDiaComMaisAtendimento] = useState([{dia: "", atendimentos: 0 }])
    const [diaComMenosAtendimento, setDiaComMenosAtendimento] = useState([{dia: "", atendimentos: 0 }])
    const [atendimentosMesAnterior, setAtendimentosMesAnterior] = useState([{ct_mes_anterior: 0}])
    const [atendimentosSemanaAnterior, setAtendimentosSemanaAnterior] = useState([{ct_semana_anterior: 0}])
    

    useEffect(() => {
        const interval = setInterval(() => {
            Set90Dias();
            Set30Dias();
            Set7Dias();
            SetUsuariosCadastrados();
            SetUsuariosAtivos();
            SetDiaComMaisAtendimento();
            SetDiaComMenosAtendimento();
            SetAtendimentosMesAnterior();
            SetAtendimentosSemanaAnterior();

            function Set90Dias() {
                api.get(`/view/agendamento/contagem/90dias`).then(d90 => {
                    //console.log(d90.data);
                    setD90(d90.data);
                }).catch(erro => {
                    console.log(erro)
                })
            }

            function Set30Dias() {
                api.get(`/view/agendamento/contagem/30dias`).then(d30 => {
                    //console.log(d30.data);
                    setD30(d30.data);
                }).catch(erro => {
                    console.log(erro)
                })
            }

            function Set7Dias() {
                api.get(`/view/agendamento/contagem/7dias`).then(d7 => {
                    //console.log(d7.data);
                    setD7(d7.data);
                }).catch(erro => {
                    console.log(erro)
                })
            }

            function SetUsuariosCadastrados() {
                api.get(`view/cliente/contagem`).then(usuariosCadastrados => {
                    // console.log(usuariosCadastrados.data);
                    setUsuariosCadastrados(usuariosCadastrados.data);
                }).catch(erro => {
                    console.log(erro)
                })
            }

            function SetUsuariosAtivos() {
                api.get(`/view/cliente/servico/contagem`).then(usuariosAtivos => {
                    // console.log(usuariosAtivos.data);
                    setUsuariosAtivos(usuariosAtivos.data);
                }).catch(erro => {
                    console.log(erro)
                })
            }

            function SetDiaComMaisAtendimento() {
                api.get(`/view/agendamento/dia/maior`).then(resposta => {
                    // console.log(resposta.data);
                    setDiaComMaisAtendimento(resposta.data);
                }).catch(erro => {
                    console.log(erro)
                })
            }

            function SetDiaComMenosAtendimento() {
                api.get(`/view/agendamento/dia/menor`).then(resposta => {
                    // console.log(resposta.data);
                    setDiaComMenosAtendimento(resposta.data);
                }).catch(erro => {
                    console.log(erro)
                })
            }

            function SetAtendimentosMesAnterior() {
                api.get(`view/agendamento/contagem/mes-anterior`).then(resposta => {
                    // console.log(resposta.data);
                    setAtendimentosMesAnterior(resposta.data);
                }).catch(erro => {
                    console.log(erro)
                })
            }

            function SetAtendimentosSemanaAnterior() {
                api.get(`view/agendamento/contagem/semana-anterior`).then(resposta => {
                    // console.log(resposta.data);
                    setAtendimentosSemanaAnterior(resposta.data);
                }).catch(erro => {
                    console.log(erro)
                })
            }


            return clearInterval(interval);
        }, 400)
    }, []);
    // console.log(graficoProcuraServicoIara)
    return (
        <>
            {/* <HeaderColaborador /> */}
            <a class="txt-dark-red transform-bold" href="/">SAIR</a>
            <main class="margin-top-thirty margin-bottom-thirty container">
                <div class="dflex jbetween margin-bottom-80">
                    <div class="width-70-porc">
                        <h3 class="txt-center font-size-eighteen margin-top-ten"><b>NÚMERO DE ATENDIMENTOS POR DIA DA SEMANA</b></h3>
                        <GraficoSemanalIara />
                    </div>
                    <div class="width-30-margin-15 dflex fwrap">
                        <DashIaraTotalAtendimentos
                            d90dias={d90[0].ct_ultimos_90_dias}
                            d30dias={d30[0].ct_ultimos_30_dias}
                            d7dias={d7[0].ct_ultimos_7_dias}
                        />
                    </div>
                </div>
                <div class="dflex jbetween margin-bottom-110">
                    <DashIaraRelatorioAtendimentos
                        diaMais={diaComMaisAtendimento.dia}
                        atendimentosMais ={diaComMaisAtendimento.atendimentos}
                        diaMenos={diaComMenosAtendimento.dia}
                        atendimentosMenos ={diaComMenosAtendimento.atendimentos}
                        mes={atendimentosMesAnterior.ct_mes_anterior}
                        semana={atendimentosSemanaAnterior.ct_semana_anterior}
                    />
                </div>
                <div class="dflex jaround margin-bottom-55">
                    <DashIaraControleUsuarios
                        usuariosCadastrados={usuariosCadastrados.ct_total_usuarios_cadastrados}
                        usuariosAtivos={usuariosAtivos.vw_ct_total_usuarios_solicitaram_atendimento}
                    />
                </div>
                <div class="width-100-porc">
                    <h3 class="txt-center font-size-eighteen"><b>VISUALIZAÇÃO DE PROCURA DE SERVIÇOS</b></h3>
                    <GraficoProcuraServicoIara
                    />
                </div>
            </main>
            <Footer />
        </>
    )
}

export default DashboardIara;