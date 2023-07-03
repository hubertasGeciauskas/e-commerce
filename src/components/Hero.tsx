import { Heading, Flex, Button, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export function Hero() {
  const [showHeading, setShowHeading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHeading(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        position="relative"
        height="500px"
      >
            <video src="/images/hero.mp4" autoPlay muted loop 
                style={{
                width: "100%", // Adjust the video width as needed
                height: "100%", // Adjust the video height as needed
                objectFit: "cover",
                background: "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))",
                }}
            />
                    <Heading position="absolute" top={"8%"} left={"5%"} color="white" style={{ opacity: showHeading ? 1 : 0, transition: "opacity 1s ease" }} >Handcrafted Candles for a Unique Experience</Heading>
                    <Text 
                    display={["none", "none", "flex", "flex"]}
                    top={"30%"}
                    width={"30%"} position="absolute"  left={"5%"} color="white" style={{ opacity: showHeading ? 1 : 0, transition: "opacity 1s ease" }} > Welcome to my handcrafted website, where I bring you a unique experience with my exquisite candles. Each candle is carefully crafted with love and passion to create a truly special ambiance for your home or any occasion. </Text>
                    <Button 
                    display={["flex", "flex", "flex", "flex"]}
                    top={["80%","50%","50%","50%",]}
                     right={["35%", "8%", "15%", "15%"]}
                    position="absolute" gap={2}
                    
                    as="a" href="/store" style={{ opacity: showHeading ? 1 : 0, transition: "opacity 10s ease" }} >
                        Shop now 
                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="16" viewBox="0 0 7 12">
                          <path fill="currentColor" d="M1.5 13a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71L5.3 7.99L1.15 3.85c-.2-.2-.2-.51 0-.71c.2-.2.51-.2.71 0l4.49 4.51c.2.2.2.51 0 .71l-4.5 4.49c-.1.1-.23.15-.35.15Z"/></svg>
                    </Button>
            
      </Flex>
    
  );
}