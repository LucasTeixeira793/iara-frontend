import { useEffect, useState } from "react";
import { useParams } from "react-router";
import api from "../api";
import LinhasPopUp from "./LinhasPopUp";

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
        }
        buscarServicos();
    }, [])

    const toggleModal = (e) => {
        setModal(!modal)
        e.preventDefault()
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    if (infoServico.length !== 0) {
        return (
            <>
                <button class="button bg-red txt-white bg-hover-white txt-hover-dark-red margin-auto margin-top-thirty" onClick={toggleModal} >
                    Visualizar horários disponíveis
                </button>
                {modal && (
                    <div className="modal">
                        <div onClick={toggleModal} className="overlay"></div>
                        <LinhasPopUp />
                    </div>
                )}
            </>
        );
    }
}


export default PopUpHorarios;