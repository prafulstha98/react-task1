import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const RootLayout = () => {

  return (
    <div>
      {/* this file includes 
      header, footer, hero section */}
  <Navbar/>  
  <Outlet/>
  <Footer/>
    </div>
  )
}
export default RootLayout