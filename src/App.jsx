import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/layout/inicio/Home'
import About from './components/layout/global/about/About'
import Contact from './components/layout/global/Contact'
import Delivery from './components/layout/ventas/Delivery'
import Product from './components/layout/productos/Product'
import ResponsiveAppBar from './components/layout/global/menuBar/ResponsiveAppBar'
import Footer from './components/layout/global/Footer'
import CookieConsent from './components/layout/CookieConsent'
function App() {
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CookieConsent/>
      <ResponsiveAppBar />
      <div style={{ flex: 1, overflowY: 'auto' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Product />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}
export default App;

