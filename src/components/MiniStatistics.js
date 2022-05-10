import {
    Flex,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
    Text,
  } from "@chakra-ui/react";
  // Custom components
  import Card from "./Card.js";
  // Custom icons
  import React from "react";
  
  export default function Default(props) {
    const { startContent, endContent, name, growth, value } = props;
    const textColor = useColorModeValue("secondaryGray.900", "white");
    const textColorSecondary = "secondaryGray.600";
  
    return (
      <Card py='15px'>
        <Flex
          px={'40%'}
          my='auto'
          h='100%'
          align={{ base: "center", xl: "start" }}
          justify={{ base: "center", xl: "center" }}
        >
          {startContent}
          <Stat my='auto' ms={startContent ? "10px" : "0px"}>
            <StatLabel
              lineHeight='100%'
              color={textColorSecondary}
              fontSize={{
                base: "sm",
              }}>
              {name}
            </StatLabel>
            <StatNumber
              color={textColor}
              fontSize={{
                base: "2xl",
              }}>
              {value}
            </StatNumber>
          </Stat>
          <Flex ms='auto' w='max-content'>
            {endContent}
          </Flex>
        </Flex>
      </Card>
    );
  }
  