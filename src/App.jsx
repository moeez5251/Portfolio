import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Not_Found from './components/404'
Not_Found
Home
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
  ])
  return (
    <>

      <RouterProvider router={router} />
    </>
  )
}
export default App
