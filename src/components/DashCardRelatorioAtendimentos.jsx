function DashCardRelatorioAtendimentos(props) {

    return (
        <>
            <div class="width-4-cards small-card dflex acenter jcenter fwrap">
                <div class="dflex fwrap acenter jcenter txt-center">
                    <span class="txt-center margin-bottom-10">Dia com mais atendimentos</span>
                    <span class="txt-bigger txt-medium">{props.diaMais}</span>
                </div>
                <div class="small-separador"></div>
                <div class="dflex fwrap acenter jcenter txt-center">
                    <span class="font-size-twenty-five txt-medium width-100-porc">{props.atendimentosMais}</span><br />
                    <span class="txt-center font-size-fifteen">Atendimentos</span>
                </div>
            </div>
            <div class="width-4-cards small-card dflex acenter jcenter fwrap">
                <div class="dflex fwrap acenter jcenter txt-center">
                    <span class="txt-center margin-bottom-10">Dia com menos atendimentos</span>
                    <span class="txt-bigger txt-medium">{props.diaMenos}</span>
                </div>
                <div class="small-separador"></div>
                <div class="dflex fwrap acenter jcenter txt-center">
                    <span class="font-size-twenty-five txt-medium width-100-porc">{props.atendimentosMenos}</span><br />
                    <span class="txt-center font-size-fifteen">Atendimentos</span>
                </div>
            </div >
            <div class="width-4-cards small-card dflex acenter jcenter fwrap">
                <div class="dflex fwrap acenter jcenter txt-center">
                    <span class="txt-center margin-bottom-10">Horário com mais atendimentos</span>
                    <span class="txt-bigger txt-medium">{props.horaMais}H</span>
                </div>
                <div class="small-separador"></div>
                <div class="dflex fwrap acenter jcenter txt-center">
                    <span class="font-size-twenty-five txt-medium width-100-porc">{props.atendimentosHoraMais}</span><br />
                    <span class="txt-center font-size-fifteen">Atendimentos</span>
                </div>
            </div >
            <div class="width-4-cards small-card dflex acenter jcenter fwrap">
                <div class="dflex fwrap acenter jcenter txt-center">
                    <span class="txt-center margin-bottom-10">Horário com menos atendimentos</span>
                    <span class="txt-bigger txt-medium">{props.horaMenos}H</span>
                </div>
                <div class="small-separador"></div>
                <div class="dflex fwrap acenter jcenter txt-center">
                    <span class="font-size-twenty-five txt-medium width-100-porc">{props.atendimentosHoraMenos}</span><br />
                    <span class="txt-center font-size-fifteen">Atendimentos</span>
                </div>
            </div >
        </>

    )

}

export default DashCardRelatorioAtendimentos;