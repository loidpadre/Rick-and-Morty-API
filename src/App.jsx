import './App.css'
import Header from './components/header/header'
import Home from './pages/Home'
import About from './pages/About'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Description from './pages/Description'
import Fotter from './components/footer/fotter'

function App() {
  return (
    <>

< div className='container'>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/sobre' element={<About/>}/>
          <Route path='/description/:id' element={<Description/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
    <Fotter/>
    </>
  )
}

export default App
