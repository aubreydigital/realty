import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from '@chakra-ui/react'
import { FcMenu, FcHome, FcAbout, FcPhone } from 'react-icons/fc';
import { BsSearch, BsHouse } from 'react-icons/bs';
import { FaFacebook, FaInstagram, FaEnvelope  } from 'react-icons/fa';
import { FiKey } from 'react-icons/fi';
import damian from "../assets/images/damian.jpeg"
import Image from 'next/image'
const Navbar = () => {
    return <><Flex p="2" borderBottom="1px" borderRadius="6px" borderColor="gray.100">
        <Box m="auto" fontSize={{base: '30px', lg: '44px'}} color="blue.400" fontWeight="600"
    >
            <Flex p="2" flexWrap="wrap" direction="column">
            {/* <Flex marginX="auto" p="30"><Image src={damian} alt="Damian Einbinder Realty Las Vegas Valley Henderson" height="200" width="auto"></Image></Flex> */}
            {/* <Flex marginX="auto" p="10"><BsHouse /></Flex> */}
            <Flex flexWrap="nowrap" marginX="auto" paddingLeft="10"><Link href="/">Damian Einbinder Realty</Link>
            </Flex>
                        <Flex marginX="auto" fontSize='20px' p="4">
                <Flex paddingX="10px"><Link href={'https://www.facebook.com/DamianEinbinderRealtor'} target="blank"><FaFacebook /></Link></Flex>
                <Flex paddingX="10px"><Link href={'https://www.instagram.com/bigmoneyrealty/'} target="blank"><div><FaInstagram /></div></Link></Flex>
                <Flex paddingX="10px"><Link href={'mailto: deinbinder@easystreetrealty.com'}><div><FaEnvelope /></div></Link></Flex><br />
                <Flex paddingX="10px" flexWrap="nowrap" mt="-2"><Link href={'tel:7023710950'}> <div>(702) 371-0950</div></Link></Flex>

                </Flex>
            </Flex>
        </Box>
        <Spacer />
        <Box>
            <Menu>
                <MenuButton as={IconButton} icon={<FcMenu />} px={4}
    py={4}
    mr={2}
    mt={7}
    transition="all 0.2s"
    borderRadius="md"
    borderWidth="1px"
    _hover={{ bg: "blue.200" }}
    _expanded={{ bg: "blue.400" }}
    _focus={{ boxShadow: "outline" }} />
                <MenuList>
                    <Link href="/" passHref>
                        <MenuItem icon={<FcHome />}>Home</MenuItem>
                    </Link>
                    <Link href="/" passHref>
                        <MenuItem icon={<FcAbout />}>About</MenuItem>
                    </Link>
                    <Link href="/search" passHref>
                        <MenuItem icon={<BsSearch />}>Search Homes</MenuItem>
                    </Link>
                    <Link href="/" passHref>
                        <MenuItem icon={<FcHome />}>Testimonials</MenuItem>
                    </Link>
                    <Link href="/" passHref>
                        <MenuItem icon={<FcPhone />}>Contact</MenuItem>
                    </Link>
                    <Link href="/" passHref>
                        <MenuItem icon={<FcHome />}>Mortgages</MenuItem>
                    </Link>
                    <Link href="/" passHref>
                        <MenuItem icon={<FcHome />}>Testimonials</MenuItem>
                    </Link>
                </MenuList>
            </Menu>
        </Box>
    </Flex>
    </>
}

export default Navbar;