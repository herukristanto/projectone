import React from 'react';
import {View, Text} from 'react-native';
import {WebView} from 'react-native-webview';

const Reservasi = () => {
  return (
    <WebView
      source={{
        uri: 'https://app.rsupfatmawati.id/reservasi-online/'
      }}
    />
  );
};

export default Reservasi;
