function linhaPrecos(props) {
  return (
    <>
      <div class="dflex acenter jbetween margin-top-ten margin-bottom-thirty">
        <div>
          <span class="txt-dark-red txt-15">{props.tipo}</span><br/>
          <b>{props.descricao}</b>
        </div>
        <input type="text" class="input-border-bottom-red txt-red" readonly value={props.duracao} />
        <span class="button small bg-red txt-white margin-none pointer-none">{props.preco}</span>
      </div>
    </>
  );
}

export default linhaPrecos;
