import logo from '../html-css-template/img/logo-branco.png';
import api from "../api";
import apiCep from '../apiCep';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import 'moment/locale/pt-br';
import moment from 'moment';
import swal from 'sweetalert';
import { set } from 'react-hook-form';


function ViaCep() {
    var cep = document.getElementById("input-cep").value;
    apiCep.get(`/${cep}/json`).then((resposta) => {
        console.log(resposta)
        document.getElementById("input-cidade").value = resposta.data.localidade;
        document.getElementById("input-logradouro").value = resposta.data.logradouro;
        document.getElementById("input-bairro").value = resposta.data.bairro;
        document.getElementById("input-uf").value = resposta.data.uf;
    })
}

function CadastroInformacoesPessoaisProfissional() {

    const maskTelefone = (value) => {
        return value
            .replace(/\D/g, "")
            .replace(/^(\d{2})(\d)/g, "($1) $2")
            .replace(/(\d)(\d{4})$/, "$1-$2");
    };

    const maskCPF = (value) => {
        return value
            .replace(/\D/g, "")
            .replace(/^(\d{3})/g, "$1.")
            .replace(/(\d{3})(\d{3})/g, "$1.$2-");
    };

    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [cpf, setCpf] = useState('');
    const [dataNasc, setDataNasc] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaVerificacao, setSenhaVerificacao] = useState('');
    const [telefone, setTelefone] = useState('');
    const [genero, setGenero] = useState('F');
    const [cep, setCep] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState(null);
    const [atendeDomicilio, setAtendeDomicilio ] = useState(false);
    const [atendeEstabelecimento, setAtendeEstabelecimento] = useState(false);
    const [categoria, setCategoria] = useState('');
    const [distancia, setDistancia] = useState();
    const [diasDaSemana, setDiasDaSemana] = useState([]);
    const [atendimentoInicial, setAtendimentoInicial] = useState('');
    const [atendimentoFim, setAtendimentoFim] = useState('');
    const [pausaInicial, setPausaInicial] = useState('');
    const [pausaFim, setPausaFim] = useState('');
    const [domingo, setDomingo] = useState(false);
    const [segunda, setSegunda] = useState(false);
    const [terca, setTerca] = useState(false);
    const [quarta, setQuarta] = useState(false);
    const [quinta, setQuinta] = useState(false);
    const [sexta, setSexta] = useState(false);
    const [sabado, setSabado] = useState(false);



    const diaSemana = [];

    // function SetDiasDaSemana(name){
    //     console.log(name)
    // }

    const navigate = useNavigate();

    function SubmeterFormProfissional(evento) {

        evento.preventDefault();

        let jsonCliente = {
            nome: nome,
            sobrenome: sobrenome,
            cpf: cpf,
            dataNasc: dataNasc,
            email: email,
            senha: senha,
            telefone: telefone,
            genero: genero,
            atendeDomicilio: atendeDomicilio,
            atendeEstabelecimento: atendeEstabelecimento,
            distancia: distancia
        }
        console.log('-------' + jsonCliente)
        if (senha !== senhaVerificacao) {
            alert("As senhas devem ser iguais!");
        } else {
            api.post('/prestador', jsonCliente, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((resposta) => {
                AssociarEndereco(resposta.data.id);
                SubmeterAgenda(resposta.data.id)
                // SubmeterFormHabilidade(resposta.data.id);
            });
            //navigate("/sucessoCadastro");
            console.log
            (
                "dom: " + domingo +
                " seg: " + segunda +
                " ter: " + terca +
                " qua: " + quarta +
                " qui: " + quinta +
                " sex: " + quarta +
                " sab: " + sabado 
            )
        }

    }

    function SubmeterAgenda(id){

        if(segunda === true){
            var seg = 0;
        }

        if(terca === true){
            var ter = 1;
        }

        if(quarta === true){
            var qua = 2;
        }
        
        if(quinta === true){
            var qui = 3;
        }

        if(sexta === true){
            var sex = 4;
        }

        if(sabado === true){
            var sab = 5;
        }

        
        if(domingo === true){
            var dom = 6;
        }

        let jsonAgenda = {
            idPrestador: id ,
            diasDaSemana: 
            [
                seg,
                ter,
                qua,
                qui,
                sex,
                sab,
                dom
            ],
            horaInicioTrabalho: atendimentoInicial,
            horaFimTrabalho: atendimentoFim,
            horaInicioPausa: pausaInicial,
            horaFimPausa: pausaFim
          }
          alert(diasDaSemana)
          console.log(jsonAgenda);

        api.post(`agenda/intervalos`, jsonAgenda, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    console.log(domingo)
    function AssociarEndereco(id) {
        let jsonEndereco = {
            cep: cep,
            numero: numero,
            complemento: complemento
        }
        console.log(jsonEndereco);

        api.post(`/prestador/endereco/${id}`, jsonEndereco, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    function SubmeterFormHabilidade(id) {

        // evento.preventDefault();

        let jsonHabilidade = {
            idPrestador: id,
            categoria: categoria,
            descricao: categoria
        }

        api.post(`/habilidade/prestador`, jsonHabilidade, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    function guardaDias(valor){
        console.log(valor);

    }

    return (
        <>
            <div class="page dflex acenter jcenter txt-medium">
                <form id="cadastro-cliente" class="container" onSubmit={SubmeterFormProfissional}>
                    <div class="logo transform prelative">
                        <Link to={'/escolhaCadastro'} >
                            <img src={logo} />
                            <span class="subtitulo">CADASTRO</span>
                        </Link>
                    </div>
                    <h2>Dados Pessoais</h2>
                    <div class="card bg-off-white low-shadow dflex jbetween fwrap">
                        <div class="user-input-wrp width-4 input-group">
                            <input
                                type="text"
                                class="input"
                                id="input-nome"
                                required
                                onChange={evento => setNome(evento.target.value)}
                            />
                            <label class="user-label">Nome</label>
                        </div>
                        <div class="user-input-wrp width-4 input-group">
                            <input
                                type="text"
                                class="input"
                                id="input-sobrenome"
                                required
                                onChange={evento => setSobrenome(evento.target.value)}
                            />
                            <label class="user-label">Sobrenome</label>
                        </div>
                        <div class="user-input-wrp width-4 input-group">
                            <select
                                name="select-genero"
                                type="text"
                                class="input"
                                id="input-genero"
                                required
                                value={genero}
                                onChange={evento => setGenero(evento.target.value)}
                            >
                                <option value="" hidden="true" default="true"></option>
                                <option value="F"> Feminino </option>
                                <option value="M"> Masculino</option>
                                <option value="O">Outro</option>
                            </select>
                            <label class="user-label">Gênero</label>
                        </div>
                        <div class="user-input-wrp width-4 input-group">
                            <input
                                type="date"
                                class="input"
                                id="input-nascimento"
                                max={moment().format("YYYY-MM-DD")}
                                required
                                onChange={evento => setDataNasc(evento.target.value)}
                            // onkeypress="$(this).mask('00/00/0000')
                            />
                            <label class="user-label">Data de Nascimento</label>
                        </div>
                        <div class="user-input-wrp width-4 input-group">
                            <input
                                type="text"
                                class="input"
                                id="input-cpf"
                                maxLength="14"
                                required
                                value={cpf}
                                onChange={evento => setCpf(maskCPF(evento.target.value))}
                                mask='000.000.000-00'
                            // onkeypress="$(this).mask('000.000.000-00')"
                            />
                            <label class="user-label">CPF</label>
                        </div>
                        <div class="user-input-wrp width-4 input-group">
                            <input
                                type="text"
                                class="input"
                                id="input-telefone"
                                value={telefone}
                                required
                                onChange={evento => setTelefone(maskTelefone(evento.target.value))}
                                maxLength="15"
                                mask='(00) 00000-0000'
                            />
                            <label class="user-label">Telefone</label>
                        </div>
                    </div>
                    <h2>Endereço</h2>
                    <div class="card bg-off-white low-shadow dflex jbetween fwrap">
                        <div class="user-input-wrp width-4 input-group">
                            <input
                                onKeyUp={ViaCep}
                                type="text"
                                class="input"
                                id="input-cep"
                                required
                                onChange={e => setCep(e.target.value)}
                                maxLength="8" />
                            <label class="user-label">CEP</label>
                        </div>
                        <div class="width-8"></div>
                        <div class="user-input-wrp width-5 input-group">
                            <input
                                type="text"
                                class="input"
                                required
                                id="input-logradouro" />
                            <label class="user-label">Logradouro</label>
                        </div>
                        <div class="user-input-wrp width-2 input-group">
                            <input
                                type="text"
                                class="input"
                                id="input-numero"
                                maxLength="5"
                                required
                                onChange={e => setNumero(e.target.value)} />
                            <label class="user-label">Número</label>
                        </div>
                        <div class="user-input-wrp width-5 input-group">
                            <input
                                type="text"
                                class="input"
                                id="input-complemento"
                                onChange={e => setComplemento(e.target.value)} />
                            <label class="user-label">Complemento</label>
                        </div>
                        <div class="user-input-wrp width-5 input-group">
                            <input
                                type="text"
                                class="input"
                                required
                                id="input-bairro" />
                            <label class="user-label">Bairro</label>
                        </div>
                        <div class="user-input-wrp width-5 input-group">
                            <input
                                type="text"
                                class="input"
                                required
                                id="input-cidade" />
                            <label class="user-label">Cidade</label>
                        </div>
                        <div class="user-input-wrp width-2 input-group">
                            <input
                                type="text"
                                class="input"
                                id="input-uf"
                                maxlength="2"
                                required
                                oninput="this.value = this.value.toUpperCase()" />
                            <label class="user-label">UF</label>
                        </div>
                    </div>
                    <h2>Cadastro Profissional</h2>
                    <div class="card bg-off-white low-shadow dflex jbetween fwrap">
                        <div class="dflex fwrap astart jaround width-100-porc">
                            <div class="width-50-margin-20">
                                <h3>Cadastrar Serviços</h3>
                                <div class="dflex fwrap jbetween">
                                    <select class="input width-100-margin-10 margin-bottom-15" onChange={evento => setCategoria(evento.target.value)}>
                                        <option value="" hidden="true" default="true">Escolha a Categoria</option>
                                        <option value="Corte Cabelo">Corte de Cabelo</option>
                                        <option value="Hidratação">Hidratação</option>
                                        <option value="Maquiagem">Maquiagem</option>
                                        <option value="Manicure">Manicure</option>
                                        <option value="Design de sobrancelhas">Design de sobrancelhas</option>
                                        <option value="Massagem">Massagem</option>
                                        <option value="Pedicure">Pedicure</option>
                                    </select>
                                    <input type="number" min="1" step="any" placeholder="Preço (R$)" id="input-preco" class="input width-50-margin-10 margin-bottom-15" />
                                    <input type="text" placeholder="Duração" class="input width-50-margin-10" id="input-duracao-servico" onkeypress="$(this).mask('00:00')" />
                                </div>
                                <button type="submit" class="button button-cadastro-profissional txt-white bg-hover-white txt-hover-dark-red">CADASTRAR</button>
                            </div>
                            <div class="width-50-margin-20">
                                <h3>Serviços Cadastrados</h3>
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
                                        <input type="checkbox" name="Segunda-Feira"  onChange={evento => setSegunda(!segunda)}/>
                                        <div class="checkmark"></div>
                                        <span>Segunda-Feira</span>
                                    </label>
                                    <label class="label-checkbox">
                                        <input type="checkbox" name="Terça-Feira"  onChange={evento => setTerca(!terca)}/>
                                        <div class="checkmark"></div>
                                        <span>Terça-Feira</span>
                                    </label>
                                    <label class="label-checkbox">
                                        <input type="checkbox" name="Quarta-Feira"  onChange={evento => setQuarta(!quarta)}/>
                                        <div class="checkmark"></div>
                                        <span>Quarta-Feira</span>
                                    </label>
                                    <label class="label-checkbox">
                                        <input type="checkbox" name="Quinta-Feira"  onChange={evento => setQuinta(!quinta)}/>
                                        <div class="checkmark"></div>
                                        <span>Quinta-Feira</span>
                                    </label>
                                    <label class="label-checkbox">
                                        <input type="checkbox" name="Sexta-Feira"  onChange={evento => setSexta(!sexta)}/>
                                        <div class="checkmark"></div>
                                        <span>Sexta-Feira</span>
                                    </label>
                                    <label class="label-checkbox">
                                        <input type="checkbox" name="Sábado"  onChange={evento => setSabado(!sabado)}/>
                                        <div class="checkmark"></div>
                                        <span>Sábado</span>
                                    </label>
                                    <label class="label-checkbox">
                                        <input type="checkbox" name="Domingo"  onClick={evento => setDomingo(!domingo)}/>
                                        <div class="checkmark"></div>
                                        <span>Domingo</span>
                                    </label>
                                </div>
                            </div>
                            <div class="width-50-margin-20">
                                <h3 class="margin-bottom-10">Horário de Atendimento</h3>
                                <div class="dflex acenter jbetween margin-bottom-15">
                                    <input type="text" placeholder="Duração" class="input width-40-porc" id="atendimento-inicial" onkeypress="$(this).mask('00:00')" onChange={evento => setAtendimentoInicial(evento.target.value)} />
                                    <span>até</span>
                                    <input type="text" placeholder="Duração" class="input width-40-porc" id="atendimento-final" onkeypress="$(this).mask('00:00')"   onChange={evento => setAtendimentoFim(evento.target.value)}/>
                                </div>
                                <h3 class="margin-bottom-10">Horário de Pausa</h3>
                                <div class="dflex acenter jbetween">
                                    <input type="text" placeholder="Duração" class="input width-40-porc" id="pausa-inicial" onkeypress="$(this).mask('00:00')" onChange={evento => setPausaInicial(evento.target.value)} />
                                    <span>até</span>
                                    <input type="text" placeholder="Duração" class="input width-40-porc" id="pausa-final" onkeypress="$(this).mask('00:00')" onChange={evento => setPausaFim(evento.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div class="separador"></div>
                        <div class="dflex fwrap astart jaround width-100-porc margin-bottom-neg-30">
                            <div class="width-50-margin-20">
                                <h3>Preferência de Atendimento</h3>
                                <div class="dflex fwrap">
                                    <label class="label-checkbox wide">
                                        <input type="checkbox" id="checkbox-estabelecimento" name="Estabelecimento Próprio"  onChange={evento => setAtendeDomicilio(!atendeDomicilio)}/>
                                        <div class="checkmark"></div>
                                        <span>Estabelecimento Próprio</span>
                                    </label>
                                    <label class="label-checkbox wide">
                                        <input type="checkbox" id="checkbox-domicilio" name="Em Domicílio" onChange={evento => setAtendeEstabelecimento(!atendeEstabelecimento)}/>
                                        <div class="checkmark"></div>
                                        <span>Em Domicílio</span>
                                    </label>
                                </div>
                            </div>
                            <div class="width-50-margin-20">
                                <h3 class="margin-bottom-10">Raio de Atentimento em Domicílio</h3>
                                <div class="dflex jbetween">
                                    <div id="div-range" class="range-parent width-100-porc disabled">
                                        <input type="number" min="1" max="100" step="any" placeholder="Raio de 0 Km até 100 Km" class="input width-50-margin-10" id="range"  onChange={evento => setDistancia(evento.target.value)}  />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2>Autenticação</h2>
                    <div class="card bg-off-white low-shadow dflex jbetween fwrap">
                        <div class="user-input-wrp width-4 input-group">
                            <input
                                type="email"
                                class="input"
                                id="input-email"
                                required
                                onChange={evento => setEmail(evento.target.value)}
                            />
                            <label class="user-label">E-mail</label>
                        </div>
                        <div class="user-input-wrp width-4 input-group">
                            <input
                                type="password"
                                class="input"
                                required
                                onChange={evento => setSenha(evento.target.value)}
                                id="input-senha"
                            />
                            <label class="user-label">Senha</label>
                        </div>
                        <div class="user-input-wrp width-4 input-group">
                            <input
                                type="password"
                                class="input"
                                required
                                id="input-confirmar-senha"
                                onChange={evento => setSenhaVerificacao(evento.target.value)}
                            />
                            <label class="user-label">Confirmar Senha</label>
                        </div>
                    </div>
                    <button type="submit" class="button bg-dark-red txt-white bg-hover-white txt-hover-dark-red align-right shadow-smooth">CADASTRAR</button>
                </form>
            </div>
        </>
    )
}
export default CadastroInformacoesPessoaisProfissional;
