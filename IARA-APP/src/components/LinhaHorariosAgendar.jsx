function LinhaHorariosAgendar(props) {

    return (
        <>
            <div class="prelative margin-right-twenty margin-bottom-10">
                <input required type="radio" id="selecione_horario_0900" name="selecione_horario" value="09:00" class="radio-button" />
                <label for="selecione_horario_0900" class="button small bg-white txt-dark-red bg-hover-red box-shadow-none-hover txt-hover-white margin-none">{props.horario}</label>
            </div>
        </>
    );

}

export default LinhaHorariosAgendar;