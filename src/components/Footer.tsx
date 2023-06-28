import { Button, ButtonGroup, Container, Flex, Heading, Text, Input, Link, Stack } from "@chakra-ui/react";

export function Footer () {
    return (
        <Container display={"flex"} p={2}   bg={"#a1bf6e"}  ml={"auto"} mr={"auto"} maxW={"80%"}>
            

                <Flex flex={1}  direction={"column"} justifyContent={"center"} alignItems={"center"} alignSelf="flex-start">
                    <Heading size={"md"} color={"white"} >CandleShop</Heading>
                    <Stack p={2} alignItems={"center"} spacing={0} >
                        <Link fontSize={".9rem"} color={"white"} href="/" >Home</Link>
                        <Link fontSize={".9rem"} color={"white"} href="/store" >Store</Link>
                        <Link fontSize={".9rem"} color={"white"} href="/about" >About</Link>
                        <Link fontSize={".9rem"} color={"white"} href="/contact" >Contact</Link>
                    </Stack>
                    
                </Flex>

                <Flex flex={1} direction={"column"} alignItems={"center"}   alignSelf="flex-start" >
                    <Heading size={"md"} color={"white"}>
                        Contact
                    </Heading>
                    <Text fontSize={".7rem"} color={"white"} >+37065899416</Text>
                    <Text fontSize={".7rem"} color={"white"}>hubertas.geciauskas@gmail.com</Text>
                    <ButtonGroup  spacing={"0"} >
                        <Button colorScheme='white' >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                            <path fill="white" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
                        </Button>
                        <Button colorScheme='white' >
                        <svg xmlns="http://www.w3.org/2000/svg" width="13.3" height="13.3" viewBox="0 0 14 14">
                            <path fill="white" d="M7 0c3.87 0 7 3.13 7 7s-3.13 7-7 7s-7-3.13-7-7s3.13-7 7-7ZM5.72 10.69c3.1 0 4.8-2.57 4.8-4.8v-.22c.33-.24.62-.54.84-.88c-.3.13-.63.22-.97.27c.35-.21.62-.54.74-.93c-.33.19-.69.33-1.07.41c-.31-.33-.75-.53-1.23-.53c-.93 0-1.69.76-1.69 1.69c0 .13.01.26.05.38c-1.4-.07-2.65-.74-3.48-1.76c-.14.25-.23.54-.23.85c0 .58.3 1.1.75 1.4c-.28 0-.54-.08-.76-.21v.02c0 .82.58 1.5 1.35 1.66c-.14.04-.29.06-.44.06c-.11 0-.21-.01-.32-.03c.21.67.84 1.16 1.57 1.17c-.58.45-1.31.72-2.1.72c-.14 0-.27 0-.4-.02c.74.48 1.63.76 2.58.76" /></svg>
                        </Button>
                        <Button colorScheme='white' >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                            <path fill="white" d="M13.028 2.001a78.82 78.82 0 0 1 2.189.022l.194.007c.224.008.445.018.712.03c1.064.05 1.79.218 2.427.465c.66.254 1.216.598 1.772 1.154a4.908 4.908 0 0 1 1.153 1.771c.247.637.415 1.364.465 2.428c.012.266.022.488.03.712l.006.194a79 79 0 0 1 .023 2.188l.001.746v1.31a78.836 78.836 0 0 1-.023 2.189l-.006.194c-.008.224-.018.445-.03.712c-.05 1.064-.22 1.79-.466 2.427a4.884 4.884 0 0 1-1.153 1.772a4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465c-.267.012-.488.022-.712.03l-.194.006a79 79 0 0 1-2.189.023l-.746.001h-1.309a78.836 78.836 0 0 1-2.189-.023l-.194-.006a60.64 60.64 0 0 1-.712-.03c-1.064-.05-1.79-.22-2.428-.466a4.89 4.89 0 0 1-1.771-1.153a4.904 4.904 0 0 1-1.154-1.772c-.247-.637-.415-1.363-.465-2.427a74.367 74.367 0 0 1-.03-.712l-.005-.194A79.053 79.053 0 0 1 2 13.028v-2.056a78.82 78.82 0 0 1 .022-2.188l.007-.194c.008-.224.018-.446.03-.712c.05-1.065.218-1.79.465-2.428A4.88 4.88 0 0 1 3.68 3.68a4.897 4.897 0 0 1 1.77-1.155c.638-.247 1.363-.415 2.428-.465l.712-.03l.194-.005A79.053 79.053 0 0 1 10.972 2h2.056Zm-1.028 5A5 5 0 1 0 12 17a5 5 0 0 0 0-10Zm0 2A3 3 0 1 1 12.001 15a3 3 0 0 1 0-6Zm5.25-3.5a1.25 1.25 0 0 0 0 2.498a1.25 1.25 0 0 0 0-2.5Z"/></svg>
                        </Button>
                    </ButtonGroup>
                    <Text fontSize={".7rem"} color={"white"}>© 2023 CandleShop</Text>
                    <Text fontSize={".7rem"} color={"white"}>Website created by Hubertas Gečiauskas</Text>
                </Flex>

               <Flex flex={1}  direction={"column"} alignItems={"center"} alignSelf="flex-start" >
                    <Heading size={"md"} color={"white"}>
                        Newsletter
                    </Heading>
                    <Stack p={2} alignItems={"center"} spacing={2} >
                        <Input bg={"white"} placeholder="Enter your email here"></Input>
                        <Button size={"md"} bgColor={"#698338"}  >Join</Button>
                    </Stack>
                    
               </Flex>
               
           
        </Container>
    )
}