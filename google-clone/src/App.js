import { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppContext } from './Context/AppContext.js';



function App() {

  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  return (
    <AppContext.Provider value={{ input, setInput,result,setResult }}>
      <div className="App">
        <Router>
          <Routes>
            <Route path='/search' element={<SearchPage />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </Router>
      </div>
    </AppContext.Provider>
  );
}

export default App;
