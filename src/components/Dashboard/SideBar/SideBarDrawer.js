import {
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  Box,
  Icon, 
  Image,
  HStack,
  Divider
} from '@chakra-ui/react';

import { 
  Menu,
} from '@material-ui/icons';

import SideBarContent from './SideBarContent';
import YoutubeLightLogo from '../../../assets/youtube_light.png';

const SideBar = (props) => {
  return (
    <DrawerOverlay>
      <DrawerContent w="240px" ml={-6}>
        <DrawerBody mr={-6}>
          
          <HStack pt={2} pb={4}>
            <Box as="button" 
              ml="30px"   
              mr={4} 
              onClick={props.closeDrawer} 
            >
              <Icon as={Menu} />
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
          
          <Divider/>

          <SideBarContent/>
        </DrawerBody>
        
      </DrawerContent>
    </DrawerOverlay>
  );
} 

export default SideBar;
