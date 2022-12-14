import logo from '../html-css-template/img/logo-branco.png';
import React, { useState, useEffect } from 'react';
import api from "../api";
import { GoTrashcan } from "react-icons/go";
import SelectCategoria from './SelectCategoria';
import { Link } from 'react-router-dom';


function CadastroDeHabilidades(props) {

    const [categoria, setCategoria] = useState("");
    const [infoPrestador, setPrestador] = useState([]);
    const [descricao, setDescricao] = useState("");
    const [id, setId] = useState();

    const [domingo, setDomingo] = useState(false);
    const [segunda, setSegunda] = useState(false);
    const [terca, setTerca] = useState(false);
    const [quarta, setQuarta] = useState(false);
    const [quinta, setQuinta] = useState(false);
    const [sexta, setSexta] = useState(false);
    const [sabado, setSabado] = useState(false);

    function agenda(){
        alert("entrei")
        if(segunda === true){
            var seg = 0;    
        }
        alert("segunda "+ seg);
        alert("segunda "+ segunda)

        
        if(terca === true){
            setTerca(2);
        }else{
            setTerca();
        }

        if(quarta === true){
            setQuarta(3);
        }else{
            setQuarta();
        }

        if(quinta === true){
            setQuinta(4);
        }else{
            setQuinta();
        }

        if(sexta === true){
            setSexta(5);
        }else{
            setSexta();
        }

        if(sabado === true){
            setSabado(6);
        }else{
            setSabado();
        }
    }

    useEffect(() => {
        const infoPrestador = localStorage.dadosUsuario;
        if (infoPrestador) {
            setPrestador(infoPrestador);
        }

        async function buscarInfos() {
            const resposta = await api.get(`prestador/${localStorage.idPrestador}`, { headers: { "Access-Control-Allow-Origin": "*" } });
            setPrestador(resposta.data);
            setId(resposta.data.id)
            console.log("OLHA O QUE VEIO DA API!! --- Infos", resposta.data)
            console.log("Prestador: " + infoPrestador)
        }
        buscarInfos();

    }, [])

    useEffect(() => {
        try {
            api.get("categoria/", { headers: { "Access-Control-Allow-Origin": "*" } }).then((resposta) => {

                console.log(resposta.data)
                setCategoria(resposta.data)
            })
        } catch (erro) {
            console.error(erro);
        }

    }, [])

    function SubmeterFormHabilidade(evento) {
        agenda();

    //     evento.preventDefault();

    //     let jsonHabilidade = {
    //         idPrestador: parseInt(id),
    //         categoria: categoria,
    //         descricao: descricao
    //     }

    //     api.post(`/habilidade/prestador`, jsonHabilidade, {
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     });

    // function CadastrarAgenda(){

    //     let jsonAgenda = {
            
    //     }
    // }

    }
    return (
        <div class="page dflex acenter jcenter txt-medium">
            <form id="cadastro-cliente" class="container" onSubmit={SubmeterFormHabilidade}>
                <div href="" class="logo transform prelative">
                    <Link to={'/escolhaCadastro'} >
                            <img src={logo} />
                            <span class="subtitulo">CADASTRO</span>
                    </Link>
                </div>
                <h2>Cadastro Profissional</h2>
                <div class="card bg-off-white low-shadow dflex jbetween fwrap">
                    <div class="dflex fwrap astart jaround width-100-porc">
                        <div class="width-50-margin-20">
                            <h3>Cadastrar Servi??os</h3>
                            <div class="dflex fwrap jbetween">
                                <select class="input width-50-margin-10 margin-bottom-15" onChange={evento => setCategoria(evento.target.value)}>
                                    <option value="" hidden="true" default="true">Escolha a Categoria</option>
                                    <option value="Corte Cabelo">Corte de Cabelo</option>
                                    <option value="Hidrata????o">Hidrata????o</option>
                                    <option value="Maquiagem">Maquiagem</option>
                                    <option value="Manicure">Manicure</option>
                                    <option value="Design de sobrancelhas">Design de sobrancelhas</option>
                                    <option value="Massagem">Massagem</option>
                                    <option value="Pedicure">Pedicure</option>
                                </select>
                                {/* <select class="input width-50-margin-10 margin-bottom-15"  onChange={evento => setDescricao(evento.target.value)}>
                                    <option value="" hidden="true" default="true">Escolha a Especialidade</option>
                                    <option value="Corte Cabelo">Corte Cabelo</option>
                                    <option value="Hidrata????o">Hidrata????o</option>
                                    <option value="Maquiagem">Maquiagem</option>
                                    <option value="Manicure">Manicure</option>
                                    <option value="Design de sobrancelhas">Design de sobrancelhas</option>
                                    <option value="Massagem">Massagem</option>
                                    <option value="Pedicure">Pedicure</option>
                                </select> */}
                                <input type="number" min="1" step="any" placeholder="Pre??o (R$)" id="input-preco" class="input width-50-margin-10 margin-bottom-15" />
                                <input type="text" placeholder="Dura????o" class="input width-50-margin-10" id="input-duracao-servico" onkeypress="$(this).mask('00:00')" />
                            </div>
                            <button type="submit" class="button button-cadastro-profissional txt-white bg-hover-white txt-hover-dark-red">CADASTRAR</button>
                        </div>
                        <div class="width-50-margin-20">
                            <h3>Servi??os Cadastrados</h3>
                            <div class="table">
                                <table>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <button type="button" class="trash">

                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <button type="button" class="trash">

                                            </button>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="separador"></div>
                    <div class="dflex fwrap astart jaround width-100-porc">
                        <div class="width-50-margin-20">
                            <h3>Dias de Atendimento</h3>
                            <div class="dflex fwrap">
                                <label class="label-checkbox">
                                    <input type="checkbox" name="Segunda-Feira" value={0}  onChange={evento => setSegunda(!segunda)}/>
                                    <div class="checkmark"></div>
                                    <span>Segunda-Feira</span>
                                </label>
                                <label class="label-checkbox">
                                    <input type="checkbox" name="Ter??a-Feira" />
                                    <div class="checkmark"></div>
                                    <span>Ter??a-Feira</span>
                                </label>
                                <label class="label-checkbox">
                                    <input type="checkbox" name="Quarta-Feira" />
                                    <div class="checkmark"></div>
                                    <span>Quarta-Feira</span>
                                </label>
                                <label class="label-checkbox">
                                    <input type="checkbox" name="Quinta-Feira" />
                                    <div class="checkmark"></div>
                                    <span>Quinta-Feira</span>
                                </label>
                                <label class="label-checkbox">
                                    <input type="checkbox" name="Sexta-Feira" />
                                    <div class="checkmark"></div>
                                    <span>Sexta-Feira</span>
                                </label>
                                <label class="label-checkbox">
                                    <input type="checkbox" name="S??bado" />
                                    <div class="checkmark"></div>
                                    <span>S??bado</span>
                                </label>
                                <label class="label-checkbox">
                                    <input type="checkbox" name="Domingo" />
                                    <div class="checkmark"></div>
                                    <span>Domingo</span>
                                </label>
                            </div>
                        </div>
                        <div class="width-50-margin-20">
                            <h3 class="margin-bottom-10">Hor??rio de Atendimento</h3>
                            <div class="dflex acenter jbetween margin-bottom-15">
                                <input type="text" placeholder="Dura????o" class="input width-40-porc" id="atendimento-inicial" onkeypress="$(this).mask('00:00')" />
                                <span>at??</span>
                                <input type="text" placeholder="Dura????o" class="input width-40-porc" id="atendimento-final" onkeypress="$(this).mask('00:00')" />
                            </div>
                            <h3 class="margin-bottom-10">Hor??rio de Pausa</h3>
                            <div class="dflex acenter jbetween">
                                <input type="text" placeholder="Dura????o" class="input width-40-porc" id="pausa-inicial" onkeypress="$(this).mask('00:00')" />
                                <span>at??</span>
                                <input type="text" placeholder="Dura????o" class="input width-40-porc" id="pausa-final" onkeypress="$(this).mask('00:00')" />
                            </div>
                        </div>
                    </div>
                    <div class="separador"></div>
                    <div class="dflex fwrap astart jaround width-100-porc margin-bottom-neg-30">
                        <div class="width-50-margin-20">
                            <h3>Prefer??ncia de Atendimento</h3>
                            <div class="dflex fwrap">
                                <label class="label-checkbox wide">
                                    <input type="checkbox" id="checkbox-estabelecimento" name="Estabelecimento Pr??prio" />
                                    <div class="checkmark"></div>
                                    <span>Estabelecimento Pr??prio</span>
                                </label>
                                <label class="label-checkbox wide">
                                    <input type="checkbox" id="checkbox-domicilio" name="Em Domic??lio" />
                                    <div class="checkmark"></div>
                                    <span>Em Domic??lio</span>
                                </label>
                            </div>
                        </div>
                        <div class="width-50-margin-20">
                            <h3 class="margin-bottom-10">Raio de Atentimento em Domic??lio</h3>
                            <div class="dflex jbetween">
                                <div id="div-range" class="range-parent width-100-porc disabled">
                                    <input type="number" min="1" max="100" step="any" placeholder="Raio de 0 Km at?? 100 Km" class="input width-50-margin-10" id="range" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="dflex acenter jbetween">
                    <Link to={"/perfilProfissionalColaborador"}>
                        <a href="cadastroDados.html" class="button bg-dark-red txt-white bg-hover-white txt-hover-dark-red shadow-smooth">
                            <i class="fa-solid fa-arrow-left-long margin-right-5"></i>
                            VOLTAR
                        </a>
                    </Link>
                    <button type="submit" class="button bg-dark-red txt-white bg-hover-white txt-hover-dark-red shadow-smooth">CADASTRAR</button>
                </div>
            </form>
        </div>

    );
}

export default CadastroDeHabilidades;
