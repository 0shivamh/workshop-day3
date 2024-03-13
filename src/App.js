import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home';
import Page from "./Page"
function App() {
  return (
    <div className="App">
        <BrowserRouter>
        
        <Routes>

        <Route path='/' element={<Home/>} />
        <Route path='/page' element={<Page/>} />

        </Routes>
        
        </BrowserRouter>
    </div>
  );
}

export default App;
