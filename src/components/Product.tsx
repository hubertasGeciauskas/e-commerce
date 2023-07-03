import { useParams } from "react-router-dom";
import items from "../data/item.json";
import { Flex, Image, Heading, Text, Button } from "@chakra-ui/react";
import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function Product() {
  const { id } = useParams();
  
  const product = items.find(item => item.id === Number(id)) || {
    id,
    name: "",
    imgUrl: "",
    price: 0,
  };
  const { imgUrl, name, price,  } = product;
  const { increaseCartQuantity } = useShoppingCart();

  return (

    
    <Flex>
      <Flex flex={1} position={"relative"} >
        <Image src={imgUrl}  />
        <Button colorScheme="white" position={"absolute"} left={"12%"} top={"40%"} >
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 15 15">
            <path fill="gray" d="M3 7.5L11 0v15L3 7.5Z"/></svg>
        </Button>
        <Button colorScheme="white" position={"absolute"} right={"12%"} top={"40%"} >
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 15 15">
          <path fill="gray" d="M12 7.5L4 0v15l8-7.5Z"/></svg>
        </Button>

        
      </Flex>
      <Flex mt={200} direction={"column"} alignItems={"flex-end"} flex={1} >
        {/* <Stack direction={"row"} mr={"10%"} >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256">
              <path fill="gray" d="m234.5 114.38l-45.1 39.36l13.51 58.6a16 16 0 0 1-23.84 17.34l-51.11-31l-51 31a16 16 0 0 1-23.84-17.34l13.49-58.54l-45.11-39.42a16 16 0 0 1 9.11-28.06l59.46-5.15l23.21-55.36a15.95 15.95 0 0 1 29.44 0L166 81.17l59.44 5.15a16 16 0 0 1 9.11 28.06Z"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256">
              <path fill="gray" d="m234.5 114.38l-45.1 39.36l13.51 58.6a16 16 0 0 1-23.84 17.34l-51.11-31l-51 31a16 16 0 0 1-23.84-17.34l13.49-58.54l-45.11-39.42a16 16 0 0 1 9.11-28.06l59.46-5.15l23.21-55.36a15.95 15.95 0 0 1 29.44 0L166 81.17l59.44 5.15a16 16 0 0 1 9.11 28.06Z"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256">
              <path fill="gray" d="m234.5 114.38l-45.1 39.36l13.51 58.6a16 16 0 0 1-23.84 17.34l-51.11-31l-51 31a16 16 0 0 1-23.84-17.34l13.49-58.54l-45.11-39.42a16 16 0 0 1 9.11-28.06l59.46-5.15l23.21-55.36a15.95 15.95 0 0 1 29.44 0L166 81.17l59.44 5.15a16 16 0 0 1 9.11 28.06Z"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256">
              <path fill="gray" d="m234.5 114.38l-45.1 39.36l13.51 58.6a16 16 0 0 1-23.84 17.34l-51.11-31l-51 31a16 16 0 0 1-23.84-17.34l13.49-58.54l-45.11-39.42a16 16 0 0 1 9.11-28.06l59.46-5.15l23.21-55.36a15.95 15.95 0 0 1 29.44 0L166 81.17l59.44 5.15a16 16 0 0 1 9.11 28.06Z"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256">
              <path fill="gray" d="m234.5 114.38l-45.1 39.36l13.51 58.6a16 16 0 0 1-23.84 17.34l-51.11-31l-51 31a16 16 0 0 1-23.84-17.34l13.49-58.54l-45.11-39.42a16 16 0 0 1 9.11-28.06l59.46-5.15l23.21-55.36a15.95 15.95 0 0 1 29.44 0L166 81.17l59.44 5.15a16 16 0 0 1 9.11 28.06Z"/></svg>

              <Text>0 Reviews</Text>
            </Stack> */}
        <Flex mt={8} w={"80%"} ml={"auto"} mr={"auto"} gap={10} alignContent={"flex-start"} direction={"column"} >
          <Heading textAlign={"center"}  >{name}</Heading>
          <Text textAlign={"center"}>200 g</Text>
          <Text >In a small workshop, passionate candle makers set out to create something extraordinary. They chose soy wax, a natural and eco-friendly alternative to traditional candles. Carefully blending fragrances and pouring them into elegant containers, they crafted soy wax candles that captivated with their clean burn and enchanting scents. Word spread, and these candles became a symbol of relaxation and mindful living. Today, their story continues, illuminating homes and hearts with the beauty of nature's gifts.</Text>
          <Text  as={"b"} textAlign={"center"}>{formatCurrency(price)}</Text>
          <Button bg={"black"} color={"white"} onClick={() => increaseCartQuantity(Number(id))} >Add to Cart</Button>
        </Flex>
        
        
      </Flex>
    </Flex>
  );
}