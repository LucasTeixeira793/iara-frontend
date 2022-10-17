import { Chart } from "react-google-charts";
import React from "react";

function GraficoSemanalIara() {

    var data = [
        ['Dia da Semana', 'Quantidade'],
        ['Domingo', 2780],
        ['Segunda', 623],
        ['Terça', 754],
        ['Quarta', 1250],
        ['Quinta', 1346],
        ['Sexta', 2450],
        ['Sábado', 3109]
    ];

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