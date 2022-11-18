import logo from '../html-css-template/img/logo-branco.png';
function AtualizarAgenda() {
    return (
        <div class="page dflex acenter jcenter txt-medium">
            <form id="cadastro-cliente" class="container">
                <a href="institucional.html" class="logo transform prelative margin-special">
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
                                <input type="checkbox" name="Segunda-Feira"></input>
                                <div class="checkmark"></div>
                                <span>Segunda-Feira</span>
                            </label>
                            <label class="label-checkbox">
                                <input type="checkbox" name="Terça-Feira"></input>
                                <div class="checkmark"></div>
                                <span>Terça-Feira</span>
                            </label>
                            <label class="label-checkbox">
                                <input type="checkbox" name="Quarta-Feira"></input>
                                <div class="checkmark"></div>
                                <span>Quarta-Feira</span>
                            </label>
                            <label class="label-checkbox">
                                <input type="checkbox" name="Quinta-Feira"></input>
                                <div class="checkmark"></div>
                                <span>Quinta-Feira</span>
                            </label>
                            <label class="label-checkbox">
                                <input type="checkbox" name="Sexta-Feira"></input>
                                <div class="checkmark"></div>
                                <span>Sexta-Feira</span>
                            </label>
                            <label class="label-checkbox">
                                <input type="checkbox" name="Sábado"></input>
                                <div class="checkmark"></div>
                                <span>Sábado</span>
                            </label>
                            <label class="label-checkbox">
                                <input type="checkbox" name="Domingo"></input>
                                <div class="checkmark"></div>
                                <span>Domingo</span>
                            </label>
                        </div>
                    </div>                    
                    <div class="width-50-porc">
                        <h3 class="margin-bottom-10">Horário de Atendimento</h3>
                        <div class="dflex acenter jbetween margin-bottom-15">
                            <input type="text" placeholder="Duração" class="input width-40-porc" id="atendimento-inicial" onkeypress="$(this).mask('00:00')"/>
                            <span>até</span>
                            <input type="text" placeholder="Duração" class="input width-40-porc" id="atendimento-final" onkeypress="$(this).mask('00:00')"/>
                        </div>
                        <h3 class="margin-bottom-10">Horário de Pausa</h3>
                        <div class="dflex acenter jbetween">
                            <input type="text" placeholder="Duração" class="input width-40-porc" id="pausa-inicial" onkeypress="$(this).mask('00:00')"/>
                            <span>até</span>
                            <input type="text" placeholder="Duração" class="input width-40-porc" id="pausa-final" onkeypress="$(this).mask('00:00')"/>
                        </div>
                    </div>
                    <button type="submit" class="button button-cadastro-profissional txt-white bg-hover-white txt-hover-dark-red txt-18">CADASTRAR</button>
                    
                </div>
            </div>
            </form>
        </div>
    );

}

export default AtualizarAgenda;
