
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Loading} from '../../components';
import {authentication} from '../../config/firebase/fire';
import {signOut} from 'firebase/auth';
import {getData} from '../../utils';

const UserProfile = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState({
    namaLengkap: '',
    nik: '',
  });
  useEffect(() => {
    setLoading(true);
    getData('user').then(res => {
      setLoading(false);
      setProfile(res);
    })
  }, []);

  const LogOut = () => {
    setLoading(true);
    signOut(authentication).then(() => {
        setLoading(false);
        navigation.replace('Login');
      })
      .catch(error => {
        setLoading(false);
      });
  };

    return (
      <>
      <View style={styles.container}>
      <StatusBar backgroundColor="#6798E1" barStyle="light-content" />
      <View style={styles.header}></View>
      <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
      <View style={styles.body}>
        <Text style={styles.namalengkap}>{profile.namaLengkap}</Text>
        <Text style={styles.nik}>{profile.nik}</Text>
        <View style={styles.bodyContent}>
          <TouchableOpacity style={styles.signIn} onPress={LogOut}>
          <LinearGradient colors={['#6798F7', '#6798E1']} style={styles.signIn}>
              <Text style={[styles.textSign, {
                  color:'#fff'
              }]}>Sign Out</Text>
          </LinearGradient>
          </TouchableOpacity>
        </View>
          <View  style={styles.bodyContent}>
          <TouchableOpacity style={styles.signIn} onPress={() => navigation.replace('Home')}>
            <LinearGradient colors={['#6798F7', '#6798E1']} style={styles.signIn}>
                <Text style={[styles.textSign, {
                    color:'#fff'
                }]}>Back</Text>
            </LinearGradient>
          </TouchableOpacity>
          </View>
    </View>
      </View>
      {loading && <Loading/>}
      </>
    );
};

export default UserProfile;

const styles = StyleSheet.create({
  header:{
    backgroundColor: '#6798E1',
    height:200,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  namalengkap:{
    fontSize:20,
    textAlign: 'center',
    paddingTop: 30,
    color:'#6798E1',
    fontWeight:'600',
    paddingBottom: 5
  },
  nik:{
    fontSize:15,
    textAlign: 'center',
    color:'#333',
    fontWeight:'600',
    paddingBottom:10,
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  info:{
    fontSize:16,
    color: '#6798E1',
    marginTop:10
  },
  description:{
    fontSize:16,
    color: '#696969',
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: '#6798E1',
  },
  signIn: {
    width: '80%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
      fontSize: 18,
      fontWeight: 'bold'
  }
});

