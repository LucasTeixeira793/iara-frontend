function LinhaServicosAgendar(props) {


    function chamarId(id) {

        sessionStorage.setItem("IdSelecionado", id)

    }

    return (
        <>
            <div class="prelative margin-right-twenty margin-bottom-10" onClick={() => chamarId(props.id)}>
                <input required type="radio" id={`selecione_servico_${props.tipo}`}  name="selecione_servico" value={props.tipo} class="radio-button" />
                <label for={`selecione_servico_${props.tipo}`} class="button small bg-white txt-dark-red bg-hover-red box-shadow-none-hover txt-hover-white margin-none">{props.tipo}</label>
            </div>
        </>
    );

}

export default LinhaServicosAgendar;
