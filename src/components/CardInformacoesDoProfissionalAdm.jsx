import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from "react";
import api from "../api";
import foto from "../html-css-template/img/img-prof-default.png";

function CardInformacoesDoProfissionalAdm(props) {

    const [infoPrestador, setPrestador] = useState([])

    useEffect(() => {
        const infoPrestador = localStorage.dadosUsuario;
        if (infoPrestador) {
            setPrestador(infoPrestador);
        }

        async function buscarInfos() {
            const resposta = await api.get(`prestador/${localStorage.idPrestador}`, { headers: { "Access-Control-Allow-Origin": "*" } });
            setPrestador(resposta.data);
            console.log("OLHA O QUE VEIO DA API!! --- Infos", resposta.data)
        }
        buscarInfos();
    }, [])

    const inputRef = useRef(null);
    const handleClick = () => {
        inputRef.current.click();
    };

    const handleFileChange = event => {
        const fileObj = event.target.files && event.target.files[0];
        if (!fileObj) {
            return;
        }

        event.target.value = null;

        console.log(event.target.files);

        console.log(fileObj);
        console.log(fileObj.name);

        const formData = new FormData();

        if (fileObj) {
            formData.append('novaFoto', fileObj, fileObj.name)
        }

        console.log("formData")
        console.log(formData)

        function atualizarTeste() {
            api.patch(`prestador/foto/${localStorage.idPrestador}`, fileObj, {
                headers: {
                    'Content-Type': 'image/jpeg'
                }
            }
            ).then((res) => {
                console.log(res)
                console.log('nova foto salva')
                window.location.reload();
            });
        }

        atualizarTeste();

    };

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
            <Link to={"/cadastroProfissional"}>
                <a class="btn-editar-perfil pabsolute bg-hover-white txt-hover-dark-red transform">
                    <FontAwesomeIcon icon={faPen} />
                </a>
            </Link>

            <div class="dflex acenter jbetween">
                <div class="dflex acenter jbetween prelative">
                <input
                        style={{ display: 'none' }}
                        ref={inputRef}
                        type="file"
                        onChange={handleFileChange}
                    />
                    <button class="btn-editar-foto pabsolute bg-hover-white txt-hover-dark-red  transform border-none" onClick={handleClick}>
                        <FontAwesomeIcon icon={faPen} />
                    </button>
                    <div style={image.imagemPortfolio} alt="Foto de perfil" class="height-85 margin-right-twenty" />
                    <div>
                        <span>
                            <b>{props.nome} {props.sobrenome}</b><br />Especialista
                        </span>
                    </div>
                </div>
                <div class="dflex acenter jbetween">
                    <a href="/dashboard" class="button bg-red txt-white bg-hover-white txt-hover-dark-red margin-none margin-right-twenty">ANÁLISES</a>
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
                    <span>{props.rua}, {props.numero}  {props.complemento}<br />
                        {props.bairro}, {props.cidade}<br />
                        {props.uf} - {props.cep}</span>
                </div>
                <div>
                    <b>Preferências de atendimento</b>
                    <ul>
                        <li>{props.domicilio}</li>
                        <li>{props.estabelecimento}</li>
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
