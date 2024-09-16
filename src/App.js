import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Main from './pages/mian';
import NNav from './components/nav';
import Cont from './pages/cont';


function App() {
  return (
<Router>
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/contact" element={<Cont/>} />
  </Routes>
</Router>
  );
}

export default App;
