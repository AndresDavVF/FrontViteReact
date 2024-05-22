import "./App.css";
import CompMostrarClientes from "./Componentes/Clientes/CompMostrarClientes";
import CompCrearClientes from "./Componentes/Clientes/CompCrearClientes";
import CompEditarClientes from "./Componentes/Clientes/CompEditarClientes";
//imortamos reouter
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CompMostrarProductos from "./Componentes/Productos/CompMostrarProductos";
import CompCrearProductos from "./Componentes/Productos/CompCrearProductos";
import CompEditarProductos from "./Componentes/Productos/CompEditarProductos";
import CompMostrarProveedores from "./Componentes/Proveedores/CompMostrarProveedores";
import CompCrearProveedores from "./Componentes/Proveedores/CompCrearProveedores";

function App() {
  return (
    <div className="App">
      <header className="container">
        <nav className="navbar fixed-top navbar-expand-lg bg-primary"data-bs-theme="dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              Home
            </a>
            <button
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              className="navbar-toggler"
              data-bs-target="#navbarNav"
              data-bs-toggle="collapse"
              type="button"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a aria-current="page" className="nav-link active" href="/clientes">
                    Clientes
                  </a>
                </li>
                <li className="nav-item">
                  <a aria-current="page" className="nav-link active" href="/productos">
                    Productos
                  </a>
                </li>
                <li className="nav-item">
                  <a aria-current="page" className="nav-link active" href="/proveedores">
                    Proveedores
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/clientes/" element={<CompMostrarClientes />} />
          <Route path="/clientes/agregar/" element={<CompCrearClientes />} />
          <Route path="/clientes/editar/:id" element={<CompEditarClientes />} />
          <Route path="/productos/" element={<CompMostrarProductos />} />
          <Route path="/productos/agregar/" element={<CompCrearProductos />}/>
          <Route path="/productos/editar/:id" element={<CompEditarProductos/>}/>
          <Route path="/proveedores/" element={<CompMostrarProveedores/>}/>
          <Route path="/proveedores/agregar/" element={<CompCrearProveedores/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
