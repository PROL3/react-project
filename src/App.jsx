import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Menu from './pages/Menu';         
import Sales from './pages/Sales';     
import Storebranches from './pages/Storebranches';
import Contactus from './pages/Contactus';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/storebranches" element={<Storebranches />} />
          <Route path="/contactus" element={<Contactus />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
