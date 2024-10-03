
import './App.css'
import './router'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
function App() {


  return (
    <RouterProvider router={router}/>
      
  )
}

export default App
