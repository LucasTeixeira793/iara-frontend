function LinhaServicosPopUp(props) {

    return (
        <>
            <h2>
                É possível agendar o serviço em qualquer horário entre:
            </h2>
            <br />
            {props.horaInicioMinima1} {props.horaInicioMaxima1}
            <br />
            <br />
            {props.horaInicioMinima2}  {props.horaInicioMaxima2}
        </>
    );

}

export default LinhaServicosPopUp;