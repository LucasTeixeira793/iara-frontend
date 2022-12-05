function CardProfissionalFav(){

    return(
        <a href="/perfilProfissional" class="card width-100-porc dflex acenter jbetween card-fav margin-bottom-thirty">
                <div class="dflex acenter margin-right-twenty width-40-porc">
                        <img src="../img/profissionais/img-prof-1.png" alt="Foto de perfil" class="height-85 margin-right-20"></img>
                        <div class="overflow">
                            <b>Ana Clara Pinheiros</b>
                        </div>
                    </div>
                    <span>Cabeleireira</span>
                    <input class="input-fav" type="checkbox" defaultChecked id="favorite" name="favorite-checkbox" value="favorite-button"></input>
                    <label for="favorite" class="btn-heart button box-shadow-none-hover shadow-smooth label-fav container bg-red txt-dark-red bg-hover-white txt-hover-dark-red margin-none margin-right-twenty">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                        <div class="action">
                            <span class="option-1"></span>
                            <span class="option-2"></span>
                        </div>
                    </label>
                </a>
    )
}

export default CardProfissionalFav;
