import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import RagPosting from './components/ragPosting/RagPosting'

function App() {
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<RagPosting />} />
      </Routes>
    </Router>
  )
}

export default App
