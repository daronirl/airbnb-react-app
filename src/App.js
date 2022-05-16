import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Card from "./components/Card"
import data from "./data"

function App() {
  
  const cards = data.map((item) => {
    return (
      <Card 
      img={item.coverImg}
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount} 
      location={item.location}
      title={item.title}
      price={item.price}
 />
    )
  })

  return (
    <>
      <Navbar />
      <Header />
      {cards}
    </>
  )
}

export default App
