import { Button, Image, Text, Card, CardHeader, CardBody, Heading } from "@chakra-ui/react";
import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { useState } from "react";

interface StoreItemProps {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const { increaseCartQuantity } = useShoppingCart();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Card
      className="my-card"
      border={isHovered ? "1px solid " : "1px solid white"}
      shadow={"md"}
      borderRadius="lg"
      overflow="hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      >
        <CardHeader
          p={0}
          mb={2}
          position={"relative"}
          >
            <Image
              loading="lazy"
              h={"200px"}
              w={"100%"}
              src={imgUrl}
              transform={isHovered ? "scale(1.1)" : "scale(1)"}
              transition="transform 0.3s"
            />
            {isHovered && (
              <div
                style={{
                  position: "absolute",
                  bottom: "10px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button
                  as={"a"}
                  colorScheme="blackAlpha"
                  size="sm"
                  width={"50px"}
                  m={2}
                  href={`/product/${id}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                    <circle cx="16" cy="16" r="4" fill="currentColor"/><path fill="currentColor" d="M30.94 15.66A16.69 16.69 0 0 0 16 5A16.69 16.69 0 0 0 1.06 15.66a1 1 0 0 0 0 .68A16.69 16.69 0 0 0 16 27a16.69 16.69 0 0 0 14.94-10.66a1 1 0 0 0 0-.68ZM16 22.5a6.5 6.5 0 1 1 6.5-6.5a6.51 6.51 0 0 1-6.5 6.5Z"/></svg>
                </Button>
                <Button
                  colorScheme="blackAlpha"
                  size="sm"
                  width={"50px"}
                  m={2}
                  onClick={() => increaseCartQuantity(id)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 6h19l-3 10H6L3 6Zm0 0l-.75-2.5M9.992 11h2m2 0h-2m0 0V9m0 2v2M11 19.5a1.5 1.5 0 0 1-3 0m9 0a1.5 1.5 0 0 1-3 0"/></svg>
                </Button>
              </div>
            )}
        </CardHeader>

        <CardBody p={0} mb={2} textAlign={"center"}>
          <Heading size={"md"}>{name}</Heading>
          <Text>{formatCurrency(price)}</Text>
        </CardBody>

    </Card>
  );
}