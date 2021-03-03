import { useState } from 'react';

import {
  Box,
  Grid,
  GridItem,
  Icon,
  Image,
  VStack,
  HStack,
  Text,
  Menu,
  MenuButton,
  MenuList,
  Tooltip,
  MenuDivider,
  IconButton,
  Portal,
  MenuItem,
} from '@chakra-ui/react';

import {
  MoreVert,
  PlaylistAdd,
  PlaylistPlay,
  WatchLater,
  Flag,
  NotInterested,
  RemoveCircleOutline,
} from '@material-ui/icons';

import VideoThumbnail from '../../assets/video_thumbnail.jpg';
import ProfilePic from '../../assets/profile.jpg';

const Content = props => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <GridItem 
      bg="gray.50"
      colSpan={[2, 2, 2, 1]}
      // position="fixed"
    >
      <Grid
        templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)']}
        gap={6}
        m={5}
      >
        <Box w="100%">
          <VStack
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Box position="relative">
              <Image src={VideoThumbnail} alt="Video Thumbnail" />
              <Box
                position="absolute"
                display={isHovered ? 'block' : 'none'}
                color="white"
                bg="black"
                mt={2}
                mr={2}
                px="2px"
                right={0}
                top={0}
              >
                <Icon as={WatchLater} />
              </Box>
              <Box
                position="absolute"
                display={isHovered ? 'block' : 'none'}
                color="white"
                bg="black"
                mt={10}
                mr={2}
                px="2px"
                right={0}
                top={0}
              >
                <Icon as={PlaylistPlay} />
              </Box>
              <Box
                position="absolute"
                display={isHovered ? 'none' : 'block'}
                color="white"
                right={0}
                bottom={0}
                mb={1}
                mr={2}
                px={1}
                bg="black"
              >
                <Text fontSize="sm">10:26</Text>
              </Box>
            </Box>
            <HStack align="stretch" w="100%">
              <Tooltip label="Mayuko" aria-label="A tooltip">
                <Image
                  borderRadius="full"
                  boxSize="40px"
                  src={ProfilePic}
                  alt="Profile Pic"
                />
              </Tooltip>
              <Box  flexGrow="1">
                <VStack align="left" position="relative" spacing={0}>
                  <Box
                    position="absolute" right={0} 
                    display={isHovered ? 'block' : 'none'}
                  >
                    <Menu closeOnSelect={false}>
                      <MenuButton
                        as={IconButton}
                        aria-label="Options"
                        icon={<MoreVert />}
                        size="xs"
                        bg="transparent"
                      />
                      <Portal>
                        <MenuList display={isHovered ? 'block' : 'none'}>
                          <MenuItem>
                            <Icon as={PlaylistPlay} />
                            <Text fontSize="sm" marginLeft={3}>
                              Add to queue
                            </Text>
                          </MenuItem>
                          <MenuItem>
                            <Icon as={WatchLater} />
                            <Text fontSize="sm" marginLeft={3}>
                              Save to Watch Later
                            </Text>
                          </MenuItem>
                          <MenuItem>
                            <Icon as={PlaylistAdd} />
                            <Text fontSize="sm" marginLeft={3}>
                              Save to playlist
                            </Text>
                          </MenuItem>

                          <MenuDivider />

                          <MenuItem>
                            <Icon as={NotInterested} />
                            <Text fontSize="sm" marginLeft={3}>
                              Not interested
                            </Text>
                          </MenuItem>
                          <MenuItem>
                            <Icon as={RemoveCircleOutline} />
                            <Text fontSize="sm" marginLeft={3}>
                              Don't recommend channel
                            </Text>
                          </MenuItem>
                          <MenuItem>
                            <Icon as={Flag} />
                            <Text fontSize="sm" marginLeft={3}>
                              Report
                            </Text>
                          </MenuItem>
                        </MenuList>
                      </Portal>
                    </Menu>
                  </Box>
                  <Tooltip label="How to Start Coding (and Keep Up With It)" aria-label="A tooltip">
                    <Text fontWeight="bold" fontSize="sm" lineHeight={1}>
                      How to Start Coding (and Keep Up With It)
                    </Text>
                  </Tooltip>
                  <Text fontSize="sm">Mayuko</Text>
                  <Text fontSize="sm">468K views • 10 months ago</Text>
                </VStack>
              </Box>
            </HStack>
          </VStack>
        </Box>
      </Grid>
    </GridItem>
  );
};

export default Content;
