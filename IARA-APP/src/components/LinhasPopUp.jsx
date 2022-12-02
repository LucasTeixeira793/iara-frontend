import LinhaServicosPopUp from "./LinhaServicosPopUp";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import api from "../api";

function LinhasPopUp(props) {

    const [infoServico, setServico] = useState([])
    const [infoHorario, setHorario] = useState([])
    const params = useParams();
    const idServico = sessionStorage.getItem("IdSelecionado");

    useEffect(() => {
        async function buscarServicos() {
            const resposta = await api.get(`servico/prestador/${params.id}`, { headers: { "Access-Control-Allow-Origin": "*" } });
            setServico(resposta.data);
            console.log("OLHA O QUE VEIO DA API!! --- Serviços", resposta.data)
            setTimeout(()=>{
                const ano = +sessionStorage.getItem("HorarioSelecionado").substring(0, 4)
                const mes = +sessionStorage.getItem("HorarioSelecionado").substring(5, 7)
                const dia = +sessionStorage.getItem("HorarioSelecionado").substring(8, 10)
                teste(dia,mes,ano)
            }, 100);
        }

        async function teste(dia, mes, ano){
            const resposta2 = await api.get(`agenda/disponiveis/${params.id}/${sessionStorage.getItem("IdSelecionado")}/${dia}/${mes}/${ano}`, { headers: { "Access-Control-Allow-Origin": "*" } });
            setHorario(resposta2.data.horarios);
            console.log("OLHA O QUE VEIO DA API!! --- HORÁRIOS DO PREST", resposta2.data.horarios)
        }
        buscarServicos();
    }, [])

    if (infoHorario.length !== 0) {
        return (
            <>
                <div className="modal-content">
                    <LinhaServicosPopUp
                        horaInicioMinima={infoHorario[0].horaInicioMinima}
                        horaInicioMaxima={infoHorario[0].horaInicioMaxima}
                    />

                </div>
            </>
        );
    }
}

export default LinhasPopUp;