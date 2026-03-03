import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<div className="p-8"><h1 className="text-2xl font-bold">Login Screen Placeholder</h1></div>} />
      <Route path="/dashboard" element={<div className="p-8"><h1 className="text-2xl font-bold">Dashboard Placeholder</h1></div>} />
      <Route path="/scan/:id" element={<div className="p-8"><h1 className="text-2xl font-bold">Scan Detail Placeholder</h1></div>} />
    </Routes>
  );
}

export default App;
