import Logo from './Logo'
import Navbar from './Navbar'
import SideNavbar from './SideNavbar'

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <Navbar />
      <SideNavbar />
    </div>
  )
}

export default Header
