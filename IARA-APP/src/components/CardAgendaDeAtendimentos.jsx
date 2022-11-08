import LinhaTabelaAgenda from "../components/LinhaTabelaAgenda";
import api from "../api";
import { useEffect, useState } from "react";
import moment from "moment";
import 'moment/locale/pt-br'

function CardAgendaDeAtendimentos() {

    const [infoAgenda, setAgenda] = useState([])

    useEffect(() => {
        // const infoPrestador = localStorage.dadosUsuario;
        // if (infoPrestador) {
        //     setPrestador(infoPrestador);
        // }
        async function buscarAgenda() {
            console.log(localStorage.dadosUsuario.id);
            const resposta = await api.get(`agenda/${localStorage.dadosUsuario.id}`);
            setAgenda(resposta.data);
            console.log("OLHA O QUE VEIO DA API!! --- Agenda", resposta.data)
            //console.log("OLHA O QUE VEIO DA API!! --- Agendaaaa", resposta)
        }
        buscarAgenda();
    }, [])

    const date = new Intl.DateTimeFormat('pt-BR').format(infoAgenda.data)
    const formCurrency = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    })

    if (infoAgenda === null) {
        return (
            <div>Vazio</div>
        );
    } else {
        return (
            <div class="card half prelative">
                <h3 class="txt-bigger txt-center txt-red txt-bold">Agenda de Atendimentos</h3>
                <div class="table red atendimentos">
                    <table>
                        <tr>
                            <th>Serviço</th>
                            <th>Data</th>
                            <th>Horário</th>
                            <th>Valor</th>
                            <th>Cliente</th>
                        </tr>
                        {infoAgenda.map((agenda) => (
                            <LinhaTabelaAgenda
                                tipo={agenda.servicoAtribuido.servico.tipo}
                                dia={date}
                                horario={agenda.horaInicio}
                                valor={formCurrency.format(agenda.servicoAtribuido.servico.valor)}
                                nomeCliente={agenda.servicoAtribuido.cliente.nome}
                                sobrenomeCliente={agenda.servicoAtribuido.cliente.sobrenome}
                            />
                        ))}
                    </table>
                </div>
            </div>

        );
    }
}

export default CardAgendaDeAtendimentos;