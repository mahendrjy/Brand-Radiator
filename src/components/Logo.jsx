import LogoSvg from '../assets/vite.svg'

const Logo = () => {
  return (
    <a href="/">
      <img src={LogoSvg} className="logo" />
    </a>
  )
}

export default Logo
