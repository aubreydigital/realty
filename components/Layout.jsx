import Head from 'next/head';
import { Box } from '@chakra-ui/react'

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
        <Head>
            <title>Damian Einbinder Realty</title>
        </Head>
        <Box maxWidth="1440px" m="auto">
            <header>
                <Navbar />
            </header>
            <main>
                {children}
            </main>
            <footer>
               <Footer />
            </footer>
        </Box>

</>
  )
}

export default Layout