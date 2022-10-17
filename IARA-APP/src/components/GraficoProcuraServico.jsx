import React from "react";
import { Chart } from "react-google-charts";

function GraficoProcuraServicos() {

    const data = ([
        ['Serviço', 'Quantidade'],
        ['Corte', 27],
        ['Escova', 12],
        ['Permanente', 10],
        ['Tintura', 6]
    ]);

    const options = {
        title: 'VISUALIZAÇÃO DE PROCURA DE SERVIÇOS',
        titlePosition: 'none',
        colors: ['#de0235', '#E3466B', '#ab0229', '#6e031c'],
        backgroundColor: 'transparent',
        legend: { position: 'bottom', textStyle: { fontSize: 17 } },
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
            data={data}
            height={"400px"}
        />
    )

}

export default GraficoProcuraServicos;