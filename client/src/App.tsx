import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Container from './components/Container/Container';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Container/>} />
        <Route/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
