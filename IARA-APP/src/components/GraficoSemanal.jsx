import { Chart } from "react-google-charts";
import React from "react";

function GraficoSemanal() {

    const data = [
        ['Dia da Semana', 'Semana Atual', 'Semana Anterior'],
        ['Domingo', 7, 5],
        ['Segunda', 1, 0],
        ['Terça', 2, 1],
        ['Quarta', 3, 4],
        ['Quinta', 6, 8],
        ['Sexta', 12, 10],
        ['Sábado', 16, 19]
    ]

    const options = {
        title: 'Número de Atendimentos em comparação com a semana anterior',
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
                data={data}
                height={"350px"}
            />
    )

}

export default GraficoSemanal;