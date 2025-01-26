import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './components/Layout'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import NoPage from './pages/NoPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={< About />}/>
          <Route path='blog' element={< Blog />}/>
          <Route path='contact' element={<Contact />}/>
          <Route path='*' element={<NoPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
