import Link from 'next/link';
import Image from 'next/image';
import {Box, Flex, Text, Avatar} from "@chakra-ui/react";
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';
import { Roboto } from 'next/font/google'

import { useState, useEffect } from 'react'
import defaultImage from "../assets/images/house.jpeg"
// const loadImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN0MTauBwACmAErvsgWZwAAAABJRU5ErkJggg=="
import { fetchAPI, baseUrl } from 'utils/fetchAPI';
const Property = ({ property: {property_id, beds, photo, price, sqft_raw, address}} ) => {
   const [details, setDetails] = useState('')
   const [location, setLocation] = useState('')
   const [smPhoto1, setSmPhoto1] = useState('')
   const [smPhoto2, setSmPhoto2] = useState('')

    useEffect(() => {
        const propertyDeets = async () => {
    const data = await fetchAPI(`https://realtor.p.rapidapi.com/properties/v3/detail/?property_id=${property_id}`)
    console.log(data)
    setDetails(data.data.home.description.text)
    setLocation(data.data.home.location.address.postal_code)
    setSmPhoto1(data.data.home.photos[1].href)
    setSmPhoto2(data.data.home.photos[2].href)
       
}
propertyDeets();
    }, [property_id])
    

  return (
    <Link href={`/${property_id}`} passHref>
        <Flex position="absolute" direction="column" textAlign="center" justifyContent="center" alignItems="center" marginLeft="1em" w='530px' h="380px">
                    <Box display="flex" textAlign="center" justifyContent="center" alignItems="center" h="9em" w="9em" backgroundColor="rgba(0,0,0,0.7)" textShadow="1px 1px 1px #000" borderRadius="full" p="15" boxShadow="20px 10px 30px #000" fontFamily="Roboto, sans-serif">
                        <Box display="block"><Text color="white"fontSize="2em">{price}</Text>
                    <Text color="white"fontSize="1.2em" mt="-2">{sqft_raw} sqft</Text>
                    </Box>
                    </Box>
                </Flex>
        <Flex flexWrap="wrap" overflow="hidden" border="1px solid #333" boxShadow="0px 30px 75px #333" borderRadius="7px" backgroundColor="white" w={{base: '450px', lg: '530px'}} h="380px" mx="2" p="4" cursor="pointer">
            <Box p="3" overflow="hidden" float="left">
                <Image placeholder="blur" blurDataURL={photo} src={photo ? photo: defaultImage} width="300" height="400" alt="title" />
               </Box><Box float="right" p="2"> 
               <Box opacity={{base: 0, lg: 1}} pb="3">
                <Image placeholder="blur" blurDataURL={smPhoto1} src={smPhoto1 ? smPhoto1: defaultImage} width="150" height="150" alt="title" />
                </Box>
                <Box opacity={{base: 0, lg: 1}}>
                <Image placeholder="blur" p="2" blurDataURL={smPhoto2} src={smPhoto2 ? smPhoto2: defaultImage} width="150" height="150" alt="title" />
                </Box>
             </Box>
                
                <Box mt={{base: '-3em', lg: 0}} fontFamily='Ubuntu,Verdana,Arial,Helvetica,sans-serif' fontSize=".9em" width="400px" overflow="hidden" color="#333">
                    <Text display="inline" fontWeight="bold" color="rgba(130,200,130,1)">&nbsp;Zipcode: </Text>{location}<br /> 
                    <Text display="inline" fontWeight="bold" px='1' color="rgba(130,200,130,1)">Bedrooms: </Text> {beds}<br/>
                    <Text px='1' fontWeight="bold" flexWrap="wrap" color="rgba(130,200,130,1)">Description:  </Text>&nbsp;{details.length > 75 ? details.substring(0, 75) + '...' : details}<br /> 
              
                
               
            </Box>
        </Flex>
    </Link>
  )
}


export default Property
