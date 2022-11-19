import { useState, useEffect } from "react";
import CarrosselCategorias from "../components/CarrosselCategorias";
import CarrosselProfissionais from "../components/CarrosselProfissionais";
import Footer from "../components/Footer";
import Header from "../components/Header";
import api from "../api";
import Slider from "react-slick";
import { GoChevronRight } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";
import CarrosselPropaganda from "../components/CarrosselPropaganda";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [profissionais, setProfissionais] = useState([]);

  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: false,
    nextArrow: <GoChevronRight color="white" />,
    prevArrow: <GoChevronLeft color="white" />
  };

  async function selecionarCategoria(idCategoria) {
    const resposta = await api.get(`categoria/prestador/${idCategoria}`, { headers: { "Access-Control-Allow-Origin": "*" } });
    setProfissionais(resposta.data);
    console.log("OLHA O QUE VEIO DA API!!", resposta.data)
  }

  async function selecionarProfissionais(idCategoria) {
    const resposta = await api.get(`categoria/prestador/${idCategoria}`, { headers: { "Access-Control-Allow-Origin": "*" } });
    setProfissionais(resposta.data);
    console.log("OLHA O QUE VEIO DA API!!", resposta.data)
  }

  return (
    <>
      <Header />
      <main class="margin-top-thirty">
        <div class="container">
          <CarrosselPropaganda />
          <CarrosselCategorias funcaoCategoria={selecionarCategoria} />
          <div id="profissionais" class="profissionais">
            <Slider {...settings}>
              {profissionais.map((profissional) => (
                <CarrosselProfissionais
                  id={profissional.id}
                  nome={profissional.nome}
                  sobrenome={profissional.sobrenome}
                  distancia={profissional.distancia + " KM"}
                  avaliacao={4}
                  foto={profissional.foto}
                />
              ))}
            </Slider>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
export default Home;