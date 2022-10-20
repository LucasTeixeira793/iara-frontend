import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api";

function LinhaAgenda(props) {

  const [infoCliente, setCliente] = useState([])
  const [infoAgenda, setAgenda] = useState([])

    useEffect(() => {
        const infoCliente = localStorage.dadosUsuario;
        if (infoCliente) {
            setCliente(infoCliente);
        }
        async function buscarAgenda() {
          const resposta = await api.get(`agenda/${localStorage.idPrestador}`);
          setAgenda(resposta.data);
          console.log("OLHA O QUE VEIO DA API!! --- Agenda", resposta.data)
      }
      buscarAgenda();
      }, [])

  const navigate = useNavigate();

  return (
    <>
      <tr>
        <td><span class="button bg-red txt-white margin-none pointer-none">{props.tipo}</span></td>
        <td><span class="button bg-red txt-white margin-none pointer-none">{props.dia}</span></td>
        <td><span class="button bg-red txt-white margin-none pointer-none">{props.horario}</span></td>
        <td><span class="button bg-red txt-white margin-none pointer-none">{props.valor}</span></td>
        <td><span class="button bg-red margin-none bg-hover-white">
          <u>
            <a 
             onclick={() =>
                 navigate(`/perfilCliente/${infoAgenda.servicoAtribuido.cliente.id}`)
             }
            class="txt-white txt-hover-dark-red"
            >
            {props.nomeCliente} {props.sobrenomeCliente}
            </a>
          </u></span></td>
      </tr>
    </>
  );
}

export default LinhaAgenda;