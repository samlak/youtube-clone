import React, { useState } from 'react';

import {
  Box,
  GridItem,
  InputGroup,
  Input,
  InputRightAddon,
  Icon,
  HStack,
  Image,
  Flex,
  Drawer,
  useDisclosure,
  useColorMode,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Switch,
  FormLabel
} from '@chakra-ui/react';

import { 
  Search, 
  Mic,
  VideoCall,
  Apps,
  Notifications,
  ArrowBack
} from '@material-ui/icons';

import { Menu as MenuMaterialIcon } from '@material-ui/icons'

import ProfilePic from '../../assets/profile.jpg';
// import YoutubeDarkLogo from '../../assets/youtube_dark.png';
import YoutubeLightLogo from '../../assets/youtube_light.png';
import SideBarDrawer from './SideBar/SideBarDrawer';

const Header = (props) => {
  const [onSearch, setOnSearch] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const btnRef = React.useRef();
  

  return (
    <GridItem colSpan={2}
      // position="fixed"
      w="100%"
    >
      <Flex 
        h="60px" 
        alignItems="center" 
        justify="space-between" 
        mx="30px"
        display={onSearch ? "none" : "flex"}
      >
        <HStack  w={["auto", "120px", "180px", "240px"]} >
          <Box 
            as="button"  
            mr={4} 
            ref={btnRef} 
            onClick={onOpen}
          >
            <Icon  as={MenuMaterialIcon} />
          </Box>
    
          <Image 
            src={YoutubeLightLogo} 
            objectFit="cover" 
            align="center"
            htmlHeight="20px"
            htmlWidth="80px"
            alt="Youtube Logo"  
          />
        </HStack>

        <Flex 
          flexGrow="1"
          mx={10} 
          justifyContent="flex-end"
        >
          <InputGroup 
            size="sm"
            display={["none", "none", "flex", "flex"]} 
          >
            <Input placeholder="Search" />
            <InputRightAddon children={<Icon  as={Search} color="gray.500" />} />
          </InputGroup>
          <Box ml={3}>
            <Icon  as={Mic} />
          </Box>
          <Box 
            as="button"
            ml={3}
            display={["block", "block", "none", "none"]}
            onClick={() => setOnSearch(true)}
          >
            <Icon as={Search} />
          </Box>
        </Flex>

        <HStack 
          w={["auto", "auto", "auto", "240px"]} 
          justifyContent="flex-end"
          spacing={["0", "20px", "20px", "30px"]} 
        >
          <Box>
            <Icon  as={VideoCall} />
          </Box>
          <Box>
            <Icon  as={Apps} />
          </Box>
          <Box>
            <Icon  as={Notifications} />
          </Box>
          
          <Menu closeOnSelect={false}>
            <MenuButton>
              <Image
                borderRadius="full"
                boxSize="30px"
                src={ProfilePic}
                alt="Profile Pic"
              />
            </MenuButton>
            <MenuList>
              <MenuItem>
                <Switch 
                  size="md" 
                  id="color-mode" 
                  onChange={toggleColorMode}
                  defaultChecked={colorMode === "light" ? "false" : "true"}
                  colorScheme="blackAlpha"
                />
                <FormLabel htmlFor="color-mode" ml="10px" mb="0">
                  {colorMode === "light" ? "Light" : "Dark"} Mode
                </FormLabel>
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack> 
      </Flex>

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <SideBarDrawer closeDrawer={onClose} />
      </Drawer>

      <Flex 
        h="60px" 
        alignItems="center" 
        justify="space-between" 
        mx="30px"
        display={onSearch ? "flex" : "none"}
      >
        <Box 
          mr={3}
          as="button"
          onClick={() => setOnSearch(false)}
        >
          <Icon as={ArrowBack} />
        </Box>
        <InputGroup 
          size="sm"
        >
          <Input placeholder="Search" />
          <InputRightAddon children={<Icon  as={Search} color="gray.500" />} />
        </InputGroup>
        <Box ml={3}>
          <Icon  as={Mic} />
        </Box>
      </Flex>

    </GridItem>     
  );
} 

export default Header;
