import { Flex, Link, Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

export function ShopNav () {

    const {pathname} = useLocation()
    const path2nd = pathname.match(/\d+/)?.[0];
    
    return (
        <Flex w={"80%"} direction={"column"} gap={10} mx={"auto"}   >

            <Text> <Link as="a" href="/product">Shop</Link> {path2nd && ">"}
                {path2nd &&  <Link as="a" fontWeight={"bold"} href={`product/${path2nd}`}>{path2nd}</Link>} </Text>
    
            
        </Flex>
    )
}