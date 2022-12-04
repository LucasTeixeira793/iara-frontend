import React, { useEffect } from "react";
import { useState } from "react";
import { Chart } from "react-google-charts";
import api from "../api";

function GraficoProcuraServicos() {

    const [graficoProcuraServico, setGraficoProcuraServico] = useState([["Serviço", "Quantidade"],]);
    var japassou;
    useEffect(() => {
        if (japassou != 0) {
            const interval = setInterval(() => {
                SetGraficoProcuraServico();
                function SetGraficoProcuraServico() {
                    setGraficoProcuraServico([["Serviço", "Quantidade"]])
                    api.get(`/view/grafico/procura/30dias/prestador?prestadorId=${localStorage.idPrestador}`).then((resposta) => {
                        resposta.data.forEach((element) => {
                            setGraficoProcuraServico(x => [
                                ...x,
                                [
                                    element.tipo,
                                    element.atendimentos
                                ],
                            ]
                            );
                        })
                        console.log(resposta)
                    }).catch(erro => {
                        console.log(erro)
                    })
                }

                return clearInterval(interval);
            }, 400)
            japassou = 0;
        }
    }, []);

    const options = {
        title: 'VISUALIZAÇÃO DE PROCURA DE SERVIÇOS',
        titlePosition: 'none',
        colors: ['#de0235', '#E3466B', '#ab0229', '#6e031c', '#800000', '#8B0000', '#B22222', '#A52A2A'],
        backgroundColor: 'transparent',
        legend: { position: 'bottom', textStyle: { fontSize: 12 } },
        is3D: true,
        chartArea: {
            top: 40,
            right: 40,
            bottom: 50,
            left: 50,
            height: '1000px',
            width: '100%'
        }
    }
    return (

        <Chart
            chartType='PieChart'
            options={options}
            data={graficoProcuraServico}
            height={"400px"}
        />
    )

}

export default GraficoProcuraServicos;