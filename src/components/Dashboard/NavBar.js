import {
  Box,
  GridItem,
  HStack,
  Button,
  ButtonGroup
} from '@chakra-ui/react';


const NavBar = (props) => {

  return (
    <GridItem 
      colStart={2}
      borderWidth="1px"
      colSpan={[2, 2, 2, 1]}
      borderRight="none" 
      borderLeft="none" 
      // position="fixed"
      w="100%"
    >
      <Box h="60px" d="flex" alignItems="center" ml="20px">
        <HStack>
          <ButtonGroup size="md" spacing="3">
            <Button 
              borderRadius="20px"
              border="2px"
              // colorScheme="blue"
              colorScheme="gray"
              borderColor="gray.300"
            >
              Category
            </Button>
          </ButtonGroup>
        </HStack>
      </Box>
    </GridItem >
  );
} 

export default NavBar;
