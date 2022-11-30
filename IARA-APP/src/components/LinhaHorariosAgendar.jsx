function LinhaHorariosAgendar() {

    function chamarHorario() {

        sessionStorage.setItem("HorarioSelecionado", document.getElementById("idHorario").value)

    }

    return (
        <>
            <div class="prelative margin-right-twenty margin-bottom-10" >
                <input type="datetime-local"class="bg-almost-white input max-content" id="idHorario" onBlur={chamarHorario} />
            </div>
        </>
    );

}

export default LinhaHorariosAgendar;