import { Flex, Text, Image, Button, Heading } from "@chakra-ui/react";

export function AdSection () {
    return (
        <Flex >
            <Flex flex={1} >
                <Image w={"50%"} src="/images/SOY.webp"/>
                <Flex bg={"#d0c893"} w={"50%"} direction={"column"} justifyContent={"center"} alignItems={"center"} gap={2}>
                    <Heading fontSize={"1.5rem"} >Soy Wax Candles</Heading>
                    <Text w={"80%"} fontSize={".8rem"} >Lorem ipsum dolor imi quidem nemo beatae, dolorum enim deserunt expedita dolor laboriosam iusto nostrum nobis veniam, dignissimos architecto quisquam! Temporibus hic aspernatur nesciunt alias impedit maxime delectus dolores.</Text>
                    <Button>Shop now</Button>
                </Flex>
                
            </Flex>

            <Flex flex={1} >
                <Image w={"50%"} src="/images/Bundle.webp"/>
                <Flex bg={"#d0c893"} w={"50%"} direction={"column"} justifyContent={"center"} alignItems={"center"} gap={2}>
                    <Heading fontSize={"1.5rem"} >Candle Bundles</Heading>
                    <Text w={"80%"} fontSize={".8rem"} >Lorem ipsum dolor imi quidem nemo beatae, dolorum enim deserunt expedita dolor laboriosam iusto nostrum nobis veniam, dignissimos architecto quisquam! Temporibus hic aspernatur nesciunt alias impedit maxime delectus dolores.</Text>
                    <Button>Shop now</Button>
                </Flex>
                
            </Flex>
            
            
        </Flex>
    )
}