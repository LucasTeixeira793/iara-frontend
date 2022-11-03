import foto from "../html-css-template/img/img-prof-default.png";
import { useNavigate } from "react-router-dom";
function CarrosselProfissionais(props) {
  const navigate = useNavigate();
  return (
    <>
      <div class="item">
        <div class="card bg-dark-red txt-white txt-center">
          <img src={foto} />
          <div class="nome">
            <b>{props.nome}</b>
            <br />
            {props.habilidade}
          </div>
          <div class="distancia">{props.distancia}</div>
          <div
            class="avaliacao"
            data-aval={`${props.avaliacao} estrelas`}
          >
            {props.avaliacao} estrelas
          </div>
          <button
            onClick={() =>
              navigate(`perfilProfissional/${props.id}`)
            }
            class="button bg-white txt-dark-red bg-hover-dark-red txt-hover-white"
            href=" "
          >
            AGENDAR
          </button>
        </div>
      </div>
      {console.log("resposta " +  props.id)}
    </>
  );
}

export default CarrosselProfissionais;