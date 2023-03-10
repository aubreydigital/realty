import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from '@chakra-ui/react'
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch, BsHouse } from 'react-icons/bs';
import { FaFacebook, FaInstagram, FaEnvelope  } from 'react-icons/fa';
import { FiKey } from 'react-icons/fi';
import damian from "../assets/images/damian.jpeg"
import Image from 'next/image'
const Navbar = () => {
    return <><Flex p="2" borderBottom="1px" borderRadius="6px" borderColor="gray.100">
        <Box m="auto" fontSize="3xl" color="blue.400" fontWeight="bold"
    >
            <Flex p="5" flexWrap="wrap" alignItems="center">
            <Flex marginX="auto" p="30"><Image src={damian} alt="Damian Einbinder Realty Las Vegas Valley Henderson" height="200" width="auto"></Image></Flex>
            <Flex marginX="auto" p="10"><BsHouse /></Flex>
            <Flex marginX="auto"><Link href="/">Damian Einbinder Realty</Link>
            </Flex>
                        <Flex textAlign="center" marginX="auto" p="4">
                <Link href={'https://www.facebook.com/DamianEinbinderRealtor'} target="blank"><div style={{ marginRight: '10px', marginTop: '10px'}}><FaFacebook /></div></Link>
                <div style={{ marginRight: '10px', marginTop: '10px'}}><FaInstagram /></div>
                <div style={{ marginRight: '10px', marginTop: '10px'}}><FaEnvelope /></div>
                <Link href={'tel:7023710950'}> <div style={{ marginRight: '10px' }}>(702) 371-0950
</div></Link>
                </Flex>
            </Flex>
        </Box>
        <Spacer />
        <Box>
            <Menu>
                <MenuButton as={IconButton} icon={<FcMenu />} variant="outlined" color="red.400"/>
                <MenuList>
                    <Link href="/" passHref>
                        <MenuItem icon={<FcHome />}>Home</MenuItem>
                    </Link>
                    <Link href="/search" passHref>
                        <MenuItem icon={<BsSearch />}>Search</MenuItem>
                    </Link>
                    <Link href="/search?purpose=for-sale" passHref>
                        <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
                    </Link>
                </MenuList>
            </Menu>
        </Box>
    </Flex>
    </>
}

export default Navbar;