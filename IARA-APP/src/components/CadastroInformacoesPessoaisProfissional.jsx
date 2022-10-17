import logo from '../html-css-template/img/logo-branco.png';
import api from "../api";
import apiCep from '../apiCep';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';


function ViaCep(){
    var cep = document.getElementById("input-cep").value;
    apiCep.get(`/${cep}/json`).then((resposta) => {
        console.log(resposta)
        document.getElementById("input-cidade").value=resposta.data.localidade;
        document.getElementById("input-logradouro").value=resposta.data.logradouro;
        document.getElementById("input-bairro").value=resposta.data.bairro;
        document.getElementById("input-uf").value=resposta.data.uf;
    })
}

function CadastroInformacoesPessoaisProfissional() {

    const maskTelefone = (value) => {
        return value
            .replace(/\D/g, "")
            .replace(/^(\d{2})(\d)/g, "($1) $2")
            .replace(/(\d)(\d{4})$/, "$1-$2");
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

    const atendeDomicilio = false;
    const atendeEstabelecimento = false;
    const distancia = 0;


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
        if (senha !== senhaVerificacao) {
            alert("As senhas devem ser iguais!");
        } else {
            SubmeterFormEndereco();
            api.post('/prestador', jsonCliente, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((resposta) => {
                AssociarEndereco(resposta.data.id);           
            });
            navigate("/sucessoCadastro");
        }

    }

    function SubmeterFormEndereco() {
        let jsonEndereco = {
            cep: cep,
            numero: numero,
            complemento: complemento
        }

        if (senha !== senhaVerificacao) {
            alert("As senhas devem ser iguais!");
        } else {
            api.post('/endereco', jsonEndereco, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
        
    }

    function AssociarEndereco(id) {
        alert(id);
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


    return (
        <>
            <div class="page dflex acenter jcenter txt-medium">
                <form id="cadastro-cliente" class="container" onSubmit={SubmeterFormProfissional}>
                    <Link to={'/escolhaCadastro'} >
                        <div class="logo transform prelative">
                            <img src={logo} />
                            <span class="subtitulo">CADASTRO</span>
                        </div>
                    </Link>
                    <h2>Dados Pessoais</h2>
                    <div class="dflex jbetween fwrap">
                        <div class="user-input-wrp width-4 input-group">
                            <input
                                type="text"
                                class="input"
                                id="input-nome"
                                onChange={evento => setNome(evento.target.value)}
                            />
                            <label class="user-label">Nome</label>
                        </div>
                        <div class="user-input-wrp width-4 input-group">
                            <input
                                type="text"
                                class="input"
                                id="input-sobrenome"
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
                                value={genero}
                                onChange={evento => setGenero(evento.target.value)}
                            >
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
                                maxLength="11"
                                onChange={evento => setCpf(evento.target.value)}
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
                                onChange={evento => setTelefone(maskTelefone(evento.target.value))}
                                maxLength="15"
                                mask='(00) 00000-0000'
                            />
                            <label class="user-label">Telefone</label>
                        </div>
                    </div>
                    <h2>Endereço</h2>
                    <div class="dflex jbetween fwrap" onSubmit={SubmeterFormEndereco}>
                        <div class="user-input-wrp width-4 input-group">
                            <input
                                onKeyUp={ViaCep}
                                type="text"
                                class="input"
                                id="input-cep"
                                onChange={e => setCep(e.target.value)}
                                maxLength="8" />
                            <label class="user-label">CEP</label>
                        </div>
                        <div class="width-8"></div>
                        <div class="user-input-wrp width-5 input-group">
                            <input
                                type="text"
                                class="input"
                                id="input-logradouro" />
                            <label class="user-label">Logradouro</label>
                        </div>
                        <div class="user-input-wrp width-2 input-group">
                            <input
                                type="text"
                                class="input"
                                id="input-numero"
                                maxLength="5"
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
                                id="input-bairro" />
                            <label class="user-label">Bairro</label>
                        </div>
                        <div class="user-input-wrp width-5 input-group">
                            <input
                                type="text"
                                class="input"
                                id="input-cidade" />
                            <label class="user-label">Cidade</label>
                        </div>
                        <div class="user-input-wrp width-2 input-group">
                            <input
                                type="text"
                                class="input"
                                id="input-uf"
                                maxlength="2"
                                oninput="this.value = this.value.toUpperCase()" />
                            <label class="user-label">UF</label>
                        </div>
                    </div>
                    <h2>Autenticação</h2>
                    <div class="dflex jbetween fwrap">
                        <div class="user-input-wrp width-4 input-group">
                            <input
                                type="text"
                                class="input"
                                id="input-email"
                                onChange={evento => setEmail(evento.target.value)}
                            />
                            <label class="user-label">E-mail</label>
                        </div>
                        <div class="user-input-wrp width-4 input-group">
                            <input
                                type="password"
                                class="input"
                                onChange={evento => setSenha(evento.target.value)}
                                id="input-senha"
                            />
                            <label class="user-label">Senha</label>
                        </div>
                        <div class="user-input-wrp width-4 input-group">
                            <input
                                type="password"
                                class="input"
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
