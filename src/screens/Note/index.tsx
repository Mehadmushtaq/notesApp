import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import Pdf from 'react-native-pdf';
// import PDFView from 'react-native-view-pdf';

const Note = ({route}: {route: any}) => {
  const {url} = route?.params;
  const resourceType = 'url';

  // console.log(url);
  return (
    <View>
      <Text>{url}</Text>
      {/* <PDFView
        fadeInDuration={250.0}
        style={{flex: 1}}
        resource={url}
        resourceType={resourceType}
        onLoad={() => console.log(`PDF rendered from ${resourceType}`)}
        onError={error => console.log('Cannot render PDF', error)}
      /> */}
      <Pdf
        source={{
          // uri: 'file:///Users/optimamacmini/sites/notesApp/src/assets/pdf/sample.pdf',
          uri: 'https://api.printnode.com/static/test/pdf/multipage.pdf',
          cache: false,
        }}
        style={styles.pdf}
        trustAllCerts={false}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`current page: ${page}`);
        }}
        onError={error => {
          console.log(error);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  pdf: {
    flex: 1,
    borderWidth: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default Note;
