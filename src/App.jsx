import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import './App.css'
import Navbar from './components/shared/Navbar'
import SideBar from './components/SideBar'
import Inbox from "./components/Inbox"
import Body from "./components/Body"
import Mail from "./components/Mail"

const router = createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {
      path:"/",
      element:<Inbox/>
    },
    {
      path:"/mail/:id",
      element:<Mail/>
    
    }
  ]
  }
])


function App() {

  return (
    <div className='bg-[#F6FBFC] h-screen w-screen overflow-hidden'>
  <Navbar/>
  <RouterProvider router={router}/>
 
    </div>
  )
}

export default App
