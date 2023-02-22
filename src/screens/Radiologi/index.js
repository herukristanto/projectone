import React from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';

const Radiologi = () => {
  return (
    <>
    <WebView
      source={{
        uri: 'http://172.16.10.12/ZFP?mode=proxy&lights=on&titlebar=on#View&ris_pat_id=01773863&un=radiologi&pw=hAw%2fVR1w58IFdmZIeP7HplqtDhjX8lXffsjUz6uMhyy2iPZXuiI7vbo%2fAc2%2boj%2bF',
      }}
    />
    </>
  );
};

export default Radiologi;
