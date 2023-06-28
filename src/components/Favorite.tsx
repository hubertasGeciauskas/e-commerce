import { Flex, Text, Grid, GridItem } from "@chakra-ui/react";
import items from "../data/item.json"
import { StoreItem } from "./StoreItem";

export function Favorite () {
    return (

        <Flex  direction={"column"} alignItems={"center"} >
            <Text mt={3} mb={2} fontSize={"3xl"} > All-time favorite candles</Text>
            <Grid p={{base: "100px", md: "40px", lg: "15px", xl: "10px" }} templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 2fr)", xl: "repeat(4, 1fr)"}}  gap={6} >
            {items.map((x, i) => <GridItem key={i} >
                <StoreItem {...x} />
            </GridItem>)}
            
        </Grid>
        </Flex>
    )
}