import DashIaraControleUsuarios from "../components/DashIaraControleUsuarios";
import DashIaraRelatorioAtendimentos from "../components/DashIaraRelatorioAtendimentos";
import DashIaraTotalAtendimentos from "../components/DashIaraTotalAtendimentos";
import Footer from "../components/Footer";
import GraficoProcuraServicoIara from "../components/GraficoProcuraServicoIara";
import GraficoSemanalIara from "../components/GraficoSemanalIara";
import HeaderColaborador from "../components/HearderColaborador";

function DashboardIara() {

    return (
        <>
            <HeaderColaborador />
            <main class="margin-top-thirty margin-bottom-thirty container">
                <div class="dflex jbetween margin-bottom-80">
                    <div class="width-70-porc">
                        <h3 class="txt-center font-size-eighteen margin-top-ten"><b>NÚMERO DE ATENDIMENTOS POR DIA DA SEMANA</b></h3>
                        <GraficoSemanalIara />
                    </div>
                    <div class="width-30-margin-15 dflex fwrap">
                        <DashIaraTotalAtendimentos />
                    </div>
                </div>
                <div class="dflex jbetween margin-bottom-110">
                    <DashIaraRelatorioAtendimentos />
                </div>
                <div class="dflex jaround margin-bottom-55">
                    <DashIaraControleUsuarios />
                </div>
                <div class="width-100-porc">
                    <h3 class="txt-center font-size-eighteen"><b>VISUALIZAÇÃO DE PROCURA DE SERVIÇOS</b></h3>
                    <GraficoProcuraServicoIara />
                </div>
            </main>
            <Footer />
        </>
    )
}

export default DashboardIara;