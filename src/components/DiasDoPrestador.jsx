import { useEffect, useState } from "react";
import { useParams } from "react-router";
import api from "../api";
import LinhaDiasDoPrestador from "./LinhaDiasDoPrestador";

function DiasDoPrestador() {
    const [infoDias, setDias] = useState([])
    const params = useParams();

    useEffect(() => {
        async function buscarDiasDeTrabalho() {
            const resposta = await api.get(`agenda/dias-trabalho/${params.id}`, { headers: { "Access-Control-Allow-Origin": "*" } });
            setDias(resposta.data);
            console.log("OLHA O QUE VEIO DA API!! --- Dias de trabalho do Prestador", resposta.data)
        }
        buscarDiasDeTrabalho();
    }, [])

    return (
        <>
            <div class="prelative margin-right-twenty margin-bottom-10" >
                <LinhaDiasDoPrestador
                    diasDisponiveis={infoDias}
                />
            </div>
        </>
    );

}


export default DiasDoPrestador;