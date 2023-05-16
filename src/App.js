import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './components/Home';
import Register from './components/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Edit from './components/Edit';
import Detail from './components/Detail';



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route exact path='/' element={<Home></Home>}></Route>
          <Route exact path='/register' element={<Register></Register>}></Route>
          <Route exact path='/edit/:id' element={<Edit></Edit>}></Route>
          <Route exact path='/view/:id' element={<Detail></Detail>}></Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
