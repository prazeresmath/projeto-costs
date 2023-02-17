import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contato from './components/pages/Contato';
import NewProject from './components/pages/NewProject';

import Container from './components/layout/Container';

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/company">Empresa</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/newproject">Novo Projeto</Link>
      </div>
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/newproject" element={<NewProject />} />
        </Routes>
      </Container>
      <p>footer</p>
    </Router>
  );
}

export default App;
