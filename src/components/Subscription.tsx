import { Flex, Heading, Text, Button, Input, Stack } from "@chakra-ui/react";

export function Subscription () {
    return (
        <Flex>
            <Flex flex={1} p={10}
                height="600px" 
                width="500px"
            >
                    <video src="/images/subscription.mp4" autoPlay muted loop 
                        style={{
                        width: "100%", 
                        height: "100%", 
                        }}
                    />
                    
            </Flex>
            <Flex flex={1} p={10} direction={"column"} gap={3} alignItems={"center"} justifyContent={"center"} >
                <Heading  textAlign={"center"} >Stay Updated with the Latest Products</Heading>
                <Text textAlign={"center"}  fontSize={".9rem"} >Be the First to Know About Exciting Offers and New Releases</Text>
                <Text  lineHeight={"1.3rem"} fontSize={".9rem"} >Subscribe to our newsletter and never miss out on the latest products, exclusive deals, and special promotions. As a subscriber, you'll receive timely updates straight to your inbox, giving you a competitive edge in discovering new releases before anyone else. Whether you're a tech enthusiast, a fashion aficionado, or simply looking for great deals, our newsletter will keep you informed and satisfied.</Text>
                <Stack mt={5} p={1} direction={"row"} >
                <Input borderColor={"black"} size={"sm"} type="email" placeholder="Enter your email address" />
                <Button bg={"#5a5c32"} color={"white"} size={"sm"} >Subscribe</Button>
                </Stack>
            </Flex>
            
        </Flex>
    )
}