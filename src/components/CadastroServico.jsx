import logo from '../html-css-template/img/logo-branco.png';
function CadastroServico() {
    return (
        <div class="page dflex acenter jcenter txt-medium">
            <form id="cadastro-cliente" class="container">
                <a href="institucional.html" class="logo transform prelative margin-special">
                    <img src={logo} />
                    <span class="subtitulo">CADASTRO</span>
                </a>
            
            <div class="card bg-off-white dflex jbetween fwrap width-70-porc margin-auto">
                <div class="dflex fwrap astart jbetween width-100-porc">
                    <div class="width-100-porc">
                        <h3 class="txt-19">Cadastrar Serviços</h3>
                            <div class="dflex jbetween">
                                <select class="input width-47-porc margin-bottom-15">
                                    <option value="" hidden="true" default="true">Escolha a Categoria</option>
                                </select>
                                <select class="input width-47-porc margin-bottom-15">
                                    <option value="" hidden="true" default="true">Escolha a Especialidade</option>
                                </select>
                            </div>
                        <div class="dflex jbetween">
                            <input type="number" min="1" step="any" placeholder="Preço (R$)" class="input width-47-porc" id="input-preco"/>
                            <input type="text" placeholder="Duração" class="input width-47-porc" id="input-duracao-servico" onkeypress="$(this).mask('00:00')"/>
                        </div>
                        <button type="submit" class="button button-cadastro-profissional txt-white bg-hover-white txt-hover-dark-red txt-18">CADASTRAR</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );

}

export default CadastroServico;