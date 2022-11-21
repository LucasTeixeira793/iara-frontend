import 'moment/locale/pt-br';
import moment from 'moment';
import { useEffect, useState } from "react";
import LinhaServicosAgendar from "../components/LinhaServicosAgendar";
import LinhaHorariosAgendar from "../components/LinhaHorariosAgendar";
import api from "../api";
import { useParams } from "react-router";
import PopUpHorarios from './PopUpHorarios';

function CardAgendarAtendimentos() {

    const [infoServico, setServico] = useState([])
    const params = useParams();

    useEffect(() => {
        async function buscarServicos() {
            const resposta = await api.get(`servico/prestador/${params.id}`, { headers: { "Access-Control-Allow-Origin": "*" } });
            setServico(resposta.data);
            console.log("OLHA O QUE VEIO DA API!! --- Serviços", resposta.data)
        }
        buscarServicos();
    }, [])

    return (
        <div class="card half prelative">
            <div id="mensagem_agendamento" class="pabsolute dflex acenter jcenter mensagem"> {/*}classe show para mostrar mensagem*/}
                <div class="txt-bold txt-bigger margin-bottom-thirty txt-dark-red" id="titulo_mensagem_agendamento">Agendado com Sucesso!</div>
                <div class="margin-bottom-10 txt-medium">Serviço: <span id="servico_mensagem_agendamento"></span></div>
                <div class="margin-bottom-10 txt-medium">Data: <span id="data_mensagem_agendamento"></span></div>
                <div class="txt-medium">Horário: <span id="horario_mensagem_agendamento"></span></div>
            </div>
            <h3 class="txt-bigger txt-center txt-red txt-bold">Agendar Atendimentos</h3>
            <form>
                <div>
                    <h4 class="margin-bottom-10">Selecione o Serviço:</h4>
                    <div class="dflex fwrap">
                        {infoServico.map((servicos) => (
                            <LinhaServicosAgendar
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
                <button class="button bg-red txt-white bg-hover-white txt-hover-dark-red margin-auto margin-top-thirty" type="submit">AGENDAR</button>
            </form>
        </div>
    );

}

export default CardAgendarAtendimentos;
