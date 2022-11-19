import logo from '../html-css-template/img/logo-branco.png';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import api from "../api";

function CadastroAgenda() {

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
    const [prestador, setPrestador] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        async function buscarInfos() {
            const resposta = await api.get(`prestador/${localStorage.idPrestador}`, { headers: { "Access-Control-Allow-Origin": "*" } });
            setPrestador(resposta.data);
            console.log("OLHA O QUE VEIO DA API!! --- Infos", resposta.data)
        }
        buscarInfos();

    }, [])


    function SubmeterAgenda() {
        var id = prestador.id;

        if (segunda === true) {
            var seg = 0;
        }

        if (terca === true) {
            var ter = 1;
        }

        if (quarta === true) {
            var qua = 2;
        }

        if (quinta === true) {
            var qui = 3;
        }

        if (sexta === true) {
            var sex = 4;
        }

        if (sabado === true) {
            var sab = 5;
        }


        if (domingo === true) {
            var dom = 6;
        }

        let jsonAgenda = {
            idPrestador: id,
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
        console.log(jsonAgenda);

        api.post(`agenda/intervalos`, jsonAgenda, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }


    return (
        <div class="page dflex acenter jcenter txt-medium">
            <form id="cadastro-cliente" class="container" onSubmit={SubmeterAgenda()}>
                <a href=" " class="logo transform prelative margin-special"
                    onClick={() =>
                        navigate(`accountProfissional/${prestador.id}`)
                    }
                >
                    <img src={logo} />
                    <span class="subtitulo">CADASTRO</span>
                </a>

                <div class="card bg-off-white dflex jbetween fwrap width-75-porc margin-auto">
                    <h2 class="not-bold">Atualizar Agenda</h2>
                    <div class="dflex fwrap astart jbetween width-100-porc">

                        <div class="width-50-porc">
                            <h3>Dias de Atendimento</h3>
                            <div class="dflex fwrap">
                                <label class="label-checkbox">
                                    <input type="checkbox" name="Segunda-Feira" onChange={evento => setSegunda(!segunda)} />
                                    <div class="checkmark"></div>
                                    <span>Segunda-Feira</span>
                                </label>
                                <label class="label-checkbox">
                                    <input type="checkbox" name="Terça-Feira" onChange={evento => setTerca(!terca)} />
                                    <div class="checkmark"></div>
                                    <span>Terça-Feira</span>
                                </label>
                                <label class="label-checkbox">
                                    <input type="checkbox" name="Quarta-Feira" onChange={evento => setQuarta(!quarta)} />
                                    <div class="checkmark"></div>
                                    <span>Quarta-Feira</span>
                                </label>
                                <label class="label-checkbox">
                                    <input type="checkbox" name="Quinta-Feira" onChange={evento => setQuinta(!quinta)} />
                                    <div class="checkmark"></div>
                                    <span>Quinta-Feira</span>
                                </label>
                                <label class="label-checkbox">
                                    <input type="checkbox" name="Sexta-Feira" onChange={evento => setSexta(!sexta)} />
                                    <div class="checkmark"></div>
                                    <span>Sexta-Feira</span>
                                </label>
                                <label class="label-checkbox">
                                    <input type="checkbox" name="Sábado" onChange={evento => setSabado(!sabado)} />
                                    <div class="checkmark"></div>
                                    <span>Sábado</span>
                                </label>
                                <label class="label-checkbox">
                                    <input type="checkbox" name="Domingo" onClick={evento => setDomingo(!domingo)} />
                                    <div class="checkmark"></div>
                                    <span>Domingo</span>
                                </label>
                            </div>
                        </div>
                        <div class="width-50-porc">
                            <h3 class="margin-bottom-10">Horário de Atendimento</h3>
                            <div class="dflex acenter jbetween margin-bottom-15">
                                <input type="text" placeholder="Duração" class="input width-40-porc" id="atendimento-inicial" onkeypress="$(this).mask('00:00')" onChange={evento => setAtendimentoInicial(evento.target.value)} />
                                <span>até</span>
                                <input type="text" placeholder="Duração" class="input width-40-porc" id="atendimento-final" onkeypress="$(this).mask('00:00')" onChange={evento => setAtendimentoFim(evento.target.value)} />
                            </div>
                            <h3 class="margin-bottom-10">Horário de Pausa</h3>
                            <div class="dflex acenter jbetween">
                                <input type="text" placeholder="Duração" class="input width-40-porc" id="pausa-inicial" onkeypress="$(this).mask('00:00')" onChange={evento => setPausaInicial(evento.target.value)} />
                                <span>até</span>
                                <input type="text" placeholder="Duração" class="input width-40-porc" id="pausa-final" onkeypress="$(this).mask('00:00')" onChange={evento => setPausaFim(evento.target.value)} />
                            </div>
                        </div>
                        <button type="submit" class="button button-cadastro-profissional txt-white bg-hover-white txt-hover-dark-red txt-18">CADASTRAR</button>
                    </div>
                </div>
            </form>
        </div>
    );

}

export default CadastroAgenda;
