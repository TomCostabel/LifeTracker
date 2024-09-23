import { useEffect } from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useUserStore } from './store/useUserStore';

function App() {
  const {user, userData} = useUserStore();

  useEffect(() => {
    userData('TomCostabel11');

  }, [userData]);
  console.log(user);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>Holaa</h1>} />
        <Route/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
