import 'moment/locale/pt-br';
import moment from 'moment';
import { useEffect, useState } from "react";
import LinhaServicosAgendar from "../components/LinhaServicosAgendar";
import LinhaHorariosAgendar from "../components/LinhaHorariosAgendar";
import api from "../api";
import { useParams } from "react-router";
import PopUpHorarios from './PopUpHorarios';
import React from 'react';

function CardAgendarAtendimentos() {

    const [infoServico, setServico] = useState([])
    const params = useParams();
    

    useEffect(() => {
        sessionStorage.setItem("HorarioSelecionado", "")
        sessionStorage.setItem("IdSelecionado", "")
        sessionStorage.setItem("ServicoSelecionado", "")


        async function buscarServicos() {
            const resposta = await api.get(`servico/prestador/${params.id}`, { headers: { "Access-Control-Allow-Origin": "*" } });
            setServico(resposta.data);
            console.log("OLHA O QUE VEIO DA API!! --- Serviços", resposta.data)
        }
        buscarServicos();
    }, [])

    function submitServico(e) {
        e.preventDefault();

        let jsonCliente = {
            idServico: sessionStorage.getItem("IdSelecionado"),
            dataInicio: sessionStorage.getItem("HorarioSelecionado"),
            observacoes: " "
        }

        if(sessionStorage.getItem("HorarioSelecionado") != "" && sessionStorage.getItem("ServicoSelecionado") != ""){
            api.post(`/servico-atribuido/${params.id}`, jsonCliente, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(
                console.log(sessionStorage.getItem("ServicoSelecionado"), sessionStorage.getItem("HorarioSelecionado")),
                setIsAlertVisible(true),
                setTimeout(() => {
                          setIsAlertVisible(false);
                        }, 5000)
            )
        } else {
            setIsMessageVisible(true);
            setTimeout(() => {
                setIsMessageVisible(false);
              }, 3000)
        }
    }

    const [ isAlertVisible, setIsAlertVisible ] = React.useState(false);
    const [ isMessageVisible, setIsMessageVisible ] = React.useState(false);

    return (
        <div class="card half prelative">
            {isAlertVisible && <div className='alert-container'>
               <div id="mensagem_agendamento" class="pabsolute dflex acenter jcenter mensagem show"> {/*}classe show para mostrar mensagem*/}
                <div class="txt-bold txt-bigger margin-bottom-thirty txt-dark-red" id="titulo_mensagem_agendamento">Agendado com Sucesso!</div>
                <div class="margin-bottom-10 txt-bold">Serviço: {sessionStorage.getItem("ServicoSelecionado")}<span id="servico_mensagem_agendamento"></span></div>
                <div class="margin-bottom-10 txt-bold">Data: {sessionStorage.getItem("HorarioSelecionado").substring(0,10).split('-').reverse().join('/')}<span id="data_mensagem_agendamento"></span></div>
                <div class="txt-bold">Horário: {sessionStorage.getItem("HorarioSelecionado").substring(11,16)}<span id="horario_mensagem_agendamento"></span></div>
            </div>
           </div>}
            <h3 class="txt-bigger txt-center txt-red txt-bold">Agendar Atendimentos</h3>
            <form>
                <div>
                    <h4 class="margin-bottom-10">Selecione o Serviço:</h4>
                    <div class="dflex fwrap">
                        {infoServico.map((servicos) => (
                            <LinhaServicosAgendar
                                id={servicos.id}
                                tipo={servicos.descricao}
                            />
                        ))}
                    </div>
                </div>
                <div>
                    <PopUpHorarios />
                </div>
                <div>
                    <br />
                    <h4 class="margin-bottom-10">Selecione o dia e horário desejados:</h4>
                    <div class="dflex fwrap">
                        <LinhaHorariosAgendar />
                    </div>
                </div>
                <button class="button bg-red txt-white bg-hover-white txt-hover-dark-red margin-auto margin-top-thirty"
                    type="submit" onClick={submitServico}>
                    AGENDAR
                </button>
                        {isMessageVisible && <div className='message-container'>
                        <div class="alert-agendar" id="titulo_alerta_agendamento">Selecione todas as opções!</div>
                        </div>}
            </form>
        </div>
    );

}

export default CardAgendarAtendimentos;
