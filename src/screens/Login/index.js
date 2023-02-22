import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {showMessage} from 'react-native-flash-message';
import {authentication} from '../../config/firebase/fire';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {getDatabase, ref, child, get} from 'firebase/database';
import {Loading} from '../../components';
import {storeData, useForm} from '../../utils';

const Login = ({navigation}) => {
  const [form, setForm] = useForm({email: '', password: ''});
  const [loading, setLoading] = useState(false);

  const login = () => {
    setLoading(true);
    signInWithEmailAndPassword(authentication, form.email, form.password)
      .then(res => {
        setLoading(false);
        navigation.replace('Home');
        const dbRef = ref(getDatabase());
        get(child(dbRef, `users/${res.user.uid}`))
          .then(resDB => {
            if (resDB.exists()) {
              storeData('user', resDB.val())
              // storeData('user', resDB.val()).then(success => {
              //   navigation.replace('Home');
              // });
            }
          })
          .catch(error => {
            setLoading(false);
            showMessage({
              message: error.message,
              type: 'danger',
            });
          });
      })
      .catch(error => {
        showMessage({
          message: error.message,
          type: 'danger',
        });
        setLoading(false);
      });
  };

  return (
    <>
      <View style={styles.container}>
        <StatusBar backgroundColor="#6798E1" barStyle="light-content" />
        <View style={styles.header}>
          <Text style={styles.text_header}>Welcome!</Text>
        </View>
        <Animatable.View
          animation="fadeInUpBig"
          style={[styles.footer, {backgroundColor: '#ffffff'}]}>
          <Text style={[styles.text_footer, {color: '#333333'}]}>Username</Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Your Username"
              placeholderTextColor="#666666"
              style={[styles.textInput, {color: '#333333'}]}
              autoCapitalize="none"
              value={form.email}
              onChangeText={value => setForm('email', value)}
            />
          </View>

          <Text style={[styles.text_footer, {color: '#333333', marginTop: 35}]}>
            Password
          </Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Your Password"
              placeholderTextColor="#666666"
              style={[styles.textInput, {color: '#333333'}]}
              autoCapitalize="none"
              value={form.password}
              onChangeText={value => setForm('password', value)}
              secureTextEntry
            />
          </View>

          <View style={styles.button}>
            <TouchableOpacity style={styles.signIn} onPress={login}>
              <View style={styles.signIn}>
                <Text style={[styles.textSign, {color: '#fff'}]}>Sign In</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('Register')}
              style={[
                styles.signUp,
                {borderColor: '#6798E1', borderWidth: 1, marginTop: 15},
              ]}>
              <Text style={[styles.textSign, {color: '#6798E1'}]}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </View>
      {loading && <Loading />}
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6798E1',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#6798F7',
  },
  signUp: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
