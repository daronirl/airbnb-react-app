import img1 from '../images/airbnb-logo.png'

function Navbar() {
  return (
    <nav className='nav'>
        <img src={img1} alt="logo" className='nav--logo'/>
    </nav>
  )
}

export default Navbar
