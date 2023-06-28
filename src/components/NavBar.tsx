import { Link, Stack, Button , Container, Flex } from "@chakra-ui/react"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { useLocation } from "react-router-dom"


export function NavBar () {
    const { openCart, cartQuantity} = useShoppingCart()

    const {pathname} = useLocation()
    
    return <Container h={"50px"}  alignItems={"center"}  bg={"#5a5c32"} maxW={"100%"} display={"flex"} style={{ position: "sticky", top: 0, zIndex: 999 }} >

                <Stack direction={"row"}  mr={"auto"} >
                    <Link 
                      style={{ 
                            borderBottom: pathname === "/" ? "1px solid" : "", 
                            pointerEvents: pathname === "/" ? "none" : "auto",
                            opacity: pathname === "/" ? 1 : "", }}
                      color={"white"}
                      href="/"
                     >
                    Home
                    </Link>

                    <Link
                    style={{ borderBottom: pathname === "/store" ? "1px solid" : "", pointerEvents: pathname === "/store" ? "none" : "auto",
                    opacity: pathname === "/store" ? 1 : "", }}
                    color={"white"} href="/store">Store</Link>
                    <Link
                    style={{ borderBottom: pathname === "/about" ? "1px solid" : "",
                     pointerEvents: pathname === "/about" ? "none" : "auto",
                    opacity: pathname === "/about" ? 1 : "", }}
                    color={"white"} href="/about">About</Link>
                </Stack>

                <Stack direction={"row"} >
                    { cartQuantity > 0 &&  
                        <Button onClick={openCart} p={0}  _hover={{opacity: "0.7"}} variant={"outline"}  borderRadius={"100%"} w={"2.5rem"} h={"2.5rem"} position={"relative"} >
                            <svg xmlns="http://www.w3.org/2000/svg" height="25" width="25"  viewBox="0 0 24 24">
                            <path fill="white" d="M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M1 2v2h2l3.6 7.59l-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25c0-.05.01-.09.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2Z"/></svg>
                            <Flex  color={"white"} w={"1.1rem"} h={"1.1rem"} borderRadius={"100%"} justifyContent={"center"} position={"absolute"} bottom={0} right={0} alignItems={"center"} bg={"olive"} style={{transform: "translate(25%, 25%)"}} >{cartQuantity}</Flex>
                        </Button>}
                </Stack>
        
        
            </Container>
}