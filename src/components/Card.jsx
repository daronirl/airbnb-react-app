


function Card(props) {
  return (
    
        <div className="card--one">
              <img src={props.imgSource} className="img--katie"/>
          <div className='card-info'>
              <img src={props.imgSourceTwo} className="img--star"/>
              {props.rating}
              <span className='gray'> {props.reviewCount} </span>
              <span className='gray'> - {props.country} </span>
              <span className='gray title'> {props.title} </span>
        </div>
        <p><span className='span--p'>From {props.price}</span> / person</p>
     </div>
     
  )
}

export default Card
