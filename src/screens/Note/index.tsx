import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import Pdf from 'react-native-pdf';

const Note = ({route}: {route: any}) => {
  const {name} = route?.params;
  const url = `bundle-assets://${name}`;

  return (
    <View>
      <Pdf
        trustAllCerts={false}
        // source={require('../../assets/pdf/Class-9th-Maths-Science-Group-Exercise-1.1.pdf')}
        // source={{uri: url, cache: true}}
        source={{
          uri: url,
        }}
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
      <Button icon="download-outline">Download</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  pdf: {
    // width: 300,
    // height: 300,
    // borderWidth: 1,
    // margin: 10,
    width: Dimensions.get('window').width - 10,
    height: Dimensions.get('window').height - 100,
    // flex: 1,
  },
});

export default Note;
