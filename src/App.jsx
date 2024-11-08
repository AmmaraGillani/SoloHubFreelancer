import {BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Clients from './pages/Clients';
import Projects from './Pages/Projects';

function App(){
  return (
    <Router>
      <Routes>
        <Route path = '/' element = {<Dashboard />}/>
        <Route path = '/clients' element = {<Clients />}/>
        <Route path = '/projects' element = {<Projects />}/>
      </Routes>
    </Router>
  );
}

export default App;