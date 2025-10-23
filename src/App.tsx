import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import PropertyDetailPage from './Components/PropertyDetailPage'
import Navbar from './Components/Navbar'
import About from './Components/About'
import AgentsPage from './Components/AgentsPage'
import ComingSoonPage from './Components/ComingSoonPage'
import ContactPage from './Components/ContactPage'
import Footer from './Components/Footer'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/property/:id" element={<PropertyDetailPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/agents" element={<AgentsPage />} />
        <Route path="/properties" element={<ComingSoonPage />} />
        <Route path="/blog" element={<ComingSoonPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
