import React from 'react';
import {SafeAreaView, StatusBar, TouchableOpacity, View, Image, ScrollView, Text, StyleSheet} from 'react-native';
import {ILDaftar} from '../../assets';

const MyRecord = ({navigation}) => {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <ScrollView>
        <TouchableOpacity onPress={() => { 
            alert('Fitur ini belum tersedia');
        }}>
            <View style={styles.item}>
            <Image
                style={{height: 50, width: 50, borderRadius: 10}}
                source={ILDaftar}
            />
            <Text style={styles.title2}>Basic Information</Text>
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
            <Text style={styles.title2}>Health Metrics</Text>
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
            <Text style={styles.title2}>Conditions & Symptoms</Text>
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
            <Text style={styles.title2}>Clinical Vitals</Text>
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
            <Text style={styles.title2}>Allergies</Text>
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
            <Text style={styles.title2}>Immunization</Text>
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
            <Text style={styles.title2}>Lab Results</Text>
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
            <Text style={styles.title2}>Medications</Text>
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
            <Text style={styles.title2}>Procedures</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Radiologi')}>
            <View style={styles.item}>
            <Image
                style={{height: 50, width: 50, borderRadius: 10}}
                source={ILDaftar}
            />
            <Text style={styles.title2}>Radiologi</Text>
            </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyRecord;

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
