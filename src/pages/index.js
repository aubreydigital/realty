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

const Banner = ({ purpose,imageUrl, bgval, title1, desc1, linkName, buttonText }) => (
  <Flex backgroundImage={imageUrl} direction="column" bgSize="cover" flexWrap="wrap" marginX="auto" justifyContent="center" textAlign="center" alignItems="center" m="10" width="100vw" height="600px">
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


export default function Home({ propertiesForSale }) {
  console.log(propertiesForSale)
  return (
    <Box>
    {/* <ChakraProvider> */}
    
    <Flex flexWrap="wrap" >

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
       <Flex justifyContent="center">
        <h2 style={{ fontSize: '1.8em', fontWeight: 'bold'}}>Communities</h2>
        </Flex>
       <Flex flexWrap="wrap" justifyContent="center">
        {/* {propertiesForSale.map((property) => <Property property={property} key={property.id} />)} */}
        <Flex flexWrap="wrap" direction='column' width="100" alignItems="center" justifyContent="space-between">
    
          <Flex justifyContent="center" alignItems="center">
            <Box width="25vw" color="rgba(0,100,0,0.7)" textAlign="center" class="communities_text"><a href="/NV/las-vegas-homes" title="View Las Vegas, NV homes for sale.">Las Vegas</a></Box>
              
            <Box width="25vw" color="rgba(0,100,0,0.7)" textAlign="center" class="communities_text"><a href="/NV/henderson-homes" title="View Henderson, NV homes for sale.">Henderson</a></Box>
              
            <Box width="25vw" color="rgba(0,100,0,0.7)" textAlign="center" class="communities_text"><a href="/NV/summerlin-homes" title="View Summerlin, NV homes for sale.">Summerlin</a></Box>
            </Flex>
            <Flex>
              
            <Box width="25vw" color="rgba(0,100,0,0.7)" textAlign="center" class="communities_text"><a href="/NV/aliante-homes" title="View Aliante, NV homes for sale.">Aliante</a></Box>
              
            <Box width="25vw" color="rgba(0,100,0,0.7)" textAlign="center" class="communities_text"><a href="/NV/anthem-homes" title="View Anthem, NV homes for sale.">Anthem</a></Box>
              
            <Box width="25vw" color="rgba(0,100,0,0.7)" textAlign="center" class="communities_text"><a href="/NV/green-valley-homes" title="View Green Valley, NV homes for sale.">Green Valley</a></Box>
              
            </Flex><Flex>
            <Box width="25vw" color="rgba(0,100,0,0.7)" textAlign="center" class="communities_text"><a href="/NV/green-valley-ranch-homes" title="View Green Valley Ranch, NV homes for sale.">Green Valley Ranch</a></Box>
              
            <Box width="25vw" color="rgba(0,100,0,0.7)" textAlign="center" class="communities_text"><a href="/NV/lake-las-vegas-homes" title="View Lake Las Vegas, NV homes for sale.">Lake Las Vegas</a></Box>
              
            <Box width="25vw" color="rgba(0,100,0,0.7)" textAlign="center" class="communities_text"><a href="/NV/macdonald-ranch-homes" title="View Macdonald Ranch, NV homes for sale.">Macdonald Ranch</a></Box>
            </Flex>
            <Flex>
            <Box width="25vw" color="rgba(0,100,0,0.7)" textAlign="center" class="communities_text"><a href="/NV/mountains-edge-homes" title="View Mountains Edge, NV homes for sale.">Mountains Edge</a></Box>
              
            <Box width="25vw" color="rgba(0,100,0,0.7)" textAlign="center" class="communities_text"><a href="/NV/north-las-vegas-homes" title="View North Las Vegas, NV homes for sale.">North Las Vegas</a></Box>
              
            <Box width="25vw" color="rgba(0,100,0,0.7)" textAlign="center" class="communities_text"><a href="/NV/seven-hills-homes" title="View Seven Hills, NV homes for sale.">Seven Hills</a></Box>
            </Flex>
            <Box width="25vw" color="rgba(0,100,0,0.7)" textAlign="center" class="communities_text"><a href="/NV/silverado-ranch-homes" title="View Silverado Ranch, NV homes for sale.">Silverado Ranch</a></Box>
              
            <Box width="25vw" color="rgba(0,100,0,0.7)" textAlign="center" class="communities_text"><a href="/NV/southern-highlands-homes" title="View Southern Highlands, NV homes for sale.">Southern Highlands</a></Box>
              
        

    
        </Flex>
       </Flex>
    {/* </ChakraProvider> */}
</Box>
  )
}

export async function getStaticProps() {
  const propertyForSale = await fetchAPI(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)

  return {
    props: {
      propertiesForSale: propertyForSale?.hits
    }
  }

}

