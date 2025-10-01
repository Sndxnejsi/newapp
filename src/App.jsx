import TarefasComStatus from "./pages/tarefasComStatus"
import TarefasSimples from "./pages/tarefassimples"
import ListaSupermercado from "./pages/ListaSupermercado"

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

export default function App() {


  //criar a estrutura de rotas de navegação 
  return(

    <Router>
      <div  className="container pt-3">
        <nav className="text-center">
        <Link to="/" className="btn btn-outline-danger btn-sm me-3"> Tarefas Simples</Link>
        <Link to="/status" className="btn btn-outline-primary btn-sm">Tarefas Com Status</Link>
        <Link to="/mercado" className="btn btn-outline-primary btn-sm">Lista Mercado</Link>
        </nav>
 
        <Routes>
          <Route path="/" element={<TarefasSimples />} />
          <Route path="/status" element={<TarefasComStatus />} />
          <Route path="/mercado" element={<ListaSupermercado />} />
        </Routes>
 
 
      </div>
   
    </Router>
  )
}


