import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import api from "../api";
import logo from '../html-css-template/img/logo-branco.png';
import apiCep from '../apiCep';
import React from 'react';
import 'moment/locale/pt-br';
import moment from 'moment';
import swal from 'sweetalert';
import { set } from 'react-hook-form';

function CadastroDeServico() {

    const [valor, setValor] = useState();
    const [descricao, setDescricao] = useState();
    const [tipo, setTipo] = useState();
    const ativo = true;
    const [duracaoEstimada, setDuracaoEstimada] = useState();
    const [prestador, setPrestador] = useState([]);
    const navigate = useNavigate();
    var id = localStorage.idPrestador;



    // useEffect(() => {

    //     async function buscarInfos() {
    //         const resposta = await api.get(`prestador/${localStorage.idPrestador}`, { headers: { "Access-Control-Allow-Origin": "*" } });
    //         setPrestador(resposta.data);
    //         console.log("OLHA O QUE VEIO DA API!! --- Infos", resposta.data)
    //     }
    //     buscarInfos();

    // }, [])


    function cadastroServico() {



        // api.get(`prestador/${localStorage.idPrestador}`, { headers: { "Access-Control-Allow-Origin": "*" } });
        // setPrestador(resposta.data);


        var jsonServico = {
            idPrestador: id,
            servico: {
                valor: valor,
                descricao: descricao,
                tipo: tipo,
                ativo: ativo,
                duracaoEstimada: duracaoEstimada
            }
        }

        api.post(`servico/`, jsonServico, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).catch(erro => {
            console.log(erro)
        });
        SubmeterFormHabilidade();

    }

    function SubmeterFormHabilidade() {
        // var id = localStorage.idPrestador;

        let jsonHabilidade = {
            idPrestador: id,
            categoria: tipo,
            descricao: tipo
        }

        api.post(`/habilidade/prestador`, jsonHabilidade, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }


    return (
        <body>
            <div class="page dflex acenter jcenter txt-medium">
                <form id="cadastro-cliente" class="container" onSubmit={cadastroServico}>


                    <a class="logo transform prelative margin-special" href=" "
                        onClick={() =>
                            navigate(`accountProfissional/${prestador.id}`)
                        } >
                        <img alt="Logo" src="../img/logo-branco.png" />
                        <span class="subtitulo">CADASTRO</span>
                    </a>


                    <div class="card bg-off-white dflex jbetween fwrap width-70-porc margin-auto">
                        <div class="dflex fwrap astart jbetween width-100-porc">
                            <div class="width-100-porc">
                                <h3 class="txt-19">Cadastrar Servi??os</h3>
                                <div class="dflex jbetween">
                                    <select class="input width-47-porc margin-bottom-15" onChange={evento => setTipo(evento.target.value)}>
                                        <option value="" hidden="true" default="true">Escolha a Categoria</option>
                                        <option value="Corte Cabelo">Corte de Cabelo</option>
                                        <option value="Hidrata????o">Hidrata????o</option>
                                        <option value="Maquiagem">Maquiagem</option>
                                        <option value="Manicure">Manicure</option>
                                        <option value="Design de sobrancelhas">Design de sobrancelhas</option>
                                        <option value="Massagem">Massagem</option>
                                        <option value="Pedicure">Pedicure</option>
                                    </select>
                                    <input class="input width-47-porc margin-bottom-15" placeholder="Descri????o" onChange={evento => setDescricao(evento.target.value)} />
                                </div>
                                <div class="dflex jbetween">
                                    <input type="number" min="1" step="any" placeholder="Pre??o (R$)" class="input width-47-porc" id="input-preco" onChange={evento => setValor(evento.target.value)} />
                                    <input type="text" placeholder="Dura????o" class="input width-47-porc" id="input-duracao-servico" onkeypress="$(this).mask('00:00')" onChange={evento => setDuracaoEstimada(evento.target.value)} />
                                </div>
                                <button type="submit" class="button button-cadastro-profissional txt-white bg-hover-white txt-hover-dark-red txt-18">CADASTRAR</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </body>

    )
}


export default CadastroDeServico;