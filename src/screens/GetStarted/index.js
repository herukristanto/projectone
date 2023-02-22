import React from 'react';
import {
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {ILnakes} from '../../assets';

const GetStarted = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#6798E1" barStyle="light-content" />
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duraton="1500"
          source={ILnakes}
          style={styles.logo}
          resizeMode="stretch"
        />
      </View>
      <Animatable.View style={[styles.footer]} animation="fadeInUpBig">
        <Text style={[styles.title]}>Stay connected with everyone!</Text>
        <Text style={styles.text}>Sign in with account</Text>
        <View style={styles.button}>
          <TouchableOpacity style={styles.signIn} onPress={() => navigation.replace('Login')}>
            <Text style={styles.textSign}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default GetStarted;
const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6798E1',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  title: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    color: 'grey',
    marginTop: 5,
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#6798E1',
    flexDirection: 'row',
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
  },
});
