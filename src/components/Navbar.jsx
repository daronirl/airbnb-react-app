

function Navbar() {
  return (
    <nav className='nav'>
        <img src={`${process.env.PUBLIC_URL}/images/airbnb-logo.png`} alt="star" className="nav--logo" />
    </nav>
  )
}

export default Navbar
