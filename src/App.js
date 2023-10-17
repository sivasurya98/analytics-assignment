import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Pages/Navbar';
import Product from './Pages/Product';
import Customer from './Pages/Customer';
import Income from './Pages/Income';
import Promote from './Pages/Promote';
import Help from './Pages/Help';

function App() {
  return (
    <div style={{ display: 'flex', backgroundColor: '#F5F6F8'}}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/customers' element={<Customer />} />
          <Route path='/income' element={<Income />} />
          <Route path='/promote' element={<Promote />} />
          <Route path='/help' element={<Help />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
