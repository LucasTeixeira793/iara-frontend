function LinhaServicosPopUp(props) {

    return (
        <>
            <h2>
                {props.servico}
            </h2>
            {props.horaInicioMinima} - {props.horaInicioMaxima}
        </>
    );

}

export default LinhaServicosPopUp;