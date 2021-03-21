import {
  Grid,
} from '@chakra-ui/react';

import Header from "../Dashboard/Header";


const Dashboard = (props) => {

  return (
    <Grid
      templateRows="60px auto"
      templateColumns="240px auto"
    >
      <Header />
    </Grid>
  );
} 

export default Dashboard;
