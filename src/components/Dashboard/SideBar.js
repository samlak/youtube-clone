import {
  Box,
  GridItem,
  VStack,
  Heading,
  Icon,
  Divider,
  HStack,
  Text
} from '@chakra-ui/react';

import { 
  Whatshot,
  Home,
  Subscriptions,
  VideoLibrary,
  History,
  OndemandVideo,
  WatchLater,
  ThumbUp,
  PlaylistPlay,
  ExpandLess,
  ExpandMore,
  WifiTethering
} from '@material-ui/icons';

const SideBar = (props) => {

  return (
    <GridItem rowSpan={2} rowStart={2}>
      <VStack
        spacing={0}
        align="stretch"
        marginLeft="30px"
        marginTop="10px"
      >
        <Box h="40px" >
          <HStack spacing={6}>
            <Box>
              <Icon as={Home} />
            </Box>
            <Text fontWeight="medium">
              Home
            </Text>
          </HStack>
        </Box>
        <Box h="40px" >
          <HStack spacing={6}>
            <Box>
              <Icon as={Whatshot} />
            </Box>
            <Text fontWeight="medium">
              Trending
            </Text>
          </HStack>
        </Box>
        <Box h="40px">
          <HStack spacing={6}>
            <Box>
              <Icon as={Subscriptions} />
            </Box>
            <Text fontWeight="medium">
              Subscriptions
            </Text>
          </HStack>
        </Box>
      </VStack>  

      <Divider/>
      
      <VStack
        spacing={0}
        align="stretch"
        marginLeft="30px"
        marginTop="10px"
      >
        <Box h="40px" >
          <HStack spacing={6} >
            <Box>
              <Icon as={VideoLibrary} />
            </Box>
            <Text fontWeight="medium">
              Library
            </Text>
          </HStack>
        </Box>
        <Box h="40px" >
          <HStack spacing={6}>
            <Box>
              <Icon as={History} />
            </Box>
            <Text fontWeight="medium">
              History
            </Text>
          </HStack>
        </Box>
        <Box h="40px" >
          <HStack spacing={6}>
            <Box>
              <Icon as={OndemandVideo} />
            </Box>
            <Text fontWeight="medium">
              Your videos
            </Text>
          </HStack>
        </Box>
        <Box h="40px" >
          <HStack spacing={6}>
            <Box>
              <Icon as={WatchLater} />
            </Box>
            <Text fontWeight="medium">
              Watch Later
            </Text>
          </HStack>
        </Box>
        <Box h="40px" >
          <HStack spacing={6}>
            <Box>
              <Icon as={ThumbUp} />
            </Box>
            <Text fontWeight="medium">
              Liked videos
            </Text>
          </HStack>
        </Box>
        <Box h="40px" >
          <HStack spacing={6}>
            <Box>
              <Icon as={ExpandMore} />
            </Box>
            <Text fontWeight="medium">
              Show more
            </Text>
          </HStack>
        </Box>
      </VStack>

      <Divider/>

    </GridItem>
  );
} 

export default SideBar;
