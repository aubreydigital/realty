import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from '@chakra-ui/react'
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';
import damian from "../assets/images/damian.jpeg"
import Image from 'next/image'
const Navbar = () => {
    return <><Flex p="2" borderBottom="1px" backgroundColor="gray.300" borderRadius="6px" borderColor="gray.100">
        <Box m="auto" fontSize="3xl" color="blue.400" fontWeight="bold">
            <Flex flexWrap="wrap" p="5px" alignItems="center">
            <Box paddingRight="10px"><Image src={damian} alt="Damian Einbinder Realty Las Vegas Valley Henderson" height="200" width="100"></Image></Box>
            <Link href="/">Damian Einbinder Realty</Link>
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