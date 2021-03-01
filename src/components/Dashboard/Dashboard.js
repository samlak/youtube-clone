import {
  Grid,
} from '@chakra-ui/react';

import Header from "./Header";
import Content from "./Content";
import SideBar from "./SideBar";


const Dashboard = (props) => {

  return (
    <Grid
      templateRows="60px 60px auto"
      templateColumns="240px auto"
      h="700px"
    >
      <Header />
      <SideBar />
      <Content />
    </Grid>
  );
} 

export default Dashboard;
