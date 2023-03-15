import {Box, Stack, Text, View} from 'native-base';
import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {
  Capterra,
  ConfigVitrina,
  Customer,
  Extensions,
  Invite,
  LatestNews,
  OrderBox,
  Visitors,
} from '../components/Dashboard';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {RootDrawerParamList} from '../Types/Types';
import LinearGradient from 'react-native-linear-gradient';
import setLoading from '../HOC/setLoading';
import {ExternalWhiteIcon} from '../assets/Icons';

type DashboardProps = DrawerScreenProps<RootDrawerParamList, 'Dashboard'>;

const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <View>
      <ScrollView>
        <Box width="100%">
          <LinearGradient
            colors={['#21B8F9', 'rgba(33, 184, 249, 0.1)132.05%']}>
            <Stack style={styles.banner}>
              <Text color="#fff" fontSize="38" fontWeight="600" mb="10px">
                Welcome Selajdin!
              </Text>
              <Stack direction="row">
                <Text mr="19px" fontSize="17px">
                  app.vetrinalive.com/selajdin-store
                </Text>
                <ExternalWhiteIcon />
              </Stack>
            </Stack>
          </LinearGradient>
          <Box p="14px" bg="#F8F9FB">
            <ConfigVitrina />
            <Visitors />
            <OrderBox />
            <LatestNews />
            <Extensions />
            <Capterra />
            <Customer />
            <Invite />
          </Box>
        </Box>
      </ScrollView>
    </View>
  );
};

export default setLoading(Dashboard);

const styles = StyleSheet.create({
  banner: {
    position: 'relative',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
    paddingBottom: 130,
  },
});
