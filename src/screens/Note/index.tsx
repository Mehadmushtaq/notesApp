import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import Pdf from 'react-native-pdf';

const Note = ({route}: {route: any}) => {
  const {url} = route?.params;

  return (
    <View>
      <Text>{url}</Text>
      <Pdf
        trustAllCerts={false}
        source={{uri: url}}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`Current page: ${page}`);
        }}
        onError={error => {
          console.log(error);
        }}
        onPressLink={uri => {
          console.log(`Link pressed: ${uri}`);
        }}
        style={styles.pdf}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  pdf: {
    width: 300,
    height: 300,
    borderWidth: 1,
    margin: 10,
    // width: Dimensions.get('window').width,
    // height: Dimensions.get('window').height,
    flex: 1,
  },
});

export default Note;
