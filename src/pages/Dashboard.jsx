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


    const [d90, setD90] = useState([{ contagemUltimos90Dias: 0 }]);
    const [d30, setD30] = useState([{ contagemUltimos30Dias: 0 }]);
    const [d7, setD7] = useState([{ contagemUltimos7Dias: 0 }]);
    const [horaComMaisAtendimento, setHoraComMaisAtendimento] = useState([{ hora: "", qtdAtendimentos: 0 }]);
    const [horaComMenosAtendimento, setHoraComMenosAtendimento] = useState([{ hora: "", qtdAtendimentos: 0 }]);
    const [diaComMaisAtendimento, setDiaComMaisAtendimento] = useState([{ dia: "", atendimentos: 0 }])
    const [diaComMenosAtendimento, setDiaComMenosAtendimento] = useState([{ dia: "", atendimentos: 0 }])
    const [servicoMaisAtendimento, setServicoMaisAtendimento] = useState([{ tipo: "", agendamentos: 0 }]);
    const [servicoMenosAtendimento, setServicoMenosAtendimento] = useState([{ tipo: "", agendamentos: 0 }]);

    useEffect(() => {
        const interval = setInterval(() => {
            Set90Dias();
            Set30Dias();
            Set7Dias();
            SetHoraComMaisAtendimento();
            SetHoraComMenosAtendimento();
            SetDiaComMaisAtendimento();
            SetDiaComMenosAtendimento();
            SetServicoMaisAtendimento();
            SetServicoMenosAtendimento();

            function Set90Dias() {
                api.get(`/view/agendamento/contagem/90dias/prestador?idPrestador=${localStorage.idPrestador}`).then(d90 => {
                    setD90(d90.data);
                }).catch(erro => {
                    console.log(erro)
                })
            }

            function Set30Dias() {
                api.get(`/view/agendamento/contagem/30dias/prestador?idPrestador=${localStorage.idPrestador}`).then(d30 => {
                    setD30(d30.data);
                }).catch(erro => {
                    console.log(erro)
                })
            }

            function Set7Dias() {
                api.get(`/view/agendamento/contagem/7dias/prestador?idPrestador=${localStorage.idPrestador}`).then(d7 => {
                    setD7(d7.data);
                }).catch(erro => {
                    console.log(erro)
                })
            }

            function SetHoraComMaisAtendimento() {
                api.get(`/view/atendimento/hora/${localStorage.idPrestador}/maior`).then(resposta => {
                    setHoraComMaisAtendimento(resposta.data);
                }).catch(erro => {
                    console.log(erro)
                })
            }

            function SetHoraComMenosAtendimento() {
                api.get(`/view/atendimento/hora/${localStorage.idPrestador}/menor`).then(resposta => {
                    setHoraComMenosAtendimento(resposta.data);
                }).catch(erro => {
                    console.log(erro)
                })
            }


            function SetDiaComMaisAtendimento() {
                api.get(`/view/agendamento/dia/maior?idPrestador=${localStorage.idPrestador}`).then(resposta => {
                    // console.log(resposta.data);
                    setDiaComMaisAtendimento(resposta.data);
                }).catch(erro => {
                    console.log(erro)
                })
            }

            function SetDiaComMenosAtendimento() {
                api.get(`/view/agendamento/dia/menor?idPrestador=${localStorage.idPrestador}`).then(resposta => {
                    // console.log(resposta.data);
                    setDiaComMenosAtendimento(resposta.data);
                }).catch(erro => {
                    console.log(erro)
                })
            }

            function SetServicoMaisAtendimento() {
                api.get(`view/servico/contagem/maior/30dias?prestadorId=${localStorage.idPrestador}`).then(resposta => {
                    console.log(resposta.data);
                    setServicoMaisAtendimento(resposta.data);
                }).catch(erro => {
                    console.log(erro)
                })
            }


            function SetServicoMenosAtendimento() {
                api.get(`/view/servico/contagem/menor/30dias?prestadorId=${localStorage.idPrestador}`).then(resposta => {
                    console.log(resposta.data);
                    setServicoMenosAtendimento(resposta.data);
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
                            d90dias={d90[0].contagemUltimos90Dias}
                            d30dias={d30[0].contagemUltimos30Dias}
                            d7dias={d7[0].contagemUltimos7Dias}
                        />
                    </div>
                </div>
                <div class="dflex jbetween margin-bottom-110">
                    <DashCardRelatorioAtendimentos
                        horaMais={horaComMaisAtendimento.hora}
                        atendimentosHoraMais={horaComMaisAtendimento.qtdAtendimentos}
                        horaMenos={horaComMenosAtendimento.hora}
                        atendimentosHoraMenos={horaComMenosAtendimento.qtdAtendimentos}
                        diaMais={diaComMaisAtendimento.dia}
                        atendimentosMais={diaComMaisAtendimento.atendimentos}
                        diaMenos={diaComMenosAtendimento.dia}
                        atendimentosMenos={diaComMenosAtendimento.atendimentos}
                    />
                </div>
                <div class="dflex jbetween margin-bottom-80">
                    <DashCardServicoAtendimentos
                        tipoMais={servicoMaisAtendimento.tipo}
                        agendamentosMais={servicoMaisAtendimento.agendamentos}
                        tipoMenos={servicoMenosAtendimento.tipo}
                        agendamentosMenos={servicoMenosAtendimento.agendamentos}

                    />
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