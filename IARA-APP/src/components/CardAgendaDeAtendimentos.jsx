import LinhaAgendaPrestador from "../components/LinhaTabelaAgendaPrestador";
import api from "../api";
import { useEffect, useState } from "react";
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
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
            console.log(localStorage.dadosUsuario);
            const resposta = await api.get(`agenda/${localStorage.idPrestador}`);
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

    if (infoAgenda === "") {
        return "";
    } else {
        return (
            <div class="card half prelative">
                <Link to={"/AtualizarAgenda"}>
                    <a class="btn-editar-perfil pabsolute bg-hover-white txt-hover-dark-red transform">
                        <FontAwesomeIcon icon={faPen} />
                    </a>
                </Link>
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
                            <LinhaAgendaPrestador
                                id={infoAgenda.id}
                                tipo={agenda.servicoAtribuido.servico.tipo}
                                dia={agenda.data}
                                horario={agenda.horaInicio}
                                valor={formCurrency.format(agenda.servicoAtribuido.servico.valor)}
                            />
                        ))}
                    </table>
                </div>
            </div>

        );
    }
}

export default CardAgendaDeAtendimentos;