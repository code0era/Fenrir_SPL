import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<div className="p-8"><h1 className="text-2xl font-bold">Dashboard Placeholder</h1></div>} />
      <Route path="/scan/:id" element={<div className="p-8"><h1 className="text-2xl font-bold">Scan Detail Placeholder</h1></div>} />
    </Routes>
  );
}

export default App;
