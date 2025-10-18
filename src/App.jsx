
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import Layout from './component/Layout'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store'


function App() {
  
  const router=createBrowserRouter([
    {
      path:'/', element:<Layout/>,
      children:[
        {path:'', element:<Home/>},
        {path:'/Cart', element:<Cart/>},
        {path:'/Wishlist', element:<Wishlist/>},
        {path:'/Login', element:<Login/>},
        {path:'/About', element:<About/>},
        {path:'/Contact', element:<Contact/>},
      ]
    }
  ])

  return (
    <>
      <Provider store={store}>
      <RouterProvider router={router}/>
      </Provider>
    </>
  )
}

export default App
