import { Routes, Route} from "react-router-dom"
import { Container } from "@chakra-ui/react"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { About } from "./pages/About"
import { NavBar } from "./components/NavBar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import { Footer } from "./components/Footer"


function App() {

  return (
    <ShoppingCartProvider>
      <NavBar/>

      <Container bg={"white"} p={0}  maxW={"80%"} mr={"auto"} ml={"auto"} >
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/store" element={<Store/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </Container>

      <Footer/>
    </ShoppingCartProvider>
   
  )
}

export default App
