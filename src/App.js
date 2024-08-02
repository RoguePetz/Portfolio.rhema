import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Main from './pages/mian';
import Cards from './components/Cards';
import NNav from './components/nav';


function App() {
  return (
<Router>
<NNav/>
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/contact" element={<Cards />} />
  </Routes>
</Router>
  );
}

export default App;
