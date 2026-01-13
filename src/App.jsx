import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Not_Found from './components/404'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "*",
      element: <Not_Found />
    }
  ],
  {
    basename:"/Portfolio"
  }
)
  return (
    <>

      <RouterProvider  router={router} />
    </>
  )
}
export default App
