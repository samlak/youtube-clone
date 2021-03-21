import {
  Grid,
  GridItem,
  useColorMode
} from '@chakra-ui/react';

import Header from "../Dashboard/Header";
import Sidebar from "./Sidebar";
import Content from "./Content";

const Dashboard = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Grid
      templateRows="60px auto"
      templateColumns="1fr"
    >
      <Header />
      
      <GridItem 
        bg={colorMode === "light" ? "gray.50" : "#131720"}
      >
        <Grid
          templateRows="1fr"
          templateColumns="2fr 1fr"
          my="20px"
          mx="40px"
        >
          <Content />
          <Sidebar />
        </Grid>
      </GridItem>
    </Grid>
  );
} 

export default Dashboard;
