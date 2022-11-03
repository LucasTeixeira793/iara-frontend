import foto from "../html-css-template/img/img-prof-default.png";

function CardInformacoesCliente(props) {

    var fotoTratada;
    if (props.foto !== null) {
        fotoTratada = `url("data:image;base64,${props.foto}")`
    }
    else {
        fotoTratada = `url("${foto}")`
    }

    const image = {
        imagemPortfolio: {
            backgroundImage: fotoTratada,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "78px",
            borderRadius: "50%"
        }
    }
    return (
        <div class="card prelative">
            <div class="dflex acenter jbetween">
                <div class="dflex acenter jbetween">
                    <div style={image.imagemPortfolio} alt="Foto de perfil" class="height-85 margin-right-twenty" />
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
