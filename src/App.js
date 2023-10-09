import LoginForm from './componente/login';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";


import './App.css';
import Home from './componente/home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>

          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
