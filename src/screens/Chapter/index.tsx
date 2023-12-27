import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';

interface ChapterItemProps {
  title: string;
  chapter: string;
  url: string;
  name: string;
}

const ChapterItem: React.FC<ChapterItemProps> = ({
  title,
  chapter,
  url,
  name,
}) => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.chapters}>
      <Pressable onPress={() => navigation.navigate('Note', {name})}>
        <Text style={styles.title}>{title}</Text>
        <Text>{chapter}</Text>
      </Pressable>
    </View>
  );
};

const Chapter: React.FC = ({navigation}: any) => {
  const chapters = [
    {
      chapter: 'Chapter 1',
      title: 'Matrices and Determinants - sample pdf',
      url: 'https://www.africau.edu/images/default/sample.pdf',
      fileName: 'Document.pdf',
    },
    {
      chapter: 'Chapter 2',
      title: 'Real and Complex Numbers - firebase',
      url: 'https://firebasestorage.googleapis.com/v0/b/notesapp-65035.appspot.com/o/10th%20Maths%20Chap1%20Ex%201.1.pdf?alt=media&token=cb36e3e9-4226-4e92-bf00-f9b701fac38f',
    },
    {
      chapter: 'Chapter 3',
      title: 'Logarithm',
      url: 'https://drive.google.com/file/d/1Oe4BS5JwcuCRt1c_p1lsKJiEcYmmDda9/view',
    },
    {
      chapter: 'Chapter 4',
      title: 'Algebraic Expressions and Algebraic Formulas',
      url: 'https://drive.google.com/file/d/1Oe4BS5JwcuCRt1c_p1lsKJiEcYmmDda9/view',
    },
    {chapter: 'Chapter 5', title: 'Factorization'},
    {chapter: 'Chapter 6', title: 'Algebraic Manipulation'},
    {chapter: 'Chapter 7', title: 'Linear Equation and Inequalities'},
    {chapter: 'Chapter 8', title: 'Linear Graphs and Their Application'},
    {chapter: 'Chapter 9', title: 'Introduction to Coordinate Geometry'},
    {chapter: 'Chapter 10', title: 'Congruent Triangles'},
    {chapter: 'Chapter 11', title: 'Parallelograms and Triangles'},
    {chapter: 'Chapter 12', title: 'Line Bisectors and Angle Bisectors'},
    {chapter: 'Chapter 13', title: 'Sides and Angles of a Triangle'},
    {chapter: 'Chapter 14', title: 'Ratio and Proportion'},
    {chapter: 'Chapter 15', title: 'Pythagoras Theorem'},
  ];

  return (
    <ScrollView style={styles.container}>
      {chapters.map((chapter, index) => (
        <ChapterItem
          key={index}
          title={chapter.title}
          chapter={chapter.chapter}
          url={chapter.url || ''}
          name={chapter.fileName || ''}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: 10,
  },
  chapters: {
    margin: 5,
    backgroundColor: '#D2DDDE',
    padding: 10,
    borderRadius: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#283C43',
  },
});

export default Chapter;
