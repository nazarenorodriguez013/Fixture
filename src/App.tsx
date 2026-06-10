import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Groups from './pages/Groups';
import Fixture from './pages/Fixture';
import Venues from './pages/Venues';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-950 text-white pb-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/grupos" element={<Groups />} />
          <Route path="/fixture" element={<Fixture />} />
          <Route path="/sedes" element={<Venues />} />
        </Routes>
        <Navbar />
      </div>
    </BrowserRouter>
  );
}
