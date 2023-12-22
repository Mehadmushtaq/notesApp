import {Animated, PanResponder, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

//steps
//1. need value first (value should not normal number because it's hard to manage too much renders in a second) so use Animated.Value()
//2. useNativeDriver: true (it will use native OS to manage animation instead of JS thread to improve performance as JS is single threaded)
const Animation = () => {
  const leftValue = useState(new Animated.Value(0))[0];
  const pan = useState(new Animated.ValueXY())[0];

  const panResponder = useState(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true, //do you want to read/response to the touch move gesture? - yes
      //handle movement
      //dx and dy is the distance of the gesture from its starting point along the x-axis and y-axis respectively
      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}]),

      //takes values form offset and set to base so it will stop where it is stopped
      //   onPanResponderRelease: () => {
      //     pan.extractOffset();
      //   },

      onPanResponderRelease: () => {
        Animated.spring(
          pan, // Auto-multiplexed //initial value
          {toValue: {x: 0, y: 0}, useNativeDriver: true}, // Back to zero and animation handled by native OS instead of JS thread
        ).start();
      },
    }),
  )[0];

  const moveLeft = () => {
    Animated.timing(leftValue, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const moveRight = () => {
    Animated.timing(leftValue, {
      toValue: -100,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.heading}>Animation</Text>
      <Animated.View
        style={[styles.box, {marginLeft: leftValue}]}></Animated.View>
      <View style={{flexDirection: 'row', columnGap: 10}}>
        <Text onPress={moveRight}>Move Left</Text>
        <Text onPress={moveLeft}>Move Right</Text>
      </View>

      <Animated.View
        {...panResponder.panHandlers}
        style={[
          //   pan.getLayout(),
          //OR
          {
            transform: [{translateX: pan.x}, {translateY: pan.y}],
          },
          styles.box,
        ]}></Animated.View>
      <Text onPress={moveLeft}>Drag me</Text>
    </View>
  );
};

export default Animation;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    marginVertical: 20,
  },
  box: {
    height: 100,
    borderRadius: 10,
    width: 100,
    borderWidth: 1,
    backgroundColor: '#61dafb',
  },
});
