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
  Badge
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

import { Link } from 'react-router-dom';
import VideoThumbnail from '../../assets/video_thumbnail.jpg';
import ProfilePic from '../../assets/profile.jpg';

const Sidebar = props => {
  const [isHovered, setIsHovered] = useState(false);
  const relatedVideos = [1, 2, 3,4, 5, 6, 7, 8, 9]; // Placeholder for relatedVideos data

  return (
    <GridItem
      mx="20px"
    >
      {relatedVideos.map(video => (
        <Box w="100%" mb={5}>
          <HStack
            align="flex-start"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Box position="relative" w="40%">
              <Link to="/video/hate-me">
                <Image src={VideoThumbnail} h="95px" alt="Video Thumbnail" />
              </Link>

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

            <HStack align="stretch" w="60%">
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
                  <Link to="/video/hate-me">
                    <Tooltip label="My boss hate me but I love him (Episode 1)" aria-label="A tooltip">
                      <Text fontWeight="bold" fontSize="sm" lineHeight={1}>
                        My boss hate me but I love him (Episode 1)
                      </Text>
                    </Tooltip>
                    <Text fontSize="sm">Mayuko</Text>
                    <Text fontSize="sm">468K views • 10 months ago</Text>
                    
                    <Badge>New</Badge>
                  </Link>
                </VStack>
              </Box>
            </HStack>
          </HStack>
        </Box>
      ))}
    </GridItem>
  );
};

export default Sidebar;
