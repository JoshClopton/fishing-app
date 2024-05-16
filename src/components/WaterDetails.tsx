import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import theme from '../theme';
import waterData from '../mockData';

const WaterDetails = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [water, setWater] = React.useState<any>([{}]);
  const [loading, setLoading] = React.useState(true);

  const { fontStyles } = theme;

  React.useEffect(() => {
    setWater(waterData[0]);
    setLoading(false);
  }, []);
  return (
    <Box w={['inherit', '50rem']}>
      {loading ? <div>Loading...</div> : null}
      <Box paddingBottom="1rem">
        <img src={water?.image} />
      </Box>
      <Flex
        flexDirection="column"
        alignItems="center"
        paddingLeft="1rem"
        paddingRight="1rem"
      >
        <Box
          w="100%"
          borderBottom="1px solid #AFAFAF"
          textAlign="center"
          marginBottom="1rem"
        >
          <Heading {...fontStyles.mobilePageHeader}>{water.name}</Heading>
        </Box>
        <Box
          w="100%"
          borderBottom="1px solid #AFAFAF"
          textAlign="center"
          marginBottom="1rem"
        >
          <Heading {...fontStyles.mobileSectionHeader}>
            {water.location}
          </Heading>
          <Heading marginBottom="1rem" {...fontStyles.mobileBody}>
            {water.concordinates}
          </Heading>
        </Box>
        <Box
          w="100%"
          borderBottom="1px solid #AFAFAF"
          textAlign="center"
          marginBottom="1rem"
        >
          <Text {...fontStyles.mobileBody} marginBottom="1rem">
            {water.description}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default WaterDetails;
