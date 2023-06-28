import { Button, Image, Text, Card, CardHeader, CardBody, CardFooter, Heading,  } from "@chakra-ui/react";
import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { useState } from "react";

interface StoreItemProps {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  hoverImgUrl: string;
}

export function StoreItem({ id, name, price, imgUrl, hoverImgUrl }: StoreItemProps) {
  const {
    increaseCartQuantity
  } = useShoppingCart();
  
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card _hover={{border: "1px solid"}} shadow={"md"} borderRadius="lg" overflow="hidden" 
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}>
        
      <CardHeader p={0} mb={2} position={"relative"}>
        <Image  loading="lazy" h={"200px"} w={"100%"} src={isHovered? hoverImgUrl : imgUrl} />
        {isHovered && <Button borderRadius={0} w={"100%"} position={"absolute"} bottom={0} >View Product</Button> }  
      </CardHeader>

      <CardBody p={0} mb={2} textAlign={"center"}>
        <Heading size={"md"} >{name}</Heading>
        <Text>{formatCurrency(price)}</Text>
      </CardBody>

      <CardFooter minH={"88px"} flexDirection={"column"} p={0} mb={2} justifyContent={"center"}  alignItems="center" >
        <Button bg={"#a1ad59"} onClick={() => increaseCartQuantity(id)}>+ Add To Cart</Button>
      </CardFooter>
                 
    </Card>
  );
}