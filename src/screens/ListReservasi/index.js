import React from 'react';
import {SafeAreaView, StatusBar, TouchableOpacity, View, Image, FlatList, Text, StyleSheet} from 'react-native';
import {ILDaftar} from '../../assets';

const ListReservasi = ({navigation}) => {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <TouchableOpacity onPress={() => navigation.navigate('Reservasi')}>
        <View style={styles.item}>
          <Image
            style={{height: 50, width: 50, borderRadius: 10}}
            source={ILDaftar}
          />
          <Text style={styles.title2}>Vaksin Meningitis & MCU</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { 
        alert('Fitur ini belum tersedia');
      }}>
        <View style={styles.item}>
          <Image
            style={{height: 50, width: 50, borderRadius: 10}}
            source={ILDaftar}
          />
          <Text style={styles.title2}>UTD</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ListReservasi;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  item: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    flexDirection: 'row',
  },
  title: {
    fontSize: 10,
  },
  title2: {
    fontSize: 18,
    marginLeft: 20,
    marginTop: 15,
    color: 'black',
    fontWeight: 'bold',
  },
});
