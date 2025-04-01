import { createBrowserRouter, RouterProvider } from "react-router"
import "../styles/App.css"

import Layout from "./Layout"

import Main from "./pages/Main"
import News from "./pages/News"
import Ads from "./pages/Ads"
import Department from "./pages/Department"
import Entrant from "./pages/Entrant"
import Study from "./pages/Study"
import Science from "./pages/Science"
import POU from "./pages/POU"
import Photo from "./pages/Photo"
import References from "./pages/References"
import Contacts from "./pages/Contacts"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Main />,
        },
        {
          path: "/news",
          element: <News />,
        },
        {
          path: "/ads",
          element: <Ads />,
        },
        {
          path: "/department",
          element: <Department />,
        },
        {
          path: "/entrant",
          element: <Entrant />,
        },
        {
          path: "/study",
          element: <Study />,
        },
        {
          path: "/science",
          element: <Science />,
        },
        {
          path: "/POU",
          element: <POU />,
        },
        {
          path: "/photo",
          element: <Photo />,
        },
        {
          path: "/references",
          element: <References />,
        },
        {
          path: "/contacts",
          element: <Contacts />,
        },
      ],
    },
  ])
  return <RouterProvider router={router} />
}

export default App
