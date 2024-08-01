import { BrowserRouter, RouterProvider, Routes, Route } from 'react-router-dom'
import './App.css'
import router from './routes'
import Navbar from './globals/components/navbar/Navbar'
import Footer from './globals/components/footer/Footer'
import { Provider } from 'react-redux'
import store from './store/store'
import Home from './pages/home/Home'
import Login from './pages/auth/login/Login'
import Cart from './pages/cart/Cart'

function App() {

  return (
    <>
      <Provider store={store}>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </BrowserRouter>

      {/* <Navbar/>
<RouterProvider router={router} /> */}
      </Provider>
    </>


  )
}

export default App
