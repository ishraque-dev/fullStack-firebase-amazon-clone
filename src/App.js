import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import CheckOut from './components/CheckOut';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
    </>
  );
}

export default App;
