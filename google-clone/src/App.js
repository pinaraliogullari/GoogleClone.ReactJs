import { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppContext } from './Context/AppContext';



function App() {

  const [input, setInput] = useState("");
  return (
    <AppContext.Provider value={{ input, setInput }}>
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
