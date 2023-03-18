import {useEffect, useState} from 'react'
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import Property from 'components/Property';
import { Flex, Box, Center, Text, Menu, MenuButton, MenuList, MenuGroup, MenuItem, MenuDivider, Button, Stack, Input, InputGroup, InputRightElement, Spacer } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react'
import { baseUrl, fetchAPI } from '../../utils/fetchAPI'
import { BsSearch } from 'react-icons/bs';
import splash from '../../assets/images/splash.png'

const searchHomes = () => {
  alert('Hol up');
}



const communities = ['Las Vegas', 'Henderson', 'Summerlin', 'Aliante', 'Anthem', 'Green Valley Ranch', 'Lake Las Vegas', 'Macdonald Ranch', 'Mountains Edge', 'North Las Vegas', 'Seven Hills', 'Silverado Ranch', 'Southern Highlands']

const Banner = ({ purpose,imageUrl, bgval, title1, desc1, linkName, buttonText }) => (
  <Flex backgroundImage={imageUrl} minWidth="100%" backgroundSize="cover" backgroundPosition="center" backgroundAttachment="fixed" direction="column" backgroundRepeat="no-repeat" flexWrap="wrap" marginX="auto" justifyContent="center" textAlign="center" alignItems="center" width="100vw" height="600px">
    {/* <Image src={imageUrl} width={500} height={300} alt="banner" /> */}
    <Box p="5">
      <Text fontSize={{base: '0', lg: '20px'}} fontWeight="bold">{title1}</Text>
      <Stack spacing={4}>
        
        <Text fontSize={{base: '3em', lg: '3em'}} borderRadius="6px" backgroundColor="rgba(0,0,0, 0.5)" color="white">{purpose}</Text>
      <Text fontSize="xl" paddingTop="3" fontWeight="600" paddingBottom="3" backgroundColor="rgba(0,0,0, .5)" color="rgba(50, 250, 50, 1)">{desc1}</Text>
      <InputGroup>
    <InputRightElement
      pt="2">
        <Button backgroundColor="white" h="1.75rem" size="sm" onClick={searchHomes}>
        <BsSearch/>
        </Button>
      </InputRightElement>
     
    <Input backgroundColor="white" width={{base: 300, lg: 400}} placeholder='City, Neighborhood, Street, Zip or MLS #' _placeholder={{ fontSize: 'xs' }}size='lg' />
    </InputGroup>
</Stack>
      {/* <Button fontSize="xl">
        <Link href={linkName}>{buttonText}</Link>
      </Button> */}<br />
    </Box>
    <Box textColor="white" backgroundColor="rgba(0,0,0, .5)" textTransform="uppercase" flexWrap="wrap">Local | Neighborhood Experts | 30,000+ Past Clients | $6B+ in Real Estate Sold
</Box>
  </Flex>
)

const community = (name) => {
  let comName = name
  name = name.replace(/\s/g, '');
  return (
  
  <Box width="200px" p="4" color="rgba(0,100,0,0.7)" textAlign="center"><Link color="green" alt={comName} href={`/communities/${name}`}>{comName}</Link></Box>
)}

export default function Home({ propertiesForSale }) {
  return (
    <Box>
    {/* <ChakraProvider> */}
    
    <Flex flexWrap="wrap">

       <Banner 
       bgval="blue"
       purpose={'Find A Home'}
       title1="I'll help you find the perfect home"
       title2="Perfect Home"
       desc1="Search Vegas Metro Area"
       buttonText="Explore Buying"
       linkName="/search?purpose-for-sale"
       imageUrl="https://3553780384f3502a3f9a-950c98ad79f09df6d37b35f914ae4e93.ssl.cf1.rackcdn.com/Las-Vegas-Luxury-Residential-Architecture.jpg" 
       /></Flex>
       <Flex justifyContent="center" pt="5" backgroundColor="rgba(200,200,200,0.2)">
        <h2 style={{ fontSize: '1.8em', fontWeight: 'bold'}}>Communities</h2>
        </Flex>
       <Flex flexWrap="wrap"  backgroundColor="rgba(200,200,200,0.2)" justifyContent="center">
        <Flex flexWrap="wrap" direction='column' width="100%" alignItems="center" justifyContent="space-between">
    
          <Flex justifyContent="center" flexWrap="wrap" alignItems="center">
         {communities.map((com) => community(com))}   
              
        

    
        </Flex>
       </Flex></Flex>
       <Flex justifyContent="center" backgroundColor="rgba(200,200,200,0.2)">
        <h2 style={{ fontSize: '1.8em', fontWeight: 'bold'}}>Featured Listings</h2>
        </Flex>
       <Flex flexWrap="wrap"  backgroundColor="rgba(200,200,200,0.2)" justifyContent="center">
       {propertiesForSale.map((property) => <Property property={property} key={property.id} />)}
        
        
        <Flex flexWrap="wrap" direction='column' width="100%" alignItems="center" justifyContent="space-between">
    
          <Flex justifyContent="center" flexWrap="wrap" alignItems="center">
         {/* {data.map((property) => <p>{property.address.line1}<br />{property.address.line2}</p>)}    */}
              {/* {data.map((p) => <><Link href={`/${p.address.line1}`}>{p.address.line1}</Link></>)} */}
        </Flex>
       </Flex></Flex>
       <Flex justifyContent="center" pt="5" backgroundColor="rgba(200,200,200,0.2)">
        <h2 style={{ fontSize: '1.8em', fontWeight: 'bold'}}>Neighborhoods</h2>
        </Flex>
       <Flex flexWrap="wrap"  backgroundColor="rgba(200,200,200,0.2)" justifyContent="center">
        {/* {propertiesForSale.map((property) => <Property property={property} key={property.id} />)} */}
        <Flex flexWrap="wrap" direction='column' width="100%" alignItems="center" justifyContent="space-between">
    
          <Flex justifyContent="center" flexWrap="wrap" alignItems="center">
         {communities.map((com) => community(com))}   
              
        

    
        </Flex>
       </Flex></Flex>
    {/* </ChakraProvider> */}
</Box>
  )
}

export async function getStaticProps() {
  const propertyForSale = await fetchAPI(`${baseUrl}/properties/list-for-sale?state_code=NV&city=Las Vegas&limit=2`)
  
  // const details = await fetchAPI(`${baseUrl}/properties/v3/detail/?property_id=${property.property_id}`)})

  return {
    props: {
      propertiesForSale: propertyForSale?.listings
    },
  };
}
