import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Animated,
  Easing,
  StyleSheet,
} from 'react-native';

import { InfoButton, CloseBtn, CloseBtnText } from './styles';

const DetailsModal = ({ value }) => {
  const [animation, useAnimation] = useState({
    modalYtranslate: new Animated.Value(0),
    opacityDetail: new Animated.Value(0),
    showAnimated: false,
  });


  const detailsTextOpacity = animation.opacityDetail.interpolate({
    inputRange: [0, 0.25, 0.5, 0.75, 1],
    outputRange: [0, 0.25, 0.5, 0.75, 1],
  });

  const modalMoveY = animation.modalYtranslate.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -220],
  });

  const translateStyle = { transform: [{ translateY: modalMoveY }] };

  const startAnimation = () => {
    useAnimation({
      ...animation,
      showAnimated: true,
    });

    Animated.sequence([
      Animated.timing(animation.modalYtranslate, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(animation.opacityDetail, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const closeModal = () => {
    Animated.timing(animation.modalYtranslate, {
      toValue: 0,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => useAnimation({
      ...animation,
      showAnimated: false,
    }));
  };


  const styles = StyleSheet.create({
    box: {
      position: 'absolute',
      width: 180,
      height: 220,
      bottom: -250,
      borderRadius: 5,
      backgroundColor: '#fff',
      zIndex: 20,
    },
    title: {
      color: '#000',
      fontSize: 20,
    },
    text: {
      color: '#000',
      fontSize: 14,

    },
  });


  return (
    <>
      {animation.showAnimated
      && (
      <Animated.View style={[
        styles.box,
        translateStyle,
      ]}
      >
        <CloseBtn onPress={closeModal}>
          <CloseBtnText><Icon name="close-circle" color="#E5293E" size={25} /></CloseBtnText>
        </CloseBtn>

        <Animated.Text style={[
          styles.text,
          { opacity: detailsTextOpacity }]}
        >
          {value.title}
        </Animated.Text>
        <Animated.Text style={[
          styles.text,
          { opacity: detailsTextOpacity }]}
        >
          {value.details}
        </Animated.Text>
      </Animated.View>
      )
      }
      <InfoButton onPress={startAnimation}>
        <Icon name="information" color="#E5293E" size={25} />
      </InfoButton>
    </>
  );
};


export default DetailsModal;

DetailsModal.prototypes = {
  onSpin: PropTypes.bool.isRequired,
};
