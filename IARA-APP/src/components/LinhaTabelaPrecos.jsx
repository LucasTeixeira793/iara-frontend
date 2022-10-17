function linhaPrecos(props) {
    return (
      <>
        <div class="dflex acenter jbetween margin-top-ten">
          <b>{props.tipo}</b>
          <input type="text" class="input-border-bottom-red txt-red" readonly value={props.duracao} />
          <span class="button small bg-red txt-white margin-none pointer-none">R$ {props.preco}</span>
        </div>
      </>
    );
  }
  
  export default linhaPrecos;