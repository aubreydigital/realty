import Link from 'next/link';
import Image from 'next/image';
import {Box, Flex, Text, Avatar} from "@chakra-ui/react";
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';

import defaultImage from "../assets/images/house.jpeg"

// const loadImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN0MTauBwACmAErvsgWZwAAAABJRU5ErkJggg=="

const Property = ({ property: {property_id, photo, price, beds, address, baths, sqft, sqft_raw, advertiser_id, isListing} }) => {
    
  return (
    <Link href={`/property/${property_id}`} passHref>
        <Flex position="absolute" direction="column" textAlign="center" justifyContent="center" alignItems="center" marginLeft="1em" w="530px" h="380px">
                    <Box display="flex" textAlign="center" justifyContent="center" alignItems="center" h="10em" w="10em" backgroundColor="rgba(0,0,0,0.7)" textShadow="1px 1px 1px #000" borderRadius="full" p="15" boxShadow="20px 10px 30px #000" fontFamily="Roboto, sans-serif">
                        <Box display="block"><Text color="white"fontSize="2em">{price}</Text>
                    <Text color="white"fontSize="1.2em" mt="-2">{sqft_raw} sqft</Text>
                    </Box>
                    </Box>
                </Flex>
        <Flex flexWrap="wrap" border="1px solid #333" boxShadow="0px 30px 75px #333" borderRadius="7px" backgroundColor="white" w="530px" h="380px" mx="2" p="4" cursor="pointer">
            <Box p="3" float="left">
                <Image placeholder="blur" blurDataURL={photo} src={photo ? photo: defaultImage} width="300" height="220" alt="title" />
               </Box><Box float="right" p="2"> 
               <Box pb="3">
                <Image placeholder="blur" blurDataURL={photo} src={photo ? photo: defaultImage} width="150" height="80" alt="title" />
                </Box>
                <Box>
                <Image placeholder="blur" p="2" blurDataURL={photo} src={photo ? photo: defaultImage} width="150" height="80" alt="title" />
                </Box>
            </Box>
            <Box w="full">
                <Flex paddingTop="2" alignItems="center" justifyContent="space-between">
                    <Flex alignItems="center">
                        {/* <Box paddingRight="3" color="green.400">{isVerified && <GoVerified />}</Box> */}
                        {/* <Text fontWeight="bold" fontSize="lg">AED {price}{rentFrequency && `/${rentFrequency}`}</Text> */}
                    </Flex>
                    <Box>
                        {/* <Avatar size="sm" src={agency?.logo?.url} /> */}
                    </Box>
                </Flex>
                <Box w="250px" display="inline-block" color="black">
                    <Text display="inline" color="green">&nbsp;Where: </Text>Las Vegas<br /> 
                    <Text display="inline" px='1' color="green">Bedrooms: </Text> {beds}<br/>
                    <Text display="inline" px='1' color="green">Description: </Text> 
                </Box>
                
                {/* <Text fontSize="lg">
                    {address.length > 30 ? `${address.substring(0,30)}...` : address}
                </Text> */}
            </Box>
        </Flex>
    </Link>
  )
}


export default Property