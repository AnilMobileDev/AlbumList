import React from 'react';
import { Text, View } from 'react-native';

const Card = (props) => {
  return(
    <View style = {styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#000',
    borderBottomWidth:0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height:2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation:1,
    marginLeft:5,
    marginRight:5,
    marginBottom:10,
    backgroundColor:'#F8F8F8'
  }
};

export default Card;
