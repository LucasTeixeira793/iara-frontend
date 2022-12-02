import { BrowserRouter, Route, Routes } from "react-router-dom";
import EscolhaCadastro from "./pages/EscolhaCadastro";
import CadastroCliente from "./pages/CadastroCliente";
import Login from "./pages/Login";
import SucessoCadastro from "./pages/SucessoCadastro";
import Home from "./pages/HomeDeslogado";
import HomeCliente from "./pages/HomeCliente";
import CadastroProfissional from "./pages/CadastroProfissional";
import CadastroEndereco from "./pages/CadastroEndereco";
import CadastroHabilidades from "./pages/CadastroHabilidades";
import PerfilProfissional from "./pages/PerfilProfissional";
import AccountProfissional from "./pages/AccountProfissionalAdm";
import AccountCliente from "./pages/AccountClienteAdm";
import PerfilCliente from "./pages/PerfilCliente";
import EscolhaLogin from "./pages/EscolhaLogin";
import LoginPrestador from "./pages/LoginPrestador";
import Dashboard from "./pages/Dashboard";
import DashboardIara from "./pages/DashboardIara";
import Favoritos from "./pages/Favoritos";
import CadastrarServico from "./pages/CadastrarServico";
import AtualizarAgenda from "./pages/AtualizarAgenda";

function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/escolhaCadastro" element={<EscolhaCadastro />} />
                <Route path="/escolhaLogin" element={<EscolhaLogin />} />
                <Route path="/cadastroCliente" element={<CadastroCliente />} />
                <Route path="/cadastroProfissional" element={<CadastroProfissional />} />
                <Route path="/login" element={<Login />} />
                <Route path="/loginPrestador" element={<LoginPrestador />} />
                <Route path="/sucessoCadastro" element={<SucessoCadastro />} />
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<HomeCliente />} />
                <Route path="/cadastroEndereco" element={<CadastroEndereco />} />
                <Route path="/cadastroHabilidades" element={<CadastroHabilidades />} />
                <Route path="/accountProfissional" element={<AccountProfissional />} />
                <Route path="/cadastrarServico/accountProfissional/:id" element={<AccountProfissional />} />
                <Route path="/AtualizarAgenda/accountProfissional/:id" element={<AccountProfissional />} />
                <Route path="home/perfilProfissional/:id" element={<PerfilProfissional />} />
                <Route path="accountCliente/perfilProfissional/:id" element={<PerfilProfissional />} />
                <Route path="/accountCliente" element={<AccountCliente />} />
                <Route path="/perfilCliente" element={<PerfilCliente />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/dashboardIara" element={<DashboardIara />} />
                <Route path="/favoritos" element={<Favoritos />} />
                <Route path="/cadastrarServico" element={<CadastrarServico />} />
                <Route path="/AtualizarAgenda" element={<AtualizarAgenda />} />
                
                
            </Routes>
        </BrowserRouter>

    );
}

export default Rotas;
