import {
  Box,
  Grid,
  GridItem,
  Icon,
  Image,
  VStack,
  HStack, 
  Text
} from '@chakra-ui/react';

import { AccessAlarm } from '@material-ui/icons';
import VideoThumbnail from '../../assets/video_thumbnail.jpg';
import ProfilePic from '../../assets/profile.jpg';

const Content = (props) => {

  return (
    <GridItem  bg="gray.50">
      <Grid templateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]} gap={6} m={5}>
        <Box w="100%">
          <VStack>
            <Image
              src={VideoThumbnail}
              alt="Video Thumbnail"
            />
            <HStack>
              <Image
                borderRadius="full"
                boxSize="40px"
                src={ProfilePic}
                alt="Profile Pic"
              />
              <Box>
              <VStack  align="left" spacing={0}>
                <Text fontWeight="bold" fontSize="sm" lineHeight={1}>
                  How to Start Coding (and Keep Up With It)
                </Text>
                <Text  fontSize="sm" >
                  Mayuko
                </Text>
                <Text  fontSize="sm" >
                 468K views • 10 months ago
                </Text>
              </VStack>
              </Box>
            </HStack>

          </VStack>
        </Box>
        <Box w="100%">
          <VStack>
            <Image
              src={VideoThumbnail}
              alt="Video Thumbnail"
            />
            <HStack>
              <Image
                borderRadius="full"
                boxSize="40px"
                src={ProfilePic}
                alt="Profile Pic"
              />
              <Box>
              <VStack  align="left" spacing={0}>
                <Text fontWeight="bold" fontSize="sm" lineHeight={1}>
                  How to Start Coding (and Keep Up With It)
                </Text>
                <Text  fontSize="sm" >
                  Mayuko
                </Text>
                <Text  fontSize="sm" >
                 468K views • 10 months ago
                </Text>
              </VStack>
              </Box>
            </HStack>

          </VStack>
        </Box>
        <Box w="100%">
          <VStack>
            <Image
              src={VideoThumbnail}
              alt="Video Thumbnail"
            />
            <HStack>
              <Image
                borderRadius="full"
                boxSize="40px"
                src={ProfilePic}
                alt="Profile Pic"
              />
              <Box>
              <VStack  align="left" spacing={0}>
                <Text fontWeight="bold" fontSize="sm" lineHeight={1}>
                  How to Start Coding (and Keep Up With It)
                </Text>
                <Text  fontSize="sm" >
                  Mayuko
                </Text>
                <Text  fontSize="sm" >
                 468K views • 10 months ago
                </Text>
              </VStack>
              </Box>
            </HStack>

          </VStack>
        </Box>
        <Box w="100%">
          <VStack>
            <Image
              src={VideoThumbnail}
              alt="Video Thumbnail"
            />
            <HStack>
              <Image
                borderRadius="full"
                boxSize="40px"
                src={ProfilePic}
                alt="Profile Pic"
              />
              <Box>
              <VStack  align="left" spacing={0}>
                <Text fontWeight="bold" fontSize="sm" lineHeight={1}>
                  How to Start Coding (and Keep Up With It)
                </Text>
                <Text  fontSize="sm" >
                  Mayuko
                </Text>
                <Text  fontSize="sm" >
                 468K views • 10 months ago
                </Text>
              </VStack>
              </Box>
            </HStack>

          </VStack>
        </Box>
        <Box w="100%">
          <VStack>
            <Image
              src={VideoThumbnail}
              alt="Video Thumbnail"
            />
            <HStack>
              <Image
                borderRadius="full"
                boxSize="40px"
                src={ProfilePic}
                alt="Profile Pic"
              />
              <Box>
              <VStack  align="left" spacing={0}>
                <Text fontWeight="bold" fontSize="sm" lineHeight={1}>
                  How to Start Coding (and Keep Up With It)
                </Text>
                <Text  fontSize="sm" >
                  Mayuko
                </Text>
                <Text  fontSize="sm" >
                 468K views • 10 months ago
                </Text>
              </VStack>
              </Box>
            </HStack>

          </VStack>
        </Box>
        <Box w="100%">
          <VStack>
            <Image
              src={VideoThumbnail}
              alt="Video Thumbnail"
            />
            <HStack>
              <Image
                borderRadius="full"
                boxSize="40px"
                src={ProfilePic}
                alt="Profile Pic"
              />
              <Box>
              <VStack  align="left" spacing={0}>
                <Text fontWeight="bold" fontSize="sm" lineHeight={1}>
                  How to Start Coding (and Keep Up With It)
                </Text>
                <Text  fontSize="sm" >
                  Mayuko
                </Text>
                <Text  fontSize="sm" >
                 468K views • 10 months ago
                </Text>
              </VStack>
              </Box>
            </HStack>

          </VStack>
        </Box>
        <Box w="100%">
          <VStack>
            <Image
              src={VideoThumbnail}
              alt="Video Thumbnail"
            />
            <HStack>
              <Image
                borderRadius="full"
                boxSize="40px"
                src={ProfilePic}
                alt="Profile Pic"
              />
              <Box>
              <VStack  align="left" spacing={0}>
                <Text fontWeight="bold" fontSize="sm" lineHeight={1}>
                  How to Start Coding (and Keep Up With It)
                </Text>
                <Text  fontSize="sm" >
                  Mayuko
                </Text>
                <Text  fontSize="sm" >
                 468K views • 10 months ago
                </Text>
              </VStack>
              </Box>
            </HStack>

          </VStack>
        </Box>
      </Grid>
    </GridItem>
  );
} 

export default Content;
