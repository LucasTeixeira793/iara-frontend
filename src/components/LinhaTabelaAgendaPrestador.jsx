import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api";

function LinhaAgendaPrestador(props) {


  const [infoAgenda, setAgenda] = useState([])
  const [infoIdPrestador, setIdPrestador] = useState([])


  useEffect(() => {
    async function buscarAgenda() {
      const resposta = await api.get(`agenda/${localStorage.idPrestador}`);
      setAgenda(resposta.data);
      console.log("OLHA O QUE VEIO DA API!! --- Agenda", resposta.data)

      const resposta2 = await api.get(`prestador/${resposta.data[0].servicoAtribuido.cliente.id}`);
      setIdPrestador(resposta2.data)
      console.log("OLHA O QUE VEIO DA API!! --- AgendaCliente", resposta2.data)
      console.log("aaaaaaaaaaaaa", infoAgenda[0].servicoAtribuido.cliente.nome);
    }

    buscarAgenda();
  }, [])

  const navigate = useNavigate();

  if (infoAgenda.length !== 0) {
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
                  navigate(`/perfilCliente/${infoAgenda.servicoAtribuido.cliente.id}`)
                }
                class="txt-white txt-hover-dark-red"
              >
                {infoAgenda[0].servicoAtribuido.cliente.nome} {infoAgenda[0].servicoAtribuido.cliente.sobrenome}
              </a>
            </u></span></td>
        </tr>
      </>
    );
  }
}

export default LinhaAgendaPrestador;