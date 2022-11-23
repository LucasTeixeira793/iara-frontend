import { useEffect, useState } from "react";
import { useParams } from "react-router";
import api from "../api";
import LinhaHorariosPopUp from "./LinhaHorariosPopUp";

function PopUpHorarios() {
    const [modal, setModal] = useState(false);
    const [infoServico, setServico] = useState([])
    const [infoHorario, setHorario] = useState([])
    const params = useParams();

    useEffect(() => {
        async function buscarServicos() {
            const resposta = await api.get(`servico/prestador/${params.id}`, { headers: { "Access-Control-Allow-Origin": "*" } });
            setServico(resposta.data);
            console.log("OLHA O QUE VEIO DA API!! --- Serviços", resposta.data)

            const resposta2 = await api.get(`agenda/disponiveis/${params.id}/${resposta.data[0].id}/23/11/2022`, { headers: { "Access-Control-Allow-Origin": "*" } });
            setHorario(resposta2.data);
            console.log("OLHA O QUE VEIO DA API!! --- HORÁRIOS DO PREST", resposta2.data)
        }
        buscarServicos();
    }, [])

    const toggleModal = () => {
        setModal(!modal)
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    // const horarioTratado = Object.values(infoHorario)
    // const horarioTratadoNovamente = Object.values(horarioTratado)

    // console.log("aaaaaaaaaaaaaa", horarioTratadoNovamente[1][0]);
    // const horarioMaximaTratado = Object.values(infoHorario)

    if (infoHorario.length !== 0) {
        return (
            <>
                <button class="button bg-red txt-white bg-hover-white txt-hover-dark-red margin-auto margin-top-thirty" onClick={toggleModal}>
                    Visualizar horários disponíveis
                </button>
                {modal && (
                    <div className="modal">
                        <div onClick={toggleModal} className="overlay"></div>
                        {infoHorario.map((horarios) => (
                            <LinhaHorariosPopUp
                            // horaInicioMinima={horarioTratadoNovamente[1][0].horaInicioMinima}
                            // horaInicioMaxima={horarioTratadoNovamente[1][0].horaInicioMaxima}
                            />
                        ))}
                    </div>
                )}
            </>
        );
    }
}

export default PopUpHorarios;