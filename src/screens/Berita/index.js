import React from 'react';
import {WebView} from 'react-native-webview';

const Berita = () => {
  return (
    <>
      <WebView
        source={{
          uri: 'https://rsupfatmawati.id/Sorotan/index',
        }}
      />
    </>
  );
};

export default Berita;
