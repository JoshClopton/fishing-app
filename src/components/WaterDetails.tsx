/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import theme from '../theme';
import waterData from '../mockData';
import { useLocation } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

type Water = {
  id: number;
  name: string;
  location: string;
  coordinates: string;
  description: string;
  image: string;
};

const GET_GOLD_MEDAL_WATER = gql`
  query GoldMedalWater($name: String!) {
    goldMedalWater(name: $name) {
      description
      id
      image
      location
      name
      coordinates
    }
  }
`;

const WaterDetails = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [water, setWater] = React.useState<any>([{}]);
  const [loading, setLoading] = React.useState(true);

  const { fontStyles } = theme;
  const location = useLocation();
  const locationId = location.pathname.split('/')[1];
  const {
    loading: queryLoading,
    error,
    data,
  } = useQuery(GET_GOLD_MEDAL_WATER, {
    variables: { name: locationId },
  });
  console.log('data', data);
  console.log('error', error);
  console.log('queryLoading', queryLoading);

  React.useEffect(() => {
    const filteredWater = waterData.filter(
      (water: Water) => water.name === locationId
    );
    console.log('filteredWater', filteredWater);
    setWater(filteredWater);
    setLoading(false);
  }, [locationId]);

  const { image } = water[0];

  const { goldMedalWater } = data || {};
  const {
    description: goldMedalDescription,
    name: goldMedalName,
    location: goldMedalLocation,
    coordinates: goldMedalCoordinates,
  } = goldMedalWater || {};

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
          <Heading {...fontStyles.mobilePageHeader}>{goldMedalName}</Heading>
        </Box>
        <Box
          w="100%"
          borderBottom="1px solid #AFAFAF"
          textAlign="center"
          marginBottom="1rem"
        >
          <Heading {...fontStyles.mobileSectionHeader}>
            {goldMedalLocation}
          </Heading>
          <Heading marginBottom="1rem" {...fontStyles.mobileBody}>
            {goldMedalCoordinates}
          </Heading>
        </Box>
        <Box
          w="100%"
          borderBottom="1px solid #AFAFAF"
          textAlign="center"
          marginBottom="1rem"
        >
          <Text {...fontStyles.mobileBody} marginBottom="1rem">
            {goldMedalDescription}
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default WaterDetails;
