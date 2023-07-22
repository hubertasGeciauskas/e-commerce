import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/item.json";
import { Image, Text, Flex, Button, ButtonGroup, Divider } from "@chakra-ui/react";
import { formatCurrency } from "../utilities/formatCurrency";

interface CartItemProps {
  id: number;
  quantity: number;
}

export function CartItem({ id, quantity }: CartItemProps) {
  const { increaseCartQuantity, decreaseCartQuantity } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);

  if (!item) return null;

  return (
    <Flex direction={"column"} gap={"1rem"} >

      <Flex direction={"row"} >

        <Flex flex={2} >
          <Image loading="lazy" w={"125px"} h={"75px"} objectFit="cover" src={item.imgUrl} />
        </Flex>

        <Flex flex={4} direction={"column"} >
          <Text>{item.name}</Text>
          <Flex flex={3} direction={"row"} gap={".3rem"} justifyContent={"flex-start"} alignItems={"center"} >
            
            <ButtonGroup isAttached border={"1px solid"} alignItems={"baseline"} justifyContent="flex-start" >
              <Button fontWeight={"bold"} borderRight={"1px solid"} w={"40px"} colorScheme="white" color={"black"}  onClick={() => decreaseCartQuantity(item.id)}>-</Button>
              <Text fontWeight={"bold"} textAlign={"center"} w={"40px"} fontSize=".85rem">{quantity}</Text>
              <Button fontWeight={"bold"} borderLeft={"1px solid"} w={"40px"} colorScheme="white" color={"black"} onClick={() => increaseCartQuantity(item.id)}>+</Button>
            </ButtonGroup>
            
        </Flex>

        </Flex>

        

        <Flex flex={1} justifyContent={"flex-end"} >
          {quantity === 1 && <Text color={"gray"} display={"flex"} alignItems={"flex-end"}  fontWeight={"bold"} fontSize=".75rem">{formatCurrency(item.price)}</Text>}
          {quantity > 1 && <Text color={"gray"} display={"flex"} alignItems={"flex-end"}  fontWeight={"bold"} fontSize=".75rem">{quantity} x {formatCurrency(item.price)}</Text>}
        </Flex>
        
      </Flex>

      <Divider/>

    </Flex>
  );
}