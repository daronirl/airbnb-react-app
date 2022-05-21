


function Card(props) {
      
      let badgeText
    if (props.item.openSpots === 0) {
      badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
      badgeText = "ONLINE"
    } 
     
  return (
    
        <div className="card--one">
              {badgeText && <div className="card--badge">{badgeText}</div>}
              <img src={`./images/${props.item.coverImg}`} alt="card" className="img--katie"/>
          <div className='card-info'>
          <img src="./images/star.png" alt="star" className="img--star" />
              {props.item.stats.rating}
              <span className='gray'> {props.item.stats.reviewCount} </span>
              <span className='gray'> - {props.item.location} </span>
              <span className='gray title'> {props.item.title} </span>
        </div>
        <p><span className='span--p'>From {props.item.price}</span> / person</p>
     </div>
     
  )
}

export default Card
