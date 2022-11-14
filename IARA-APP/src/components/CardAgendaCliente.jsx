import LinhaTabelaAgenda from "../components/LinhaTabelaAgenda";
import api from "../api";
import { useEffect, useState } from "react";
import moment from "moment";
import 'moment/locale/pt-br'

function CardAgendaCliente(props) {

    const [infoAgenda, setAgenda] = useState([])
    const [setCliente] = useState([])

    useEffect(() => {

        async function buscarAgenda() {
            const resposta = await api.get(`servico-atribuido/cliente/${localStorage.idCliente}/ativos`);
            setAgenda(resposta.data);
            console.log("AAAAAAAAAAAAAAAAAAAA", resposta.data);
            
            
        }
        buscarAgenda();
        
    }, [])

    const formHour = new Intl.DateTimeFormat("pt-BR", {
        hour: "numeric",
        minute: "numeric"
    })
    const formDate = new Intl.DateTimeFormat('pt-BR')
    const formCurrency = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    })

    if (infoAgenda.length != 0) {
        return (
            <div class="card prelative width-100-porc">
                <h3 class="txt-bigger txt-center txt-red txt-bold">Agenda de Atendimentos</h3>
                <div class="table red atendimentos">
                    <table>
                        <tr>
                            <th>Serviço</th>
                            <th>Data</th>
                            <th>Horário</th>
                            <th>Valor</th>
                            <th>Profissional</th>
                        </tr>
                        {infoAgenda.map((agenda) => (
                            <LinhaTabelaAgenda
                                tipo={agenda.servico.tipo}
                                dia={agenda.dataHoraInicio.substr(0,10)}
                                horario={agenda.dataHoraInicio.substr(11, 11)}
                                valor={formCurrency.format(agenda.servico.valor)}
                                id = {agenda.servico.prestador}
                            />
                        ))}
                    </table>
                </div>
            </div>

        );
    }
}

export default CardAgendaCliente;