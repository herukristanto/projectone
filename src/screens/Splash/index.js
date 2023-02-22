import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {IClogo} from '../../assets';
import {authentication} from '../../config/firebase/fire';
import {onAuthStateChanged} from 'firebase/auth';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      onAuthStateChanged(authentication, (user) => {
        if (user) {
          navigation.replace('Home');
        } else {
          navigation.replace('GetStarted');
        }
      });
    }, 3000);
  }, [navigation]);
  return (
    <View style={styles.page}>
      <Image source={IClogo} />
      {/* <Text style={styles.logo}>Hospia</Text> */}
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#6798E1',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    marginTop: 20,
    color: 'white'
  },
  logo: {
    color: '#fff',
    fontSize: 50,
    fontWeight: 'bold',
  }
});
