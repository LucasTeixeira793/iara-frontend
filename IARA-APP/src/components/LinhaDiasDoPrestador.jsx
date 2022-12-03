function LinhaDiasDoPrestador(props) {

    return (
        <>
            <div>
                <span class="txt-dark-red txt-15">* O profissional atende de: <b>{props.diasDisponiveis}</b></span>
            </div>
        </>
    );

}

export default LinhaDiasDoPrestador;