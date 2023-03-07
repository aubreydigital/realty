import Link from 'next/link';
import Image from 'next/image';
import Property from 'components/Property';
import { Flex, Box, Center, Text, Menu, MenuButton, MenuList, MenuGroup, MenuItem, MenuDivider, Button } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react'
import { baseUrl, fetchAPI } from '../../utils/fetchAPI'

const Banner = ({ purpose,imageUrl, title1, title2, desc1, desc2, linkName, buttonText }) => (
  <Flex flexWrap="wrap" textAlign="center" alignItems="center" paddingTop="10em" m="10">
    <Image src={imageUrl} width={500} height={300} alt="banner" />
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
      <Text fontSize="3xl" fontWeight="bold">{title1}<br />{title2}</Text>
      <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">{desc1}<br />{desc2}</Text>
      <Button fontSize="xl">
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
)


export default function Home({ propertiesForSale }) {
  console.log(propertiesForSale)
  return (
    <Box>
    {/* <ChakraProvider> */}
    
    <Flex flexWrap="wrap" justifyContent="center" alignItems='center' gap='2' pos="top" top="1rem" marginX="auto">
</Flex>
       <Banner 
       purpose={'BUY A HOME'}
       title1="Find, Buy & Own Your"
       title="Dream Home"
       desc1=" Explore from Apartments, land, builder floors,"
       desc2=" villas and more"
       buttonText="Explore Buying"
       linkName="/search?purpose-for-sale"
       imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008" 
       />
       <Flex flexWrap="wrap">
        {propertiesForSale.map((property) => <Property property={property} key={property.id} />)}
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

