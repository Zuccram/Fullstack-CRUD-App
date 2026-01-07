import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import AddCountry from './pages/AddCountry.jsx';
import Country from './pages/Country.jsx';
import UpdateCountry from './pages/UpdateCountry.jsx';

import './App.css'
import Navbar from './components/navbar.jsx';

function App() {
  return (
    <main className="px-24 py-8">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-country" element={<AddCountry />} />
        <Route path="/country/:id" element={<Country />} />
        <Route path="/update-country/:id" element={<UpdateCountry />} />
      </Routes>
    </main>
  );
}

export default App;
