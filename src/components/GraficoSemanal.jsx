import { Chart } from "react-google-charts";
import React, { useEffect, useState } from "react";
import api from "../api";

function GraficoSemanal() {

    const [dataGraficoSemanal, setDataGraficoSemanal] = useState([['Dia da Semana', 'Quantidade'],])
    var japassou;
    useEffect(() => {
        if (japassou != 0) {
            api.get(`/view/grafico/contagem/semana-atual/prestador?idPrestador=${localStorage.idPrestador}`).then(async (response) => {
                console.log(response.data);
                response.data.forEach(element => {
                    setDataGraficoSemanal((x) => [
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

    const options = {
        title: 'Número de Atendimentos por Dia da Semana',
        titlePosition: 'none',
        vAxis: { title: '' },
        hAxis: { title: 'Dias da Semana' },
        seriesType: 'bars',
        series: { 1: { type: 'line' } },
        colors: ['#de0235', '#ab0229'],
        lineWidth: 3,
        legend: { position: 'bottom', alignment: 'start' },
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
                data={dataGraficoSemanal}
                height={"350px"}
            />
    )

}

export default GraficoSemanal;