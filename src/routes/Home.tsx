import { Flex, Heading, Box } from '@chakra-ui/react';
import Hero from '../assets/images/DuckRiver_TN_Sunrise_ByronJorjorian-2048x1366.jpg';
import theme from '../theme';

const Home = () => {
  const { fontStyles } = theme;
  return (
    <Flex
      flexDirection="column"
      gap="1rem"
      marginTop="1rem"
      alignItems="center"
    >
      <Heading>Gold Medal Waters</Heading>
      <Box paddingBottom="1rem" maxW={['inherit', '75%']} textAlign="center">
        <img src={Hero} />
      </Box>
      <Box
        w="100%"
        borderBottom="1px solid #AFAFAF"
        textAlign="center"
        marginBottom="1rem"
      >
        <Heading {...fontStyles.mobileSectionHeader}>
          What are gold medal waters?
        </Heading>
        <Heading marginBottom="1rem" {...fontStyles.mobileBody}>
          Colorado Parks and Wildlife may designate a water as “Gold Medal” once
          it has demonstrated that the fishery consistently produces a trout
          standing stock of at least 60 pounds per acre and produces an average
          of at least 12 “quality trout” (14+ inches) per acre. Gold Medal water
          designation can only be applied to waters that are accessible for
          fishing by the general angling public. River segments must be at least
          2 miles in length and lakes must be a minimum of 50 acres. Currently,
          11 different rivers and three lakes account for nearly 325 miles of
          Gold Medal waters statewide. Navagate through the links to learn more
          about each location.
        </Heading>
      </Box>
    </Flex>
  );
};

export default Home;
