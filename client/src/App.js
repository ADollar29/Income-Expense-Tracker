<<<<<<< Updated upstream
function App(){
    return(
        <div className="App">
            <h1 className="text-green-200">Income-Expense Tracker</h1>
        </div>
    );
=======
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Forms/Login';
import HomePage from './components/HomePage/HomePage';
import Register from './components/Forms/Register';
import Navbar from './components/Navbar/Navbar';
import AddTransaction from './components/Forms/AddTransaction';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/add-transaction" element={<AddTransaction/>} />
    </Routes>
    </BrowserRouter>
  );
>>>>>>> Stashed changes
}

export default App;