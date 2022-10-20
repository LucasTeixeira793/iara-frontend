function CardInformacoesCliente(props){

    return(
        <div class="card prelative">
            <div class="dflex acenter jbetween">
                <div class="dflex acenter jbetween">
                    <img src="../img/foto-perfil.png" alt="Foto de perfil" class="margin-right-twenty height-85" />
                    <div>
                    <b>{props.nome} {props.sobrenome}</b><br />
                    </div>
                </div>
                <div class="dflex acenter jbetween">
                    <div class="button bg-red txt-white bg-hover-white txt-hover-dark-red margin-none dflex acenter jbetween"><span>4</span>/5 <i class="icon star"></i></div>
                </div>
            </div>
            <div class="margin-top-thirty dflex jbetween width-50-porc">
                <div>
                    <b>Telefone</b><br />
                    <span>{props.telefone}</span><br /><br />
                    <b>Gênero</b><br />
                    <span>{props.genero}</span>
                </div>
                <div>
                    <b>Endereço</b><br />
                    <span>{props.rua}, {props.numero}<br />
                    {props.bairro}, {props.cidade}<br />
                    {props.uf} - {props.cep}</span>
                </div>
            </div>
        </div>
    )
}

export default CardInformacoesCliente;
