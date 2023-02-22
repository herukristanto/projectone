import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import * as Animatable from 'react-native-animatable';
import {authentication} from '../../config/firebase/fire';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {getDatabase, ref, set} from 'firebase/database';
import {Loading} from '../../components';
import {storeData, useForm} from '../../utils';

const Register = ({navigation}) => {

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useForm({
    email: '',
    namaLengkap: '',
    tanggalLahir: '',
    nik: '',
    password: '',
  });

  const onSubmitFormHandler = () => {
    setLoading(true);
    createUserWithEmailAndPassword(authentication, form.email, form.password)
      .then(response => {
        setLoading(false);
        setForm('reset');
        const data = {
          email: form.email,
          namaLengkap: form.namaLengkap,
          tanggalLahir: form.tanggalLahir,
          nik: form.nik,
          uid: response.user.uid,
        };

        const db = getDatabase();
        set(ref(db, 'users/' + response.user.uid), data);

        storeData('user', data);
        navigation.replace('Login');
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.text_header}>Register Now!</Text>
        </View>
        <Animatable.View animation="fadeInUpBig" style={styles.footer}>
          <Text style={[styles.text_footer, {color: '#333333'}]}>Email</Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Masukan Email Anda"
              style={styles.textInput}
              autoCapitalize="none"
              value={form.email}
              onChangeText={value => setForm('email', value)}
            />
          </View>

          <Text style={[styles.text_footer, {color: '#333333'}]}>
            Nama Lengkap
          </Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Masukan Nama Lengkap Anda"
              style={styles.textInput}
              autoCapitalize="none"
              value={form.namaLengkap}
              onChangeText={value => setForm('namaLengkap', value)}
            />
          </View>

          <Text style={[styles.text_footer, {color: '#333333'}]}>
            Tanggal Lahir
          </Text>

          <View style={styles.action}>
            <TextInput
              placeholder="Masukan Tanggal Lahir Anda"
              style={styles.textInput}
              autoCapitalize="none"
              value={form.tanggalLahir}
              onChangeText={value => setForm('tanggalLahir', value)}
            />
          </View>

          <Text style={[styles.text_footer, {color: '#333333'}]}>NIK</Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Masukan NIK Anda"
              style={styles.textInput}
              autoCapitalize="none"
              value={form.nik}
              onChangeText={value => setForm('nik', value)}
            />
          </View>

          <Text style={[styles.text_footer, {color: '#333333'}]}>Password</Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Masukan Password Anda"
              secureTextEntry
              style={styles.textInput}
              autoCapitalize="none"
              value={form.password}
              onChangeText={value => setForm('password', value)}
            />
          </View>

          <View style={styles.textPrivate}>
            <Text style={styles.color_textPrivate}>
              Saya menerima segala isi
            </Text>
            <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>
              {' '}
              Syarat Penggunaan
            </Text>
            <Text style={styles.color_textPrivate}> dan</Text>
            <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>
              {' '}
              Kebijakan Privasi
            </Text>
            <Text style={styles.color_textPrivate}> Hospia</Text>
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              style={[styles.signIn, {backgroundColor: '#6798F7'}]}
              onPress={onSubmitFormHandler}
            >
              <Text style={[styles.textSign, {color: '#fff'}]}>Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={[
                styles.signIn,
                {borderColor: '#6798E1', borderWidth: 1, marginTop: 10},
              ]}>
              <Text style={[styles.textSign, {color: '#6798E1'}]}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </ScrollView>
    </View>
    {loading && <Loading/>}
    </>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6798E1',
  },
  header: {
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 20,
  },
  footer: {
    flex: Platform.OS === 'ios' ? 3 : 5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
    paddingBottom: 100,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 25,
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
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
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
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  color_textPrivate: {
    color: 'grey',
  },
});
