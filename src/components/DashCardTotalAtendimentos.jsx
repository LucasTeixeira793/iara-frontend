function DashCardTotalAtendimentos(props) {
    return (
        <>
            <div class="dark-red-card width-100-porc txt-white margin-bottom-thirty dflex jbetween acenter">
                <div class="width-70-porc">
                    <span class="font-size-sixteen">Total de atendimentos da última <b>semana</b></span>
                </div>
                <div class="width-30-porc dflex acenter jcenter">
                    <b><span class="font-size-thirty">{props.d7dias}</span></b>
                </div>
            </div>
            <div class="dark-red-card width-100-porc txt-white margin-bottom-thirty dflex jbetween acenter">
                <div class="width-70-porc">
                    <span class="font-size-sixteen">Total de atendimentos do último <b>mês</b></span>
                </div>
                <div class="width-30-porc dflex acenter jcenter">
                    <b><span class="font-size-thirty">{props.d30dias}</span></b>
                </div>
            </div>
            <div class="dark-red-card width-100-porc txt-white dflex jbetween acenter margin-bottom-thirty">
                <div class="width-70-porc">
                    <span class="font-size-sixteen">Total de atendimentos dos últimos <b>três meses</b></span>
                </div>
                <div class="width-30-porc dflex acenter jcenter">
                    <b><span class="font-size-thirty">{props.d90dias}</span></b>
                </div>
            </div>
        </>
    )

}

export default DashCardTotalAtendimentos;