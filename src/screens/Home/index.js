import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import {
  ICReservasi,
  ICemr,
  ILFrame1,
  ILFrame2,
  ILFrame3,
  ICPayment,
  ICAmbulance,
} from '../../assets';
import {Loading} from '../../components';
import {getData} from '../../utils';
// import {authentication} from '../../config/firebase/fire';
// import {onAuthStateChanged} from 'firebase/auth';

const Home = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState({
    namaLengkap: '',
    nik: '',
  });
  useEffect(() => {
    setLoading(true);
    getData('user')
      .then(res => {
        setProfile(res);
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
        navigation.replace('Login');
      });
  }, []);
  return (
    <>
      <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <ScrollView style={{paddingVertical: 40}}>
          {/* profile */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 30,
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 20,
                fontFamily: 'Raleway-Bold',
              }}>
              Hi, {profile.namaLengkap}
            </Text>

            <TouchableOpacity onPress={() => navigation.replace('UserProfile')}>
              <ImageBackground
                source={{
                  uri: 'https://bootdey.com/img/Content/avatar/avatar6.png',
                }}
                style={{width: 40, height: 40}}
                imageStyle={{borderRadius: 25}}
              />
            </TouchableOpacity>
          </View>

          <Text
            style={{
              color: '#424242',
              fontSize: 14,
              fontFamily: 'Raleway-SemiBold',
              paddingHorizontal: 30,
            }}>
            How are you feeling today ?
          </Text>

          <View style={{paddingHorizontal: 16}}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#06beb6', '#48b1bf']}
              style={{
                padding: 20,
                borderRadius: 15,
                paddingHorizontal: 16,
                marginTop: 20,
                elevation: 5,
              }}>
              <Text style={{color: '#FFFFFF'}}>
                Kementrian Kesehatan Republik Indonesia
              </Text>
              <Text
                style={{color: '#FFFFFF', fontSize: 22, fontWeight: 'bold'}}>
                RSUP Fatmawati
              </Text>
              <View style={{flexDirection: 'row'}}>
                <View style={{marginTop: 40}}>
                  <Text style={{color: '#FFFFFF'}}>{profile.namaLengkap}</Text>
                  <Text style={{color: '#FFFFFF'}}>{profile.nik}</Text>
                </View>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                    flex: 1,
                  }}></View>
              </View>
            </LinearGradient>
          </View>

          {/* modul */}
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              marginHorizontal: 15,
              marginTop: 20,
            }}>
            <View
              style={{
                justifyContent: 'center',
                flexDirection: 'row',
                width: '100%',
                marginBottom: 20,
                marginTop: 20,
              }}>
              <TouchableOpacity
                style={{paddingRight: 15}}
                name="Reservasi"
                onPress={() => navigation.navigate('ListReservasi')}>
                <Image source={ICReservasi} style={{width: 60, height: 60}} />
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 6,
                  }}>
                  RESERVASI
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{paddingRight: 15, paddingLeft: 15}}
                onPress={() => navigation.navigate('MyRecord')}>
                <Image source={ICAmbulance} style={{width: 60, height: 60}} />
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 6,
                  }}>
                  E-PASIEN
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{paddingRight: 15, paddingLeft: 15}}
                onPress={() => {
                  alert('Fitur ini belum tersedia');
                }}>
                <Image source={ICemr} style={{width: 60, height: 60}} />
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 6,
                  }}>
                  Medication
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{paddingLeft: 15}}
                onPress={() => navigation.navigate('Berita')}>
                <Image source={ICPayment} style={{width: 60, height: 60}} />
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 6,
                  }}>
                  Health Guide
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{paddingHorizontal: 15}}>
            <Text style={{fontWeight: 'bold', paddingTop: 10}}>
              Informasi Kesehatan
            </Text>
            <View style={{marginHorizontal: -15}}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View width={16}></View>
                <TouchableOpacity>
                  <View style={{height: 130, marginTop: 15, borderRadius: 10}}>
                    <ScrollView>
                      <View
                        style={{
                          height: 130,
                          width: 230,
                          backgroundColor: '#B4ECE3',
                          marginRight: 20,
                          borderEndWidth: 0.5,
                          borderRadius: 10,
                          borderColor: '#dddddd',
                        }}>
                        <View style={{flex: 2}}>
                          <Image
                            style={{
                              flex: 1,
                              width: null,
                              height: null,
                              resizeMode: 'cover',
                              borderTopRightRadius: 10,
                              borderTopLeftRadius: 10,
                            }}
                            source={ILFrame3}></Image>
                        </View>
                        <View style={{flex: 1}}>
                          <Text
                            style={{flex: 1, paddingLeft: 10, paddingTop: 10}}>
                            Griya Husada
                          </Text>
                        </View>
                      </View>
                    </ScrollView>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={{height: 130, marginTop: 15, borderRadius: 10}}>
                    <ScrollView>
                      <View
                        style={{
                          height: 130,
                          width: 230,
                          backgroundColor: '#B4ECE3',
                          marginRight: 20,
                          borderEndWidth: 0.5,
                          borderRadius: 10,
                          borderColor: '#dddddd',
                        }}>
                        <View style={{flex: 2}}>
                          <Image
                            style={{
                              flex: 1,
                              width: null,
                              height: null,
                              resizeMode: 'cover',
                              borderTopRightRadius: 10,
                              borderTopLeftRadius: 10,
                            }}
                            source={ILFrame3}></Image>
                        </View>
                        <View style={{flex: 1}}>
                          <Text
                            style={{flex: 1, paddingLeft: 10, paddingTop: 10}}>
                            Rawat Jalan
                          </Text>
                        </View>
                      </View>
                    </ScrollView>
                  </View>
                </TouchableOpacity>
              </ScrollView>
            </View>
          </View>

          <View style={{paddingHorizontal: 15}}>
            <Text style={{fontWeight: 'bold', paddingTop: 20}}>Promo</Text>
            <View style={{marginHorizontal: -15}}>
              <ScrollView
                style={{marginTop: 10}}
                horizontal
                showsHorizontalScrollIndicator={false}>
                <View width={16}></View>
                <TouchableOpacity>
                  <View
                    style={{
                      height: 132,
                      width: 136,
                      marginRight: 20,
                      backgroundColor: '#B4ECE3',
                      borderEndWidth: 0.5,
                      borderRadius: 10,
                      borderColor: '#ffff',
                    }}>
                    <View style={{flex: 2}}>
                      <Image
                        style={{
                          flex: 1,
                          width: null,
                          height: null,
                          resizeMode: 'cover',
                          borderTopRightRadius: 10,
                          borderTopLeftRadius: 10,
                        }}
                        source={ILFrame1}></Image>
                    </View>
                    <View style={{flex: 1}}>
                      <Text style={{flex: 1, paddingLeft: 10, paddingTop: 10}}>
                        Health consultation
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity>
                  <View
                    style={{
                      height: 132,
                      width: 136,
                      backgroundColor: '#B4ECE3',
                      marginRight: 20,
                      borderEndWidth: 0.5,
                      borderRadius: 10,
                      borderColor: '#ffff',
                    }}>
                    <View style={{flex: 2}}>
                      <Image
                        style={{
                          flex: 1,
                          width: null,
                          height: null,
                          resizeMode: 'cover',
                          borderTopRightRadius: 10,
                          borderTopLeftRadius: 10,
                        }}
                        source={ILFrame2}></Image>
                    </View>
                    <View style={{flex: 1}}>
                      <Text style={{flex: 1, paddingLeft: 10, paddingTop: 10}}>
                        Health consultation
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={{paddingBottom: 50}}>
                  <View
                    style={{
                      height: 132,
                      width: 136,
                      backgroundColor: '#B4ECE3',
                      marginRight: 20,
                      borderEndWidth: 0.5,
                      borderRadius: 10,
                      borderColor: '#ffff',
                    }}>
                    <View style={{flex: 2}}>
                      <Image
                        style={{
                          flex: 1,
                          width: null,
                          height: null,
                          resizeMode: 'cover',
                          borderTopRightRadius: 10,
                          borderTopLeftRadius: 10,
                        }}
                        source={ILFrame1}></Image>
                    </View>
                    <View style={{flex: 1}}>
                      <Text style={{flex: 1, paddingLeft: 10, paddingTop: 10}}>
                        Health consultation
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </ScrollView>
            </View>
          </View>

          {/* <View style={{paddingHorizontal: 16, marginBottom: 50}}>
          <Text style={styles.ourService}>News</Text>
          <View>
            {console.log(dataNews)}
            <View style={styles.containernews}>
              <FlatList
                style={styles.list}
                data={dataNews}
                keyExtractor={item => {
                  return item.id;
                }}
                ItemSeparatorComponent={() => {
                  return <View style={styles.separator} />;
                }}
                renderItem={post => {
                  const item = post.item;

                  return (
                    <View style={styles.card}>
                      <Image
                        style={styles.cardImage}
                        source={{uri: uriImage + item.gambar_konten}}
                      />
                      <View style={styles.cardHeader}>
                        <View>
                          <Text numberOfLines={1} style={styles.title}>
                            {item.nm_konten}
                          </Text>
                          <Text numberOfLines={3} style={styles.description}>
                            {item.isi_konten}
                          </Text>
                          <View style={styles.timeContainer}>
                            <Image
                              style={styles.iconData}
                              source={{
                                uri: 'https://img.icons8.com/color/96/3498db/calendar.png',
                              }}
                            />
                            <Text style={styles.time}>{item.sysdate_last}</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  );
                }}
              />
            </View>
          </View>
        </View> */}
        </ScrollView>
      </SafeAreaView>
      {loading && <Loading />}
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});
