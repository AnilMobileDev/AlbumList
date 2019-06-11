import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const {textStyle, viewStyle} = styles
  return(
    <View style = {viewStyle}>
      <Text style = {textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    height: 80,
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
    shadowColor: '#000',
    shadowOffset: {width : 0, height: 2},
    shadowOpacity: 0.2
  },
  textStyle: {
    fontSize: 24
  }
}

export default Header;
