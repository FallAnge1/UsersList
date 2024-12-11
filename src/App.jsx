import { Routes, Route } from 'react-router'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Contacts from './pages/Contacts'
import UserDetail from './pages/UserDetail'

function App() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-5/6 flex flex-col justify-center items-center">
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/user/:id"
            element={<UserDetail />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/contacts"
            element={<Contacts />}
          />
        </Routes>
      </div>
    </div>
  )
}

export default App
