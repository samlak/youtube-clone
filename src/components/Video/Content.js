import { useState } from 'react';

import {
  Box,
  Grid,
  GridItem,
  Text,
  Heading
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


const Content = props => {

  return (
    <GridItem
      mx="10px"
    >
      <Box>
        <iframe 
          width="100%" 
          height="500" 
          src="https://www.youtube.com/embed/EkfbLm_aIbA" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
        ></iframe>
      </Box>
      <Heading  as="h6" size="md" mt={5} mb={2} fontWeight="medium">
        Suzy leaps into Nam Joo-hyuk’s arms in celebration | Start-Up Ep 5 [ENG SUB]
      </Heading>
    </GridItem>
  );
};

export default Content;
