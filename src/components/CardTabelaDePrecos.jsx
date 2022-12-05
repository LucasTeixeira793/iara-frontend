import LinhaTabelaPrecos from "../components/LinhaTabelaPrecos";
import api from "../api";
import { useEffect, useState } from "react";
import 'moment/locale/pt-br'
import { useParams } from "react-router";

function CardTabelaDePrecos() {

    const [infoPreco, setPreco] = useState([])
    const params = useParams();

    useEffect(() => {
        async function buscarPrecos() {
            const resposta = await api.get(`servico/prestador/${params.id}`);
            setPreco(resposta.data);
            console.log("OLHA O QUE VEIO DA API!! --- Preços", resposta.data)
            console.log(infoPreco)
        }
        buscarPrecos();
    }, [])

    const formCurrency = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    })

    if (infoPreco === null) {
        return (
            <div>Vazio</div>
        );
    } else {
        return (
            <div class="card half prelative">
                <h3 class="txt-bigger txt-center txt-red txt-bold">Tabela de Preços</h3>
                {infoPreco.map((precos) => (
                    <LinhaTabelaPrecos
                        tipo={precos.tipo}
                        descricao={precos.descricao}
                        duracao={precos.duracaoEstimada}
                        preco={formCurrency.format(precos.valor)}
                    />
                ))}
            </div>
        );
    }


}

export default CardTabelaDePrecos;