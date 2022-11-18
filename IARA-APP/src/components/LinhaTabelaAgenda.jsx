import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api";

function LinhaAgenda(props) {

  
  const [infoAgenda, setAgenda] = useState([])
  const [infoIdPrestador, setIdPrestador] = useState([])
  

    useEffect(() => {
        async function buscarAgenda() {
          const resposta = await api.get(`agenda/${props.id}`);
          setAgenda(resposta.data);
          console.log("OLHA O QUE VEIO DA API!! --- Agenda", resposta.data)
          
          const resposta2 = await api.get(`prestador/${resposta.data[0].servicoAtribuido.cliente.id}`); 
          setIdPrestador(resposta2.data)
          console.log("OLHA O QUE VEIO DA API!! --- AgendaCliente", resposta2.data)
      }
     
      buscarAgenda();
      }, [])

  const navigate = useNavigate();

  return (
    <>
      <tr>
        <td><span class="button bg-red txt-white margin-none pointer-none">{props.tipo}</span></td>
        <td><span class="button bg-red txt-white margin-none pointer-none">{props.dia.split('-').reverse().join('/')}</span></td>
        <td><span class="button bg-red txt-white margin-none pointer-none">{props.horario}</span></td>
        <td><span class="button bg-red txt-white margin-none pointer-none">{props.valor}</span></td>
        <td><span class="button bg-red margin-none bg-hover-white">
          <u>
            <a
             onClick={() =>
              navigate(`perfilProfissional/${props.id}`)
            }
            class="txt-white txt-hover-dark-red"
            >
            {infoIdPrestador.nome} {infoIdPrestador.sobrenome}
            </a>
          </u></span></td>
      </tr>
    </>
  );
}

export default LinhaAgenda;