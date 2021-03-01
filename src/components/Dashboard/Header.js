import {
  Box,
  GridItem,
  VStack,
  StackDivider,
  InputGroup,
  Input,
  InputRightAddon,
  Icon,
  HStack,
  Image,
  Button,
  ButtonGroup
} from '@chakra-ui/react';

import { 
  Search, 
  Mic,
  VideoCall,
  Apps,
  Notifications,
  Menu
} from '@material-ui/icons';

import ProfilePic from '../../assets/profile.jpg';
// import YoutubeDarkLogo from '../../assets/youtube_dark.png';
import YoutubeLightLogo from '../../assets/youtube_light.png';

const Header = (props) => {

  return (
    <>
      <GridItem colSpan={2}>
        <Box h="60px" d="flex" alignItems="center">
          <HStack>
            <Box>
              <Icon  as={Menu} />
            </Box>

              <Image 
                src={YoutubeLightLogo} 
                objectFit="cover" 
                align="center"
                htmlHeight="20px"
                htmlWidth="80px"
                alt="Youtube Logo"  />

            <InputGroup size="sm">
              <Input placeholder="Search" />
              <InputRightAddon children={<Icon  as={Search} color="gray.500" />} />
            </InputGroup>
            <Box>
              <Icon  as={Mic} />
            </Box>
            <Box>
              <Icon  as={VideoCall} />
            </Box>
            <Box>
              <Icon  as={Apps} />
            </Box>
            <Box>
              <Icon  as={Notifications} />
            </Box>
            <Image
              borderRadius="full"
              boxSize="30px"
              src={ProfilePic}
              alt="Profile Pic"
            />
          </HStack>
        </Box>
      </GridItem>
      

      <GridItem colStart={2} borderWidth="1px" borderRight="none" borderLeft="none" >
        <Box h="60px" d="flex" alignItems="center">
          <HStack>
            <ButtonGroup size="md" spacing="3">
              <Button 
                borderRadius="20px"
                border="2px"
                // colorScheme="blue"
                colorScheme="gray"
                borderColor="gray.300"
              >
                Category
              </Button>
              <Button 
                borderRadius="20px"
                border="2px"
                // colorScheme="blue"
                colorScheme="gray"
                borderColor="gray.300"
              >
                Category
              </Button>
              <Button 
                borderRadius="20px"
                border="2px"
                // colorScheme="blue"
                colorScheme="gray"
                borderColor="gray.300"
              >
                Category
              </Button>
              <Button 
                borderRadius="20px"
                border="2px"
                // colorScheme="blue"
                colorScheme="gray"
                borderColor="gray.300"
              >
                Category
              </Button>
              <Button 
                borderRadius="20px"
                border="2px"
                // colorScheme="blue"
                colorScheme="gray"
                borderColor="gray.300"
              >
                Category
              </Button>
              <Button 
                borderRadius="20px"
                border="2px"
                // colorScheme="blue"
                colorScheme="gray"
                borderColor="gray.300"
              >
                Category
              </Button>
              <Button 
                borderRadius="20px"
                border="2px"
                // colorScheme="blue"
                colorScheme="gray"
                borderColor="gray.300"
              >
                Category
              </Button>
              <Button 
                borderRadius="20px"
                border="2px"
                // colorScheme="blue"
                colorScheme="gray"
                borderColor="gray.300"
              >
                Category
              </Button>
            </ButtonGroup>
          </HStack>
        </Box>
      </GridItem >
    </>
  );
} 

export default Header;
