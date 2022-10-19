import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function CardInformacoesClienteAdm(props){

    return(
        <div class="card prelative">
            <Link to={"/cadastroCliente"}>
                <a class="btn-editar-perfil pabsolute bg-hover-white txt-hover-dark-red transform">
                    <FontAwesomeIcon icon={faPen} />
                </a>
            </Link>
            <div class="dflex acenter jbetween">
                <div class="dflex acenter jbetween">
                    <img src="../img/foto-perfil.png" alt="Foto de perfil" class="margin-right-twenty" />
                    <div>
                        <b>{props.nome} {props.sobrenome}, {props.idade} anos</b><br />
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
export default CardInformacoesClienteAdm;