import { Chart } from "react-google-charts";
import React, { useEffect } from "react";
import { useState } from "react";
import api from "../api";

function GraficoSemanalIara() {

    const [data, setData] = useState([['Dia da Semana', 'Quantidade'],])
    var japassou;
    useEffect(() => {
        if (japassou != 0) {
            api.get("/view/grafico/contagem/semana-atual").then(async (response) => {
                console.log(response.data);
                response.data.forEach(element => {
                    setData((x) => [
                        ...x,
                        [
                            element.diaSemana,
                            element.qtdServicos
                        ],
                    ]);
                });
            });
            japassou = 0;
        }
    }, []);

    var options = {
        title: 'Número de Atendimentos por Dia da Semana',
        titlePosition: 'none',
        vAxis: { title: '' },
        hAxis: { title: 'Dias da Semana' },
        seriesType: 'bars',
        colors: ['#de0235', '#ab0229'],
        legend: { position: 'none', alignment: 'start' },
        backgroundColor: '#fbfbfb',
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
            chartType='ColumnChart'
            options={options}
            data={data}
            height={"350px"}
        />
    )
}

export default GraficoSemanalIara;