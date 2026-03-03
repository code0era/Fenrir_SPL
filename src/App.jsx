import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { AppLayout } from './components/layout/AppLayout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<AppLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/scan/:id" element={<div className="p-8"><h1 className="text-2xl font-bold">Scan Detail Placeholder</h1></div>} />
      </Route>
    </Routes>
  );
}

export default App;
