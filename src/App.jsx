import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import './App.css'
import router from './Routes/Routes'

function App() {

  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  )
}

export default App
