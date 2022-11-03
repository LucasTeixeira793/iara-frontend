import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import api from "../api";

function CardInformacoesDoProfissional(props) {

    const fotoTratada = `url("data:image;base64,${props.foto}")`

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
                        <b>{props.nome} {props.sobrenome}</b><br />Cabeleireira
                    </div>
                </div>
                <div class="dflex acenter jbetween">
                    <input class="input-fav" type="checkbox" id="favorite" name="favorite-checkbox" value="favorite-button"></input>
                    {/* se o profissional já estiver favoritado adicionar propriedade defaultChecked */}
                    <label for="favorite" class="button box-shadow-none-hover shadow-smooth label-fav container bg-red txt-dark-red bg-hover-white txt-hover-dark-red margin-none margin-right-twenty">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                        <div class="action">
                            <span class="option-1">Favoritar</span>
                            <span class="option-2">Favoritado</span>
                        </div>
                    </label>
                    <div class="button bg-red txt-white bg-hover-white txt-hover-dark-red margin-none dflex acenter jbetween"><span>4</span>/5 <i class="icon star"></i></div>
                </div>
            </div>
            <div class="margin-top-thirty dflex jbetween">
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
    //{ console.log("CardInformacoesDoProfissional" + props) }
}

export default CardInformacoesDoProfissional;
