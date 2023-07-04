import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Button,
    Flex,
    Text,
    Stack,
    useStyleConfig,
    ButtonGroup,
    CloseButton
  } from "@chakra-ui/react";
  import { useShoppingCart } from "../context/ShoppingCartContext";
  import { CartItem } from "./CartItem";
  import { formatCurrency } from "../utilities/formatCurrency";
  import storeItems from "../data/item.json";

  
  interface ShoppingCartProps {
    isOpen: boolean;
  }
  
  export function ShoppingCart({ isOpen }: ShoppingCartProps) {
    const { closeCart, cartItems, cartQuantity } = useShoppingCart();

    const modalStyles = useStyleConfig("Modal", { variant: "custom" });
    const customStyles = {
      ...modalStyles,
      position: "fixed",
      top: 0,
      right: 0,
      transform: "translateY(-50%)",
      height: "100vh",
      overflowY: "auto",
      marginTop: 0,
      borderRadius: "5px 0 0 5px "
    };
  
    return (
      <>
        <Modal isOpen={isOpen} onClose={closeCart} size={"md"} >
          <ModalOverlay />
          <ModalContent sx={customStyles} >
            <ModalHeader bg={"black"}  >
              <Flex justifyContent={"space-between"} alignItems={"baseline"} >
                  <Text mr={5} color={"white"} > Your Cart</Text>
                  <Text fontSize={"md"} color={"gray"} >{cartQuantity} items</Text>
                  <CloseButton onClick={closeCart} size={"lg"} _hover={{opacity: "0.8"}} color={"white"} />
              </Flex>
              
            </ModalHeader>
            <ModalBody mt={5} >
              <Stack gap={3}>d
                {cartItems.map((item) => (
                  <CartItem key={item.id} {...item} />
                ))}
              </Stack>
              { cartQuantity > 0 && <Stack mt={5} direction={"row"} justifyContent={"space-around"} alignItems={"baseline"} >
                <Text as="b">
                    Total{" "}
                    {formatCurrency(
                      cartItems.reduce(
                        (total, cartItem) => {
                          const item = storeItems.find((i) => i.id === cartItem.id);
                          return total + (item?.price ?? 0) * cartItem.quantity;
                        },
                        0
                      )
                    )}
                  </Text>
                  <ButtonGroup>
                    <Button as={"a"} href="/checkout" _hover={{opacity: "0.9"}} bg={"black"} color={"white"} onClick={closeCart}>Checkout</Button>
                  </ButtonGroup>

              </Stack>}

              { cartQuantity === 0 && 
                    <Flex justifyContent={"center"} >
                    <Button _hover={{opacity: "0.9"}} bg={"black"} color={"white"} onClick={closeCart}>Continue shoping</Button>
                  </Flex>
              }
              
              
            </ModalBody>
            <ModalFooter >
                Here can be your AD
                
            </ModalFooter>
          </ModalContent>
        </Modal>



      </>
    );
  }