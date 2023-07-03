import { Routes, Route} from "react-router-dom"
import { Container } from "@chakra-ui/react"
import { HomePage } from "./pages/HomePage"
import { ShopPage } from "./pages/ShopPage"
import { AboutPage } from "./pages/AboutPage"
import { NavBar } from "./components/NavBar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import { Footer } from "./components/Footer"
import { CheckoutPage } from "./pages/CheckoutPage"
import { ProductPage } from "./pages/ProductPage"


function App() {

  return (
    <ShoppingCartProvider>
      <NavBar/>
      <Container bg={"white"} p={0} maxW={"100%"}  >
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/product" element={<ShopPage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/checkout" element={<CheckoutPage/>} />
          <Route path="/product/:id" element={<ProductPage/>}  /> 
        </Routes>
      </Container>

      <Footer/>
    </ShoppingCartProvider>
   
  )
}

export default App
