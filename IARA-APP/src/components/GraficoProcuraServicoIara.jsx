import React from "react";
import { Chart } from "react-google-charts";
import api from "../api";

function GraficoProcuraServicoIara() {
    SetGraficoProcuraServicoIara();
    var graficoProcuraServicoIara = [];
    function SetGraficoProcuraServicoIara(){
        api.get(`view/servico/contagem`).then(resposta => {
            graficoProcuraServicoIara=[ ['Serviço', 'Quantidade']]
            console.log(resposta.data);
            for (let index = 0; index < resposta.data.length; index++) {
                graficoProcuraServicoIara.push([resposta.data[index].servico, resposta.data[index].ct_atendimentos])
            }
            // console.log(vetor);
            // setGraficoProcuraServicoIara(vetor);
            console.log(graficoProcuraServicoIara);
        }).catch(erro => {
            console.log(erro)
        })

    }
    
    var data = graficoProcuraServicoIara;
    console.log(data);

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