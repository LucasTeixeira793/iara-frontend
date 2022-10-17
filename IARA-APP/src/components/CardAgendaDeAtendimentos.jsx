import LinhaTabelaAgenda from "../components/LinhaTabelaAgenda";
import api from "../api";
import { useEffect, useState } from "react";

function CardAgendaDeAtendimentos() {

    const [infoAgenda, setAgenda] = useState([])
    const [setPrestador] = useState([])

    useEffect(() => {
        const infoPrestador = localStorage.dadosUsuario;
        if (infoPrestador) {
            setPrestador(infoPrestador);
        }
        async function buscarAgenda() {
            const resposta = await api.get(`agenda/${localStorage.idPrestador}`);
            setAgenda(resposta.data);
            console.log("OLHA O QUE VEIO DA API!! --- Agenda", resposta.data)
        }
        buscarAgenda();
    }, [])

    return (
        <div class="card half prelative">
            <h3 class="txt-bigger txt-center txt-red txt-bold">Agenda de Atendimentos</h3>
            <div class="table red atendimentos">
                <table>
                    <tr>
                        <th>Serviço</th>
                        <th>Dia</th>
                        <th>Horário</th>
                        <th>Data</th>
                        <th>Cliente</th>
                    </tr>
                    {infoAgenda.map((agenda) => (
                        <LinhaTabelaAgenda
                            tipo={agenda.servicoAtribuido.servico.tipo}
                            dia={agenda.data}
                            horario={agenda.horaInicio}
                            data={agenda.data}
                            nomeCliente={agenda.servicoAtribuido.cliente.nome}
                            sobrenomeCliente={agenda.servicoAtribuido.cliente.sobrenome}
                        />
                    ))}
                </table>
            </div>
        </div>

    );
}

export default CardAgendaDeAtendimentos;