import { Box, Heading, Flex, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";


export function Hero () {
    const [showHeading, setShowHeading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
        setShowHeading(true);
      }, 1000);
  
      return () => clearTimeout(timer);
  }, []);
    return (
    
        <Box h={"200px"} w={"100%"}
            bgImg={"/images/hero.jpg"}
            bgSize="cover"
            bgPosition="center"
            >
                <Flex
                    h="100%"
                    justifyContent="center"
                    alignItems={"center"}
                    flexDirection="column"
                    p="1rem"
                    bgGradient="linear(to-t, rgba(0,0,0,0.7), rgba(0,0,0,0))"
                    gap={10}
                    >
                    <Heading color="white" style={{ opacity: showHeading ? 1 : 0, transition: "opacity 0.5s ease" }} >Handcrafted Candles for a Unique Experience</Heading>
                    <Button style={{ opacity: showHeading ? 1 : 0, transition: "opacity 4s ease" }}>Shop now</Button>
                </Flex>
                


        </Box>
        
        
    )
}