import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import ShelfAnime from './pages/Shelf_Anime'
import './App.css'

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/shelf" element={<ShelfAnime />} />
          {/* 안전망 */}
          <Route path="*" element={<Home />} />
        </Routes>
    </Router>
  )
}

export default App
