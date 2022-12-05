function CardAgendadoSucesso() {
    return (
            <div id="mensagem_agendamento" class="pabsolute dflex acenter jcenter mensagem show">
                <div class="txt-bold txt-bigger margin-bottom-thirty txt-dark-red" id="titulo_mensagem_agendamento">
                    Agendado com Sucesso!
                </div>
                <div class="margin-bottom-10 txt-medium">
                    Serviço: 
                    <span id="servico_mensagem_agendamento"></span>
                </div>
                <div class="margin-bottom-10 txt-medium">
                    Data: 
                    <span id="data_mensagem_agendamento"></span>
                </div>
                <div class="txt-medium">
                    Horário: 
                    <span id="horario_mensagem_agendamento"></span>
                </div>
            </div>
    );

}

export default CardAgendadoSucesso;