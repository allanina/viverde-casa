import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ClientForm from "./pages/Forms/ClientForm";
import WorkerForm from "./pages/Forms/WorkerForm";
import CompanyForm from "./pages/Forms/CompanyForm";
import ClientConfirmation from "./pages/Confirmation/ClientConfirmation";
import CompanyConfirmation from "./pages/Confirmation/CompanyConfirmation";
import WorkerConfirmation from "./pages/Confirmation/WorkerConfirmation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" exact />
        <Route element={<ClientForm />} path="/contrate" />
        <Route element={<WorkerForm />} path="/trabalhe" />
        <Route element={<CompanyForm />} path="/parceria" />
        <Route element={<ClientConfirmation />} path="/contrate/confirmacao" />
        <Route element={<WorkerConfirmation />} path="/trabalhe/confirmacao" />
        <Route element={<CompanyConfirmation />} path="/parceria/confirmacao" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
