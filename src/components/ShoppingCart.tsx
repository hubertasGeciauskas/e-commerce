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
  } from "@chakra-ui/react";
  import { useShoppingCart } from "../context/ShoppingCartContext";
  import { CartItem } from "./CartItem";
  import { formatCurrency } from "../utilities/formatCurrency";
  import storeItems from "../data/item.json";

  
  interface ShoppingCartProps {
    isOpen: boolean;
  }
  
  export function ShoppingCart({ isOpen }: ShoppingCartProps) {
    const { closeCart, cartItems } = useShoppingCart();

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
              <Flex justifyContent={"space-between"} >
                  <Text mr={5} color={"white"} >Cart</Text>
                  <Button onClick={closeCart} _hover={{opacity: "0.8"}} bg={"black"} >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024">
                    <path fill="white" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504L738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512L828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496L285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512L195.2 285.696a64 64 0 0 1 0-90.496z"/></svg>
                  </Button>
                
              </Flex>
              
            </ModalHeader>
            <ModalBody mt={5} >
              <Stack gap={3}>d
                {cartItems.map((item) => (
                  <CartItem key={item.id} {...item} />
                ))}
              </Stack>
              
            </ModalBody>
            <ModalFooter justifyContent={"space-around"} >
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
                    <Button _hover={{opacity: "0.9"}} bg={"black"} color={"white"} onClick={closeCart}>Checkout</Button>
                </ButtonGroup>
            </ModalFooter>
          </ModalContent>
        </Modal>



      </>
    );
  }