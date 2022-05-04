import katieimg from '../images/katie-zaferes.png'
import star from '../images/star.png'

function Card() {
  return (
    
        <div className="card--one">
              <img src={katieimg} alt="katie" className='img--katie' />
          <div className='card-info'>
              <img src={star} alt="star" className='img--star' />
              <span> 5.0 </span>
              <span className='gray'> (6) </span>
              <span className='gray'> - USA </span>
        </div>
        <p><span className='span--p'>From $136</span> / person</p>
     </div>
     
  )
}

export default Card
