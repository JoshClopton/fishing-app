/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import theme from '../theme';
import waterData from '../mockData';
import { useLocation } from 'react-router-dom';

type Water = {
  id: number;
  name: string;
  location: string;
  coordinates: string;
  description: string;
  image: string;
};

const WaterDetails = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [water, setWater] = React.useState<any>([{}]);
  const [loading, setLoading] = React.useState(true);

  const { fontStyles } = theme;
  const location = useLocation();
  const locationId = location.pathname.split('/')[1];

  React.useEffect(() => {
    const filteredWater = waterData.filter(
      (water: Water) => water.name === locationId
    );
    console.log('filteredWater', filteredWater);
    setWater(filteredWater);
    setLoading(false);
  }, [locationId]);

  const {
    name,
    image,
    location: waterLocation,
    coordinates,
    description,
  } = water[0];
  return (
    <Flex flexDirection="column" w={['inherit', '50rem']} alignItems="center">
      {loading ? <div>Loading...</div> : null}
      <Box paddingBottom="1rem" maxW={['inherit', '75%']} textAlign="center">
        <img src={image} />
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
          <Heading {...fontStyles.mobilePageHeader}>{name}</Heading>
        </Box>
        <Box
          w="100%"
          borderBottom="1px solid #AFAFAF"
          textAlign="center"
          marginBottom="1rem"
        >
          <Heading {...fontStyles.mobileSectionHeader}>{waterLocation}</Heading>
          <Heading marginBottom="1rem" {...fontStyles.mobileBody}>
            {coordinates}
          </Heading>
        </Box>
        <Box
          w="100%"
          borderBottom="1px solid #AFAFAF"
          textAlign="center"
          marginBottom="1rem"
        >
          <Text {...fontStyles.mobileBody} marginBottom="1rem">
            {description}
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default WaterDetails;
