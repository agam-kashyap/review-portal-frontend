import React, { useState, useEffect } from "react";
import { Box, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { StarIcon } from '@chakra-ui/icons';

const Rating = React.forwardRef(
    ({ size, rate, setRate }, ref) => {
        const buttons = [];

        useEffect(() => {
                setRate(rate)
            }
        )
        const labels = {
            "1": "Awful",
            "2": "Ok",
            "3": "Good",
            "4": "Great",
            "5": "Awesome"
        };
        
        const fillColor = {
            "1": "red" ,
            "2": "coral" ,
            "3": "orange" ,
            "4": "teal" ,
            "5": "green"
        }

        const onClick = idx => {
            if (!isNaN(idx)) {
                // allow user to click first icon and set rating to zero if rating is already 1
                if (rate === 1 && idx === 1) {
                    setRate(0);
                } 
                else if (rate === 2 && idx === 2) {
                    setRate(0);
                } 
                else if (rate === 3 && idx === 3) {
                    setRate(0);
                } 
                else if (rate === 4 && idx === 4) {
                    setRate(0);
                } 
                else if (rate === 5 && idx === 5) {
                    setRate(0);
                } 
                else {
                    setRate(idx);
                }
            }
        };

        const RatingIcon = ({ fill, colorToFill }) => {
            return (
                <StarIcon 
                    w={{ base: 5, sm: 5, md: 7, lg: 10, xl: 10, '2xl': 10 }}
                    h={{ base: 5, sm: 5, md: 7, lg: 10, xl: 10, '2xl': 10 }}
                    color={colorToFill}
                    stroke={useColorModeValue('gray.900', 'white')}
                    onClick={onClick}
                    fillOpacity={fill ? "100%" : "0"}
                />
            );
        };

        const RatingButton = ({ idx, fill, colorToFill }) => {
            return (
                <Box
                    as="button"
                    aria-label={`Rate ${idx}`}
                    height={`${size}px`}
                    width={`${size}px`}
                    variant="unstyled"
                    mx={1}
                    onClick={() => onClick(idx)}
                    _focus={{ outline: 0 }}
                >
                    <RatingIcon fill={fill} colorToFill={colorToFill}/>
                </Box>
            );
        };

        for (let i = 1; i <= 5; i++) {
            buttons.push(<RatingButton key={i} idx={i} fill={i <= rate} colorToFill={fillColor[rate]}/>);
        }

        return (
            <Stack mt={4} spacing='4' direction='row' align='center'>
                <Stack direction='row'>
                    <input name="rating" type="hidden" value={rate} ref={ref} />
                    {buttons}
                </Stack>
                <Box width={'25'} textAlign="center">
                    <Text fontSize="lg" fontWeight="semibold" lineHeight="1.2em">
                        {labels[rate]}
                    </Text>
                </Box>
            </Stack>
        );
    }
);

Rating.displayName = "Rating";

export default Rating;
