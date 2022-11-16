function LinhaServicosAgendar(props) {

    return (
        <>
            <div class="prelative margin-right-twenty margin-bottom-10">
                <input required type="radio" id="selecione_servico_corte" name="selecione_servico" value="Corte" class="radio-button" />
                <label for="selecione_servico_corte" class="button small bg-white txt-dark-red bg-hover-red box-shadow-none-hover txt-hover-white margin-none">{props.tipo}</label>
            </div>
        </>
    );

}

export default LinhaServicosAgendar;