import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './Home.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  console.log("Welcome to FindmySauce");
  return (
    <div id='like'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
    
  )
}

export default App
