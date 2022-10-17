import React from "react";
import { Chart } from "react-google-charts";

function GraficoProcuraServicoIara() {

    var data = [
        ['Serviço', 'Quantidade'],
        ['Corte', 964],
        ['Escova', 453],
        ['Permanente', 356],
        ['Tintura', 521],
        ['Limpeza de Pele', 367],
        ['Massagem', 462],
        ['Depilação', 478],
        ['Design de Unhas', 674],
        ['Maquiagem para Festa', 547]
    ];

    var options = {
        title: 'VISUALIZAÇÃO DE PROCURA DE SERVIÇOS',
        titlePosition: 'none',
        colors: ['#de0235', '#E3466B', '#ab0229', '#6e031c'],
        backgroundColor: 'transparent',
        legend: { position: 'rigth', textStyle: { fontSize: 17 } },
        pieHole: 0.45,
        chartArea: {
            top: 40,
            right: 40,
            bottom: 50,
            left: 50,
            height: '1000px',
            width: '100%'
        }
    }

    return(
        
        <Chart
            chartType='PieChart'
            options={options}
            data={data}
            height={"400px"}
        />
    )

}

export default GraficoProcuraServicoIara;