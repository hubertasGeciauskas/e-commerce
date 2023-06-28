import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/item.json";
import { Image, Text, Box, Flex, Button, ButtonGroup } from "@chakra-ui/react";
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
    <Flex gap={2} >
      <Image loading="lazy" w={"125px"} h={"75px"} objectFit="cover" src={item.imgUrl} />
      <Box>
          <Text>{item.name}</Text>
          <Text fontWeight={"bold"} fontSize=".75rem">{formatCurrency(item.price)}</Text>
          <ButtonGroup  alignItems={"baseline"} >
            <Button  onClick={() => decreaseCartQuantity(item.id)}>-</Button>
            <Text fontSize=".85rem">x{quantity}</Text>
            <Button onClick={() => increaseCartQuantity(item.id)}>+</Button>
          </ButtonGroup>
      </Box>
    </Flex>
  );
}