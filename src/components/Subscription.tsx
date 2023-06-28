import { Flex, Heading, Text, Button, Input, Stack } from "@chakra-ui/react";

export function Subscription () {
    return (
        <Flex p={2} direction={"column"} alignItems={"center"} >
            <Heading textAlign={"center"} w={"34%"} >Keep up to date on the latest products</Heading>
            <Text fontSize={".70rem"} >There might even be a deal in three for you</Text>
            <Stack p={1}  direction={"row"} >
                <Input borderColor={"black"} size={"sm"} placeholder="Enter your email here" />
                <Button bg={"#698338"} size={"sm"} >Join</Button>
            </Stack>
        </Flex>
    )
}