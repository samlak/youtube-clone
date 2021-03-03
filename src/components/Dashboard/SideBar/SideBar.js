import {
  GridItem,
} from '@chakra-ui/react';

import SideBarContent from './SideBarContent';

const SideBar = (props) => {

  return (
    <GridItem 
      rowSpan={2} 
      rowStart={2} 
      display={["none", "none", "none", "block"]}  
      // position="fixed"
    >
      <SideBarContent/>
    </GridItem>
  );
} 

export default SideBar;
