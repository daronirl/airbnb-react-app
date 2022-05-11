import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Card from "./components/Card"
import katieimg from './images/katie-zaferes.png'


function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Card img="./images/katie-zaferes.png"
       rating="5.0" reviewCount="6" country="USA" title="Life Lessons with Katie Zaferes"
       price="136"
       />
    </>
  )
}

export default App
