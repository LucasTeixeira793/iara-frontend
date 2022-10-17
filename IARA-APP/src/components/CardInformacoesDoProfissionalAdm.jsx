import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function CardInformacoesDoProfissionalAdm(props) {

    return (
        <div class="card prelative">
            <Link to={"/cadastroProfissional"}>
                <a class="btn-editar-perfil pabsolute bg-hover-white txt-hover-dark-red transform">
                    <FontAwesomeIcon icon={faPen} />
                </a>
            </Link>

            <div class="dflex acenter jbetween">
                <div class="dflex acenter jbetween">
                    <img src="../img/foto-perfil.png" alt="Foto de perfil" class="margin-right-twenty" />
                    <div>
                        <span>
                            <b>{props.nome} {props.sobrenome}, 32 anos</b><br />Cabeleireira
                        </span>
                    </div>
                </div>
                <div class="dflex acenter jbetween">
                    <a href="#" class="button bg-red txt-white bg-hover-white txt-hover-dark-red margin-none margin-right-twenty">ANÁLISES</a>
                    <div class="button bg-red txt-white bg-hover-white txt-hover-dark-red margin-none dflex acenter jbetween"><span>4</span>/5 <i class="icon star"></i></div>
                </div>
            </div>
            <div class="margin-top-thirty dflex jbetween">
                <div>
                    <b>Telefone</b><br />
                    <span>{props.telefone}</span><br /><br />
                    <b>Gênero</b><br />
                        <span>{props.genero }</span>
                </div>
                <div>
                    <b>Endereço</b><br />
                    <span>{props.rua}, {props.numero}<br />
                        {props.bairro}, {props.cidade}<br />
                        {props.uf} - {props.cep}</span>
                </div>
                <div>
                    <b>Preferências de atendimento</b>
                    <ul>
                        <li>{props.preferencias}</li>
                    </ul>
                    <br />
                    <b>Raio de atendimento</b>
                    <ul>
                        <li>{props.raio} Km</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CardInformacoesDoProfissionalAdm;