import React, { Component } from 'react';
import { Text, ScrollView, View, ActivityIndicator } from 'react-native';
import axios from 'axios';
import AlbumDetail from './albumDetail';

class AlbumList extends Component {
  state = { albums : [] };

  componentWillMount() {
    console.log('Album list component is mounting');
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ albums: response.data }));
  }

  albumCards() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album}/>
    );
  }


  renderAlbums() {
    if (this.state.albums.length > 0) {
      return (
        <ScrollView>
        { this.albumCards() }
        </ScrollView>
      );
    }
      return  <ActivityIndicator size="large" color="#3481F6" />
  }

  render() {
    console.log(this.state);
    return (
      <View style = {styles.containerStyle}>
        {this.renderAlbums()}
      </View>
    );
  };

}

const styles = {
  containerStyle : {
      flex: 1,
      justifyContent:'center',
  },
  scrollViewStyle : {
    flex: 1
   }
}


export default AlbumList;
