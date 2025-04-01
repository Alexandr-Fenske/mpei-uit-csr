import { Outlet } from "react-router"
import Navbar from "./ui/navbar/Navbar"
import Footer from "./ui/footer/Footer"




const Layout = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
