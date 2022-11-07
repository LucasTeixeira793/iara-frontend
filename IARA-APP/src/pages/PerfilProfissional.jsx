import CardAgendarAtendimentos from "../components/CardAgendarAtendimento";
import CardInformacoesDoProfissional from "../components/CardInformacoesDoProfissional";
import CardPortifolio from "../components/CardPortifolio";
import CardTabelaDePrecos from "../components/CardTabelaDePrecos";
import Footer from "../components/Footer";
import HeaderCliente from "../components/HearderCliente";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import api from "../api";

function PerfilProfissional() {

    const params = useParams();
    const [objPrestador, setObjPrestador] = useState({ enderecos: [] });

    const [generoCompleto, setGeneroCompleto] = useState("")
    const [domicilio, setDomicilio] = useState("")
    const [estabelecimento, setEstabelecimento] = useState("")

    useEffect(() => {
        const interval = setInterval(() => {
            api.get(`/prestador/${params.id}`).then(res => {
                console.log(res.data);
                setObjPrestador(res.data)
                if (res.data.genero === 'F') {
                    setGeneroCompleto("Feminino");
                }
                else {
                    setGeneroCompleto("Masculino");
                }

                if (res.data.atendeDomicilio === true) {
                    setDomicilio("Domicílio")
                }
                if (res.data.atendeEstabelecimento === true) {
                    setEstabelecimento("Estabelecimento")
                }
            }).catch(erro => {
                console.log(erro)
            })
            return clearInterval(interval);
        }, 200)
    }, []);

    return (
        <>
            <HeaderCliente />
            <main class="margin-top-thirty">
                <div class="container">
                    <CardInformacoesDoProfissional
                        foto={objPrestador.foto}
                        nome={objPrestador.nome}
                        sobrenome={objPrestador.sobrenome}
                        telefone={objPrestador.telefone}
                        genero={generoCompleto}
                        rua={objPrestador.enderecos.length > 0 ? objPrestador.enderecos[0].rua : "Não tem rua"}
                        numero={objPrestador.enderecos.length > 0 ? objPrestador.enderecos[0].numero : "Não tem número"}
                        bairro={objPrestador.enderecos.length > 0 ? objPrestador.enderecos[0].bairro : "Não tem bairro"}
                        cidade={objPrestador.enderecos.length > 0 ? objPrestador.enderecos[0].cidade : "Não tem cidade"}
                        uf={objPrestador.enderecos.length > 0 ? objPrestador.enderecos[0].uf : "Não tem UF"}
                        cep={objPrestador.enderecos.length > 0 ? objPrestador.enderecos[0].cep : "Não tem cep"}
                        complemento={objPrestador.enderecos.length > 0 ? objPrestador.enderecos[0].complemento : "Não tem complem."}
                        raio={objPrestador.distancia}
                        domicilio={domicilio}
                        estabelecimento={estabelecimento}

                    />
                    <div class="dflex jbetween margin-top-thirty">
                        <CardTabelaDePrecos />
                        <CardAgendarAtendimentos />
                    </div>
                    <CardPortifolio />
                </div>
            </main>
            <Footer />
        </>
    );

}

export default PerfilProfissional;