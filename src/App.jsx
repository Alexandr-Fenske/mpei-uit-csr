import { createBrowserRouter, RouterProvider } from "react-router"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>1</div>,
    },
    {
      path: "/ads",
      element: <div>2</div>,
    }
  ])
  return <RouterProvider router={router} />
}

export default App
