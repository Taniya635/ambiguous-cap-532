import React from 'react'
import {Box,Button,Image} from '@chakra-ui/react'


const Main = () => {
  return (
    <Box boxSize='sm'>
        <Image src="Images/main-page.jpg" alt='Main page' />
        <br />
        <Button>Shop Men</Button>
        <Button>Shop Women</Button>
    </Box>
  )
}

export default Main