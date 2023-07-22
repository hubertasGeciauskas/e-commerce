import { Flex, Text, Image, Button, Heading } from "@chakra-ui/react";

export function AdSection () {
    return (
        <Flex direction={["column", "column", "column", "row"]} >
            <Flex
            
            bg={"#d0c893"}
            flex={1} 
            direction={["column", "row", "row", "row"]}  >
                <Image mx={"auto"} w={["80%", "50%", "50%", "50%"]} src="/images/SOY.webp"/>
                <Flex w={"50%"} direction={"column"} justifyContent={"center"} alignItems={"center"} gap={2}>
                    <Heading fontSize={"1.5rem"} >Soy Wax Candles</Heading>
                    <Text lineHeight={"1.3rem"} w={"80%"} fontSize={".8rem"} >Discover the allure of soy wax candles! Handcrafted with care, these eco-friendly candles offer superior quality, captivating fragrances, and a cleaner, longer-lasting burn. Experience the magic and check out my collection today!</Text>
                    <Button as={"a"} href={"/product"} bg={"#5a5c32"} color={"white"} gap={2} >
                        Shop now
                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="16" viewBox="0 0 7 12">
                          <path fill="currentColor" d="M1.5 13a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71L5.3 7.99L1.15 3.85c-.2-.2-.2-.51 0-.71c.2-.2.51-.2.71 0l4.49 4.51c.2.2.2.51 0 .71l-4.5 4.49c-.1.1-.23.15-.35.15Z"/></svg>
                    </Button>
                </Flex>
                
            </Flex>

            <Flex 
            p={2}
            flex={1}
            bg={"#d0c893"}
             direction={["column", "row-reverse", "row-reverse", "row"]} >
                <Image mx={"auto"} w={["80%", "40%", "50%", "50%"]} src="/images/Bundle.webp"/>
                <Flex  w={"50%"} direction={"column"} justifyContent={"center"} alignItems={"center"} gap={2}>
                    <Heading fontSize={"1.5rem"} >Candle Bundles</Heading>
                    <Text lineHeight={"1.3rem"} w={"80%"} fontSize={".8rem"} >Ignite your senses with our exclusive candle bundles! Handcrafted and thoughtfully curated, these unique collections offer versatility, elegance, and a touch of enchantment. Don't miss out, explore our candle bundles today!</Text>
                    <Button as={"a"} href={"/product"} bg={"#5a5c32"} color={"white"} gap={2} >
                        Shop now
                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="16" viewBox="0 0 7 12">
                          <path fill="currentColor" d="M1.5 13a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71L5.3 7.99L1.15 3.85c-.2-.2-.2-.51 0-.71c.2-.2.51-.2.71 0l4.49 4.51c.2.2.2.51 0 .71l-4.5 4.49c-.1.1-.23.15-.35.15Z"/></svg>
                    </Button>
                </Flex>
                
            </Flex>
            
            
        </Flex>
    )
}