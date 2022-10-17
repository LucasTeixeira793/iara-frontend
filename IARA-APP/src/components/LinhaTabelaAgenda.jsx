function linhaAgenda(props) {
  return (
    <>
      <tr>
        <td><span class="button bg-red txt-white margin-none pointer-none">{props.tipo}</span></td>
        <td><span class="button bg-red txt-white margin-none pointer-none">{props.dia}</span></td>
        <td><span class="button bg-red txt-white margin-none pointer-none">{props.horario}</span></td>
        <td><span class="button bg-red txt-white margin-none pointer-none">{props.data}</span></td>
        <td><span class="button bg-red margin-none bg-hover-white">
          <u>
            <a class="txt-white txt-hover-dark-red" href="">{props.nomeCliente} {props.sobrenomeCliente}</a>
          </u></span></td>
      </tr>
    </>
  );
}

export default linhaAgenda;