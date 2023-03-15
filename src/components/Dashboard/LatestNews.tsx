import {Box, HStack, Stack, Text} from 'native-base';
import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {ExternalIcon, NewsIcon} from '../../assets/Icons';
import Card from '../Card';
import {globalStyles} from './../../Themes/globalStyles';

const LatestNews = () => {
  return (
    <Card>
      <HStack alignItems="center">
        <NewsIcon />
        <Text style={styles.title} fontWeight="600">
          Latest news
        </Text>
      </HStack>
      <Stack mt="24px" alignItems="center">
        <HStack style={styles.boxes}>
          <Box maxH="113px" flex={1}>
            <Image
              source={require('../../assets/images/first-image.jpg')}
              alt="Alternate Text"
              style={styles.image}
            />
          </Box>
          <Stack padding="16px" flex={2}>
            <Text fontSize="12px" color="#21B8F9">
              E-COMMERCE TIPS
            </Text>
            <Text style={styles.text} fontWeight="600">
              13 tips on How to Write a Business Plan with success
            </Text>
            <Text style={styles.notes}>Stime lettura 5min</Text>
          </Stack>
        </HStack>
        <HStack style={styles.boxes}>
          <Box maxH="113px" flex={1}>
            <Image
              source={require('../../assets/images/second-image.jpg')}
              alt="Alternate Text"
              style={styles.image}
            />
          </Box>
          <Stack padding="16px" flex={2}>
            <Text fontSize="12px" color="#21B8F9">
              E-COMMERCE TIPS
            </Text>
            <Text style={styles.text} fontWeight="600">
              13 tips on How to Write a Business Plan with success
            </Text>
            <Text style={styles.notes}>Stime lettura 5min</Text>
          </Stack>
        </HStack>
        <HStack style={styles.boxes}>
          <Box maxH="113px" flex={1}>
            <Image
              source={require('../../assets/images/third-image.jpg')}
              alt="Alternate Text"
              style={styles.image}
            />
          </Box>
          <Stack padding="16px" flex={2}>
            <Text fontSize="12px" color="#21B8F9">
              E-COMMERCE TIPS
            </Text>
            <Text style={styles.text} fontWeight="600">
              13 tips on How to Write a Business Plan with success
            </Text>
            <Text style={styles.notes}>Stime lettura 5min</Text>
          </Stack>
        </HStack>
        <Stack width="100%" direction="row"></Stack>
        <Stack mt="26px" direction="row">
          <Text style={globalStyles.link}>Visita il nostro Blog</Text>
          <ExternalIcon />
        </Stack>
      </Stack>
    </Card>
  );
};

export default LatestNews;

const styles = StyleSheet.create({
  boxes: {
    elevation: 3,
    backgroundColor: '#fff',
    overflow: 'hidden',
    marginBottom: 27,
    borderRadius: 10,
    width: '100%',
  },
  image: {height: '100%', width: '100%'},
  title: {
    marginLeft: 26,
    fontSize: 22,
    color: '#103B66',
  },
  notes: {
    fontSize: 12,
    color: '#7D8A99',
    textDecorationLine: 'underline',
    fontWeight: '300',
  },
  text: {
    fontSize: 15,
    color: '#103B66',
  },
});
