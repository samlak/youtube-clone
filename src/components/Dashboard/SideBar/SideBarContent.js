import { useState } from 'react';

import {
  Box,
  VStack,
  Icon,
  Divider,
  HStack,
  Text,
  Image
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

import ProfilePic from '../../../assets/profile.jpg';

const SideBarContent = (props) => {
  const [expandPlaylist, setExpandPlaylist] = useState(false);
  const [expandSubscription, setExpandSubscription] = useState(false);

  return (
    <>
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
            <Text fontSize="sm" fontWeight="medium">
              Home
            </Text>
          </HStack>
        </Box>
        <Box h="40px" >
          <HStack spacing={6}>
            <Box>
              <Icon as={Whatshot} />
            </Box>
            <Text fontSize="sm" fontWeight="medium">
              Trending
            </Text>
          </HStack>
        </Box>
        <Box h="40px">
          <HStack spacing={6}>
            <Box>
              <Icon as={Subscriptions} />
            </Box>
            <Text fontSize="sm" fontWeight="medium">
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
            <Text fontSize="sm" fontWeight="medium">
              Library
            </Text>
          </HStack>
        </Box>
        <Box h="40px" >
          <HStack spacing={6}>
            <Box>
              <Icon as={History} />
            </Box>
            <Text fontSize="sm" fontWeight="medium">
              History
            </Text>
          </HStack>
        </Box>
        <Box h="40px" >
          <HStack spacing={6}>
            <Box>
              <Icon as={OndemandVideo} />
            </Box>
            <Text fontSize="sm" fontWeight="medium">
              Your videos
            </Text>
          </HStack>
        </Box>
        <Box h="40px" >
          <HStack spacing={6}>
            <Box>
              <Icon as={WatchLater} />
            </Box>
            <Text fontSize="sm" fontWeight="medium">
              Watch Later
            </Text>
          </HStack>
        </Box>
        <Box h="40px" >
          <HStack spacing={6}>
            <Box>
              <Icon as={ThumbUp} />
            </Box>
            <Text fontSize="sm" fontWeight="medium">
              Liked videos
            </Text>
          </HStack>
        </Box>
        
        <VStack
          spacing={0}
          align="stretch"
          display={expandPlaylist ? "flex" : "none"}
        >
          <Box h="40px" >
            <HStack spacing={6}>
              <Box>
                <Icon as={PlaylistPlay} />
              </Box>
              <Text fontSize="sm" fontWeight="medium" isTruncated>
                Shopify for Developers: Free Course 
              </Text>
            </HStack>
          </Box>

          <Box h="40px" >
            <HStack spacing={6}>
              <Box>
                <Icon as={PlaylistPlay} />
              </Box>
              <Text fontSize="sm" fontWeight="medium" isTruncated>
                Stories of the Prophets
              </Text>
            </HStack>
          </Box>

          <Box h="40px" >
            <HStack spacing={6}>
              <Box>
                <Icon as={PlaylistPlay} />
              </Box>
              <Text fontSize="sm" fontWeight="medium" isTruncated>
                Tech Turks
              </Text>
            </HStack>
          </Box>
        
        </VStack>
        <Box 
          h="40px" 
          as="button" 
          onClick={() => setExpandPlaylist(!expandPlaylist)} 
        >
          <HStack spacing={6}>
            <Box>
              <Icon as={expandPlaylist ? ExpandLess : ExpandMore} />
            </Box>
            <Text fontSize="sm" fontWeight="medium">
              {expandPlaylist ? "Show fewer" : "Show more"}
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
        CRIPTIONS

Joma Tech

Mark Angel TV

ColdFusion

MarkAngelComedy

MercifulServant

Jake Tran

FRONTLINE PBS | Official

Y Combinator

Garry Tan

AdoraHack
        <Text fontWeight="medium" mb="10px">
          SUBSCRIPTIONS
        </Text>
        <Box h="40px" >
          <HStack 
            spacing={6}
            position="relative"
          >
            <Image
              borderRadius="full"
              boxSize="27px"
              src={ProfilePic}
              alt="Profile Pic"
            />
            <Text fontSize="sm" fontWeight="medium" mr="40px" isTruncated>
              Joma Tech
            </Text>
            <Text 
              fontWeight="bold" 
              fontSize="lg" 
              color="blue" 
              position="absolute"
              right="0"
              mr="20px"
            > • </Text>
          </HStack>
        </Box>
        
        <Box h="40px" >
          <HStack 
            spacing={6}
            position="relative"
          >
            <Image
              borderRadius="full"
              boxSize="27px"
              src={ProfilePic}
              alt="Profile Pic"
            />
            <Text fontSize="sm" fontWeight="medium" mr="40px" isTruncated>
              Mark Angel TV 
            </Text>
            <Text 
              fontWeight="bold" 
              fontSize="lg" 
              color="blue" 
              position="absolute"
              right="0"
              mr="20px"
            > • </Text>
          </HStack>
        </Box>
        
        <Box h="40px" >
          <HStack 
            spacing={6}
            position="relative"
          >
            <Image
              borderRadius="full"
              boxSize="27px"
              src={ProfilePic}
              alt="Profile Pic"
            />
            <Text fontSize="sm" fontWeight="medium" mr="40px" isTruncated>
              ColdFusion
            </Text>
            <Text 
              fontWeight="bold" 
              fontSize="lg" 
              color="blue" 
              position="absolute"
              right="0"
              mr="20px"
            > • </Text>
          </HStack>
        </Box>
        
        <Box h="40px" >
          <HStack 
            spacing={6}
            position="relative"
          >
            <Image
              borderRadius="full"
              boxSize="27px"
              src={ProfilePic}
              alt="Profile Pic"
            />
            <Text fontSize="sm" fontWeight="medium" mr="40px" isTruncated>
              MarkAngelComedy
            </Text>
            <Text 
              fontWeight="bold" 
              fontSize="lg" 
              color="blue" 
              position="absolute"
              right="0"
              mr="20px"
            > • </Text>
          </HStack>
        </Box>

        <VStack
          spacing={0}
          align="stretch"
          display={expandSubscription ? "flex" : "none"}
        >

          <Box h="40px" >
            <HStack 
              spacing={6}
              position="relative"
            >
              <Image
                borderRadius="full"
                boxSize="27px"
                src={ProfilePic}
                alt="Profile Pic"
              />
              <Text fontSize="sm" fontWeight="medium" mr="40px" isTruncated>
                MercifulServant
              </Text>
              <Text 
                fontWeight="bold" 
                fontSize="lg" 
                color="blue" 
                position="absolute"
                right="0"
                mr="20px"
              > • </Text>
            </HStack>
          </Box>
          
          <Box h="40px" >
            <HStack 
              spacing={6}
              position="relative"
            >
              <Image
                borderRadius="full"
                boxSize="27px"
                src={ProfilePic}
                alt="Profile Pic"
              />
              <Text fontSize="sm" fontWeight="medium" mr="40px" isTruncated>
                Jake Tran
              </Text>
              <Text 
                fontWeight="bold" 
                fontSize="lg" 
                color="blue" 
                position="absolute"
                right="0"
                mr="20px"
              > • </Text>
            </HStack>
          </Box>
          
          <Box h="40px" >
            <HStack 
              spacing={6}
              position="relative"
            >
              <Image
                borderRadius="full"
                boxSize="27px"
                src={ProfilePic}
                alt="Profile Pic"
              />
              <Text fontSize="sm" fontWeight="medium" mr="40px" isTruncated>
                FRONTLINE PBS | Official
              </Text>
              <Text 
                fontWeight="bold" 
                fontSize="lg" 
                color="blue" 
                position="absolute"
                right="0"
                mr="20px"
              > • </Text>
            </HStack>
          </Box>
          
          <Box h="40px" >
            <HStack 
              spacing={6}
              position="relative"
            >
              <Image
                borderRadius="full"
                boxSize="27px"
                src={ProfilePic}
                alt="Profile Pic"
              />
              <Text fontSize="sm" fontWeight="medium" mr="40px" isTruncated>
                Y Combinator
              </Text>
              <Text 
                fontWeight="bold" 
                fontSize="lg" 
                color="blue" 
                position="absolute"
                right="0"
                mr="20px"
              > • </Text>
            </HStack>
          </Box>

        </VStack>
        <Box 
          h="40px" 
          as="button" 
          onClick={() => setExpandSubscription(!expandSubscription)} 
        >
          <HStack spacing={6}>
            <Box>
              <Icon as={expandSubscription ? ExpandLess : ExpandMore} />
            </Box>
            <Text fontSize="sm" fontWeight="medium">
              {expandSubscription ? "Show fewer" : "Show more"}
            </Text>
          </HStack>
        </Box>
      </VStack>

      <Divider/>
    </>
  );
} 

export default SideBarContent;
