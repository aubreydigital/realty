import { Box, Flex, Spacer, Text, Avatar } from '@chakra-ui/react';
import { FaBed, FaBath, FaAddressBook } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';

import { baseUrl, fetchAPI } from '../../../utils/fetchAPI'
import ImageScrollbar from 'components/ImageScrollbar';

const PropertyDetails = ({ propertyDetails}) => {
    return (
    <Box maxWidth="1000px" margin="auto" p="4">
        {/* {console.log(propertyDetails.data.home)} */}
        {propertyDetails.data.home.photos && <ImageScrollbar data={propertyDetails.data.home.photos} />}
        <Box w="full" p="6">
        <Flex paddingTop="2" alignItems="center">
        <Flex alignItems="center" direction="column">
        <Text fontSize="lg" marginBottom="2" fontWeight="bold">
        {propertyDetails.data.home.location.address.line} {propertyDetails.data.home.location.address.city}, {propertyDetails.data.home.location.address.state_code} {propertyDetails.data.home.location.address.postal_code}
    </Text>
            {/* {/* <Box paddingRight="3" color="green.400">{isVerified && <GoVerified />}</Box>  */}
            <Text fontWeight="bold" fontSize="lg">${propertyDetails.data.home.list_price}</Text>
            <Text fontWeight="bold" fontSize="lg">Hoa: ${propertyDetails.data.home.hoa.fee}/mo</Text>
        </Flex>
        </Flex>
        </Box>
            <Avatar size="sm" src={propertyDetails.data.home.advertisers[0].photo.href} />
            {propertyDetails.data.home.advertisers.map((a) => `${a.name}`)}
    <Flex alignItems="center" p="1" w="250px" color="blue.400">
        {propertyDetails.data.home.description.beds} <FaBed /> | {propertyDetails.data.home.description.baths} <FaBath /> | {propertyDetails.data.home.description.sqft} <BsGridFill />
    </Flex>
    <Box marginTop="2">
    
    <Text lineHeight="2" color="gray.600">{propertyDetails.data.home.description.text}</Text>
    </Box>
    <Box>
        {/* {amenities.length && <Text fontSize="2xl" fontWeight="black" marginTop="5">Amenities:</Text>}
            <Flex flexWrap="wrap">
                {amenities.map((i) => (
                    i.amenities.map((amenity) => (
                        <Text fontWeight="bold" color="blue.400" fontSize="l" p="2" bg="gray.200" m="1" borderRadius="5" key={amenity.text}>{amenity.text}</Text>
                    ))
                ))} */}
            {/* </Flex> */}
    </Box>
    </Box>
)}

export default PropertyDetails;

export async function getServerSideProps({ params: { id }}) {
    const data = await fetchAPI(`https://realtor.p.rapidapi.com/properties/v3/detail/?property_id=${id}`)

     return {
        props: {
            propertyDetails: data
        }
     }
}
