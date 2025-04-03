import { Outlet } from "react-router"
import Navbar from "./ui/Navbar"
import Footer from "./ui/Footer"




const Layout = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
