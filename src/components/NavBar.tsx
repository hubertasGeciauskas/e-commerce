import { Link, Stack, Button , Container, Flex, Menu, MenuButton, MenuList, MenuItem, } from "@chakra-ui/react"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { useLocation } from "react-router-dom"
import { useState, useRef } from "react"


export function NavBar () {
    const { openCart, cartQuantity} = useShoppingCart()
    const [isOpen, setIsOpen] = useState(false);
    const buttonRef = useRef(null);
    const menuRef = useRef(null);
  
    const handleToggle = () => {
        setIsOpen(!isOpen);
      };
    
      const handleMouseLeave = () => {
        setIsOpen(false);
      };


  

    const {pathname} = useLocation()
    
    return <Container h={"50px"}  alignItems={"center"}  bg={"#5a5c32"} maxW={"100%"} display={"flex"} justifyContent={"space-between"} style={{ position: "sticky", top: 0, zIndex: 999 }} >

                <Stack direction={"row"}  mr={"auto"} display={["none", "flex", "flex", "flex"]} >
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

                    <Menu isOpen={isOpen} onClose={() => setIsOpen(false)}>
                        <MenuButton color={"white"} ref={buttonRef} onMouseEnter={handleToggle}
                                    style={{ 
                                        borderBottom: pathname.includes("/product") ? "1px solid" : "",
                                        // pointerEvents: pathname.includes("/product") ? "none" : "auto",
                                        opacity: pathname.includes("/product") ? 1 : "", }}
                        >
                            Shop
                        </MenuButton>
                        <MenuList ref={menuRef} onMouseLeave={handleMouseLeave}>
                            <MenuItem as="a" href="/product">
                                Soy Wax Candles
                            </MenuItem>
                            <MenuItem as="a" href="#">
                                Canddle Bundles (not ready)
                            </MenuItem>
                        </MenuList>
                    </Menu>

                   

                    <Link
                    style={{ 
                     borderBottom: pathname === "/about" ? "1px solid" : "",
                     pointerEvents: pathname === "/about" ? "none" : "auto",
                     opacity: pathname === "/about" ? 1 : "", }}
                    color={"white"} href="/about"
                    >
                    About
                    </Link>
                </Stack>

                <Menu isLazy >
                            <MenuButton as={Button} display={["block", "none", "none", "none"]} bg={"#5a5c32"} _hover={{opacity: "0.7"}} _active={{}} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><g id="evaMenuOutline0"><g id="evaMenuOutline1"><g id="evaMenuOutline2" fill="white"><rect width="18" height="2" x="3" y="11" rx=".95" ry=".95"/>
                                <rect width="18" height="2" x="3" y="16" rx=".95" ry=".95"/><rect width="18" height="2" x="3" y="6" rx=".95" ry=".95"/></g></g></g></svg>
                            </MenuButton >
                            <MenuList style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", border: "none" }} >
                            <MenuItem bg={"transperant"} _hover={{opacity: "0.5"}} color={"white"} as='a' href='/'>Home</MenuItem>
                            <MenuItem bg={"transperant"} _hover={{opacity: "0.5"}} color={"white"} as='a' href='/product'>Shop</MenuItem>
                            <MenuItem bg={"transperant"} _hover={{opacity: "0.5"}} color={"white"} as='a' href='/about'>About</MenuItem>
                            </MenuList>
                        </Menu>

                <Stack direction={"row"}  >

                        

                    { cartQuantity > 0 &&  
                        <Button onClick={openCart} p={0}  _hover={{opacity: "0.7"}} _active={{}} variant={"outline"}  borderRadius={"100%"} w={"2.5rem"} h={"2.5rem"} position={"relative"} >
                            <svg xmlns="http://www.w3.org/2000/svg" height="25" width="25"  viewBox="0 0 24 24">
                            <path fill="white" d="M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M1 2v2h2l3.6 7.59l-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25c0-.05.01-.09.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2Z"/></svg>
                            <Flex  color={"white"} w={"1.1rem"} h={"1.1rem"} borderRadius={"100%"} justifyContent={"center"} position={"absolute"} bottom={0} right={0} alignItems={"center"} bg={"olive"} style={{transform: "translate(25%, 25%)"}} >{cartQuantity}</Flex>
                        </Button>}
                </Stack>
        
        
            </Container>
}