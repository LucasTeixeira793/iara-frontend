import DashCardRelatorioAtendimentos from "../components/DashCardRelatorioAtendimentos";
import DashCardServicoAtendimentos from "../components/DashCardServicoAtendimentos";
import DashCardTotalAtendimentos from "../components/DashCardTotalAtendimentos";
import Footer from "../components/Footer";
import GraficoProcuraServicos from "../components/GraficoProcuraServico";
import GraficoSemanal from "../components/GraficoSemanal";
import HeaderColaborador from "../components/HearderColaborador";

function Dashboard() {

    return (
        <>
            <HeaderColaborador />
            <main class="margin-top-thirty margin-bottom-thirty container">
                <h3 class="font-size-fifteen margin-bottom-80"><a href="accountProfissional.html" class="txt-black"><u>Perfil</u></a> / Análises</h3>
                <div class="dflex jbetween margin-bottom-80">
                    <div class="width-70-porc">
                        <h3 class="txt-center font-size-eighteen margin-top-ten"><b>NÚMERO DE ATENDIMENTOS EM COMPARAÇÃO COM A SEMANA ANTERIOR</b></h3>
                        <div>
                            <GraficoSemanal />
                        </div>
                    </div>
                    <div class="width-30-margin-15 dflex fwrap">
                        <DashCardTotalAtendimentos />
                    </div>
                </div>
                <div class="dflex jbetween margin-bottom-110">
                    <DashCardRelatorioAtendimentos />
                </div>
                <div class="dflex jbetween margin-bottom-80">
                    <DashCardServicoAtendimentos />
                    <div class="width-60-porc">
                        <h3 class="txt-center font-size-eighteen margin-bottom-neg-5"><b>VISUALIZAÇÃO DE PROCURA DE SERVIÇOS</b></h3>
                        <div id="chart_procura_servicos" height="400px">
                            <GraficoProcuraServicos />
                        </div>
                    </div>
                </div>

            </main>
            <Footer />
        </>

    )
}
export default Dashboard;