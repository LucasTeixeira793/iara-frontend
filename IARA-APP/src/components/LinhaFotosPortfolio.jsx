import api from "../api";
import { useEffect, useState } from "react";

function LinhaFotosPortfolio(props) {

  const [infoPrestador, setPrestador] = useState([])
  const [infoFotoPortfolio, setFotoPortfolio] = useState([])

  useEffect(() => {
      const infoPrestador = localStorage.dadosUsuario;
      if (infoPrestador) {
          setPrestador(infoPrestador);
      }

      async function buscarFotosPortfolio() {
          const resposta = await api.get(`portifolio/${localStorage.idPrestador}`);
          setFotoPortfolio(resposta.data);
          console.log("OLHA O QUE VEIO DA API!! --- Portfólio", resposta.data)
          console.log(infoFotoPortfolio)
      }
      buscarFotosPortfolio();

  }, [])

const imgTratada = `url(data:image;base64,${infoFotoPortfolio[0]})`

const image = {
  imagemPortfolio: {
    backgroundImage: imgTratada,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "344px",
    width: "480px"
  }
}

  return (
    <>
      <div id="portfolio" class="padding-zero-twenty">
          <div class="padding-zero-twenty" style={image.imagemPortfolio}>
          </div>
      </div>
    </>
  );
}

export default LinhaFotosPortfolio;