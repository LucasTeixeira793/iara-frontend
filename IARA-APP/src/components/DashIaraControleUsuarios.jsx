function DashIaraControleUsuarios(props) {

    return (
        <>
            <div class="dark-red-card width-40-porc txt-white margin-bottom-thirty dflex fwrap jbetween acenter">
                <div class="width-50-porc">
                    <span class="font-size-twenty">Total de Usuários Cadastrados</span>
                </div>
                <div class="width-50-porc txt-center">
                    <b><span class="font-size-thirty">{props.usuariosCadastrados}</span></b>
                </div>
            </div>
            <div class="dark-red-card width-40-porc txt-white margin-bottom-thirty dflex fwrap jbetween acenter">
                <div class="width-50-porc">
                    <span class="font-size-twenty">Total de Usuários que Solicitaram algum atendimento</span>
                </div>
                <div class="width-50-porc txt-center">
                    <b><span class="font-size-thirty">{props.usuariosAtivos}</span></b>
                </div>
            </div>
        </>
    )
}

export default DashIaraControleUsuarios;