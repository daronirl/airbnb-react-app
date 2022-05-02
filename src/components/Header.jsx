import imgheader from '../images/photo-grid.png'

function Header() {
  return (
    <header>
      <img src={imgheader} alt="header" className='header--img'/>
         <h1 className='hero--h1'>Online Experiences</h1>
          <p className='hero--p'>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
    </header>
  )
}

export default Header
