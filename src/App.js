import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Card from "./components/Card"



function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Card imgSource={require("./images/katie-zaferes.png")} 
            imgSourceTwo={require("./images/star.png")}
            rating="5.0"
            reviewCount="6" 
            country="USA"
            title="Life Lessons with Katie Zaferes"
            price="136"
       />
    </>
  )
}

export default App
