import { Box, Flex, Grid, GridItem, Icon, IconButton, Link, LinkBox, Menu, MenuButton, MenuItem, MenuList, Spacer, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import { React, useContext, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { FcAbout, FcDown, FcHome, FcMenu } from 'react-icons/fc';
import { AuthProvider } from '../contexts/AuthContext';
import { auth, provider } from '../firebase';


export const DropDown = () =>{
    const {isOpen,onOpen,onClose} = useDisclosure();


    

    return(
        <DropDown>
        <Menu isLazy 
        direction="col"
        isOpen={isOpen}
        variant="ghost"
        mx={1}
        py={[1,2,2]}
        px={4}
        borderRadius={5}
        _hover={{bg:useColorModeValue("gray.500","gray.700")}}
        aria-label="Courses"
        fontWeight="normal"
        onMouseEnter={onOpen}
        onMouseLeave={onClose}>
        Menu{isOpen ? <FcHome />: <FcHome />
    }
        <MenuButton as={IconButton} size="lg" icon={<FcMenu />} variant="outlined" color="black"></MenuButton>
        <MenuList>
            <Link href="/" passhref="true">
                <MenuItem icon={<FcHome />}>Account</MenuItem>
                </Link>
                <Link href="/Search" passhref="true">
                <MenuItem icon={<BsSearch />}>Search Listings</MenuItem>
                </Link>

                <Link href="/Search" passhref="true">
                <MenuItem icon={<FcAbout />}>Buy Properties</MenuItem>
                </Link>
        </MenuList>
        </Menu>
        </DropDown>
    )
}
    

export const Header = () =>{
    const [auth, setAuth] = useState(false);
    const [dropDown,setDropDown] = useState(false);
    const useEffect = () =>{
        if(localStorage.getItem('isAuth') === 'true'){
            setAuth(true);
            setDropDown(true);
    
    }  else{
        setAuth(false);
        setDropDown(false);
    }

    return(
        
        <Flex  direction="row" borderColor="gray.100" borderBottom="1px" p="0" >
        <Header>
            <Box fontSize="20px" color="rgb(196,196,196)" alignItems="end">
                <LinkBox align="left" href="/" fontFamily="Garamond" fontSize="20px"><FcHome />MNC Development 3.20</LinkBox>
            </Box>
            <Spacer />
            <Box>
             <DropDown />
            </Box>
        
        
        </Header>
        </Flex>
    )
    }
}

export default Header;