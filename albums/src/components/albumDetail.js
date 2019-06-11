import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './card';
import CardSection from './cardSection';
import Button from './button';

const AlbumDetail = ({album}) => {
  const {title, artist, thumbnail_image, image, url } = album;
  const {
    headerContainerStyle,
    thumbnailStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle
  } = styles;
  return (
    <Card>
      <CardSection>
            <View style = {thumbnailContainerStyle}>
              <Image
                source = {{ uri: thumbnail_image }}
                style = {thumbnailStyle}
              />
            </View>
            <View style = {headerContainerStyle}>
              <Text style = {headerTextStyle}>{title}</Text>
              <Text>{artist}</Text>
            </View>
      </CardSection>

      <CardSection>
        <Image
          style = {imageStyle}
          source = {{ uri: image }}
        />
      </CardSection>

      <CardSection>
        <Button onPress = {() => Linking.openURL(url)} >
          Buy now 
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContainerStyle: {
    justifyContent: 'space-around',
    flexDirection: 'column'
  },
  headerTextStyle: {
    fontSize: 18
  },
  imageStyle: {
    height: 300,
    flex:1,
    width:null
  },
  thumbnailStyle: {
    width: 50,
    height:50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  }
};

export default AlbumDetail;
