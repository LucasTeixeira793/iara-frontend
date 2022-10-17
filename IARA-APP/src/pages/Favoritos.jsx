import CardProfissionalFav from "../components/CardProfissionalFav";
import Footer from "../components/Footer";
import HeaderCliente from "../components/HearderCliente";

function Favoritos(){
    
    return(
        <>
            <HeaderCliente />
            <main class="margin-top-thirty margin-bottom-thirty container">
            <h3 class="txt-bigger txt-red txt-bold margin-bottom-thirty">Profissionais Favoritados</h3>
            <div class="dflex acenter jbetween width-100-porc fwrap">
                <CardProfissionalFav />
            </div>
            </main>
            <Footer/>
        </>
    )

}

export default Favoritos;