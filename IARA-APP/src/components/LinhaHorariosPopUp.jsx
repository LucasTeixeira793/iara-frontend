import LinhaServicosPopUp from "./LinhaServicosPopUp";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import api from "../api";

function LinhaHorariosPopUp(props) {

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
        <>
            <div className="modal-content">
                {infoServico.map((servicos) => (
                    <LinhaServicosPopUp
                    servico={servicos.descricao}
                    />
                ))}
                {props.horaInicioMinima} - {props.horaInicioMaxima}
            </div>
        </>
    );

}

export default LinhaHorariosPopUp;