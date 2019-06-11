/**
 * @format
 */

import React from 'react';
import {AppRegistry, Text, View} from 'react-native';
import {name as appName} from './app.json';
import Header from './src/components/header';
import AlbumList from './src/components/albumList';

const App = () => {
  return(
    <View style = {{ flex: 1 }}>
      <Header headerText = {'Albums'}/>
      <AlbumList/>
    </View>
  );
};

AppRegistry.registerComponent(appName, () => App);
