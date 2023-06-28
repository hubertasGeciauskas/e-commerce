import { Text, Grid, GridItem } from "@chakra-ui/react"
import items from "../data/item.json"
import { StoreItem } from "../components/StoreItem"
import { Subscription } from "../components/Subscription"

export function Store () {
    return (
    <>
        <Grid p={{base: "100px", md: "40px", lg: "15px", xl: "10px" }} templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 2fr)", xl: "repeat(4, 1fr)"}}  gap={6} >
            {items.map((x, i) => <GridItem key={i} >
                <StoreItem {...x} />
            </GridItem>)}
            
        </Grid>
        <Subscription/>
    </>
)}