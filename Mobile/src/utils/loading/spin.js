/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Animated,
  Easing,
  StyleSheet,
} from 'react-native';


const Spin = (props) => {
  const [useSpin] = useState({
    spinValue: new Animated.Value(0),
  });


  const spinStart = () => {
    useSpin.spinValue.setValue(0);
    Animated.timing(
      useSpin.spinValue, {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear,
        useNativeDriver: true,
      },
    ).start(() => spinStart());
  };

  useEffect(() => {
    spinStart();
  }, [props.onSpin]);

  const spinConfig = useSpin.spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const styles = StyleSheet.create({
    spin: {
      height: 30,
      width: 30,
      transform: [{ rotate: spinConfig }],
    },
  });

  return (
    <Animated.Image
      style={styles.spin}
      source={require('../../assets/images/loading/pizza.png')}
    />
  );
};

export default Spin;

Spin.prototypes = {
  onSpin: PropTypes.bool.isRequired,
};
