import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ScanDetail from './pages/ScanDetail';
import { AppLayout } from './components/layout/AppLayout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<AppLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/scan/:id" element={<ScanDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
