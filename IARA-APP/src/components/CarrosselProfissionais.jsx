import foto from "../html-css-template/img/img-prof-default.png";
import { useNavigate } from "react-router-dom";
//import fotoPadrao from "../html-css-template/img/foto-padrao.png";
function CarrosselProfissionais(props) {
  const navigate = useNavigate();
  var fotoTratada;
  if (props.foto !== null) {
    fotoTratada = `url("data:image;base64,${props.foto}")`
  }
  else {
    fotoTratada = `url("${foto}")`
  }
  const image = {

    imagemPortfolio: {
      backgroundImage: fotoTratada,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      width: "78px",
      borderRadius: "50%",
      marginBottom: "3%",
      marginLeft: "27%"

    }
  }

  return (
    <>
      <div class="item">
        <div class="card bg-dark-red txt-white txt-center">
          <div style={image.imagemPortfolio} alt="Foto de perfil" class="height-85 margin-right-twenty" />
          <div class="nome">
            <b>{props.nome}</b>
            <br />
            {props.sobrenome}
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
      {console.log("resposta " + props.id)}
    </>
  );
}

export default CarrosselProfissionais;