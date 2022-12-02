import { useEffect, useState } from "react";
import { useParams } from "react-router";
import api from "../api";
import LinhasPopUp from "./LinhasPopUp";

function LinhaHorariosAgendar() {

    const [modal, setModal] = useState(false);
    const [infoServico, setServico] = useState([])
    const [infoHorario, setHorario] = useState([])
    const params = useParams();
    const idServico = sessionStorage.getItem("IdSelecionado");

    const toggleModal = (e) => {
        setModal(!modal)
        e.preventDefault()
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    function chamarHorario() {

        sessionStorage.setItem("HorarioSelecionado", document.getElementById("idHorario").value)

    }

    return (
        <>
            <div class="prelative margin-right-twenty margin-bottom-10" >
                <input type="datetime-local" class="bg-almost-white input max-content" id="idHorario" onBlur={chamarHorario} />
            </div>
            <div onChange={toggleModal} className="overlay"></div>
            <LinhasPopUp />
        </>
    );

}

export default LinhaHorariosAgendar;