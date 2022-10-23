import LinhaTabelaAgenda from "../components/LinhaTabelaAgenda";
import api from "../api";
import { useEffect, useState } from "react";
import moment from "moment";
import 'moment/locale/pt-br'

function CardAgendaCliente() {

    const [infoAgenda, setAgenda] = useState([])
    const [infoIdPrestador, setIdPrestador] = useState([])
    const [setCliente] = useState([])

    useEffect(() => {
        const infoCliente = localStorage.dadosUsuario;
        if (infoCliente) {
            setCliente(infoCliente);
        }
        
        async function buscarAgenda() {
            const resposta = await api.get(`servico-atribuido/cliente/${localStorage.idCliente}/ativos`);
            setAgenda(resposta.data);
            const resposta2 = await api.get(`prestador/${resposta.data[0].servico.prestador}`);
            setIdPrestador(resposta2.data)
            console.log("OLHA O QUE VEIO DA API!! --- Agenda", resposta.data)
        }
        buscarAgenda();
    }, [])

    const date = new Intl.DateTimeFormat('pt-BR').format(infoAgenda.data)
    const formCurrency = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    })

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
                            dia={date}
                            horario={agenda.horaInicio}
                            valor={formCurrency.format(agenda.servico.valor)}
                            nomeCliente={infoIdPrestador.nome}
                            sobrenomeCliente={infoIdPrestador.sobrenome}
                        />
                    ))}
                </table>
            </div>
        </div>

    );
}

export default CardAgendaCliente;