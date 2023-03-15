import { useContext, useState } from 'react';
import Image from 'next/image';
import { Box, Icon, Flex} from '@chakra-ui/react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight} from 'react-icons/fa'
const loadImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN0MTauBwACmAErvsgWZwAAAABJRU5ErkJggg=="

const LeftArrow = () => {

    const { scrollPrev } = useContext(VisibilityContext);

    return (
        <Flex justifyContent="center" alignItems="center" marginRight="1">
            <Icon 
                as={FaArrowAltCircleLeft}
                    onClick={() => scrollPrev()}
                    fontSize="2xl"
                    cursor="pointer"
                    />
        </Flex>
    )
}

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
        <Flex justifyContent="center" alignItems="center" marginRight="1">
            <Icon 
                as={FaArrowAltCircleRight}
                    onClick={() => scrollNext()}
                    fontSize="2xl"
                    cursor="pointer"
                    />
        </Flex>
    )
}

const ImageScrollbar = ({ data }) => (
 
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{overflow: 'hidden'}} >
        {data.map((item) =>  {

            return (
            <Box width="210px" itemID={item.id} overflow="hidden" p="1" key={item.id}>
                          <Image alt={item.id} placeholder="blur" blurDataURL={item.href} src={item.href} key={item.id} width={1000} height={700} sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px"/>

            </Box>
        )})}
    </ScrollMenu>
)

export default ImageScrollbar