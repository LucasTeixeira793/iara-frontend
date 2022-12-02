function LinhaServicosPopUp(props) {

    return (
        <>
            <h2>
                É possível marcar o serviço em qualquer horário entre:
            </h2>
            {props.horaInicioMinima} e {props.horaInicioMaxima}
        </>
    );

}

export default LinhaServicosPopUp;