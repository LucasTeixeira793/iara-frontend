function DashCardServicoAtendimentos(props) {

    return (
        <>
            <div class="width-30-margin-15 dflex fwrap txt-center">
                <div class="dark-red-card width-100-porc txt-white margin-bottom-thirty dflex fwrap jbetween acenter">
                    <div class="width-100-porc">
                        <span>Serviço com <b>mais</b> atendimentos</span>
                    </div>
                    <div class="width-50-porc">
                        <b><span class="font-size-twenty">{props.tipoMais}</span></b>
                    </div>
                    <div class="width-50-porc">
                        <b><span class="font-size-thirty">{props.agendamentosMais}</span></b><br />
                        <span class="font-size-thirteen">ATENDIMENTOS</span>
                    </div>
                </div>
                <div class="dark-red-card width-100-porc txt-white margin-bottom-thirty dflex fwrap jbetween acenter">
                    <div class="width-100-porc">
                        <span>Serviço com <b>menos</b> atendimentos</span>
                    </div>
                    <div class="width-50-porc">
                        <b><span class="font-size-twenty">{props.tipoMenos}</span></b>
                    </div>
                    <div class="width-50-porc">
                        <b><span class="font-size-thirty">{props.agendamentosMenos}</span></b><br />
                        <span class="font-size-thirteen">ATENDIMENTOS</span>
                    </div>
                </div>
            </div>
        </>
    )

}

export default DashCardServicoAtendimentos;