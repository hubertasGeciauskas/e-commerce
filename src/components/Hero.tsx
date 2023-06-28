import { Box, Heading, Flex, Button } from "@chakra-ui/react";


export function Hero () {
    return (
    
        <Box h={"300px"}
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
                    <Heading color="white">Handcrafted Candles for a Unique Experience</Heading>
                    <Button>Shop now</Button>
                </Flex>
                


        </Box>
        
        
    )
}