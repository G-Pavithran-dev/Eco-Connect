import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import RagPosting from './components/ragPosting/RagPosting'
import RagPicker from './components/rag_picker/RagPicker'
import { Support } from './components/support/Support'
import './App.css'
import Home from './components/HomePage/Home'
import Footer from './components/footer/Footer'
import FindUsers from './components/find_user/FindUsers'
import SignUp from './components/Authorization/Signup'
import SignInSide from './components/Authorization/SignIn'
import { About } from './components/About/about'

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/findRagPickers' element={<RagPosting />} />
        <Route path='/findUsers' element={<FindUsers />} />
        <Route path='/findRags' element={<RagPicker />} />
        <Route path='/support' element={<Support />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<SignInSide />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  )
}

export default App
