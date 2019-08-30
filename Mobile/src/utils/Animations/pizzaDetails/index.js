import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Animated,
  Easing,
  StyleSheet,
  FlatList,
} from 'react-native';

import {
  InfoButton, CloseBtn, CloseBtnText, DetailsText, Arrow, ContainerList,
} from './styles';

import OvenLogo from '../../../assets/images/pizzas/oven.png';
import PizzaArrow from '../../../assets/images/pizzas/pizzaArrow.png';

const DetailsModal = ({ value }) => {
  const [animation, useAnimation] = useState({
    modalYtranslate: new Animated.Value(0),
    opacityDetail: new Animated.Value(0),
    showAnimated: false,
    info: false,
  });


  const detailsTextOpacity = animation.opacityDetail.interpolate({
    inputRange: [0.5, 0.75, 1],
    outputRange: [0.5, 0.75, 1],
  });

  const modalMoveY = animation.modalYtranslate.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -220],
  });

  const translateStyle = { transform: [{ translateY: modalMoveY }] };

  const startAnimation = () => {
    useAnimation({
      ...animation,
      info: true,
      showAnimated: true,
    });
    Animated.sequence([
      Animated.spring(animation.modalYtranslate, {
        toValue: 1,
        friction: 6,
        useNativeDriver: true,
      }),
      Animated.timing(animation.opacityDetail, {
        toValue: 1,
        duration: 600,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const closeModal = () => {
    Animated.timing(animation.modalYtranslate, {
      toValue: 0,
      duration: 300,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => useAnimation({
      ...animation,
      info: false,
      showAnimated: false,
    }));
  };


  const styles = StyleSheet.create({
    box: {
      position: 'absolute',
      width: 180,
      height: 221,
      bottom: -241,
      borderRadius: 5,
      backgroundColor: '#E37a7a',
      zIndex: 20,
    },
    ovenLogo: {
      marginTop: 30,
      height: 40,
      width: 40,
      alignSelf: 'center',
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
            <CloseBtnText><Icon name="close-circle" color="#EEE" size={25} /></CloseBtnText>
          </CloseBtn>
          <Animated.Image
            source={OvenLogo}
            style={[styles.ovenLogo,
              { opacity: detailsTextOpacity }]}
          />
          <Animated.View style={[
            { opacity: detailsTextOpacity }]}
          >
            <ContainerList>
              <FlatList
              // eslint-disable-next-line react-native/no-inline-styles
                style={{ flex: 1 }}
                data={value.details}
                renderItem={({ item, index }) => (
                  <DetailsText key={index}>
                    <Arrow source={PizzaArrow} /> {item.key}
                  </DetailsText>
                )}
                listKey={(item, index) => `D${index.toString()}`}
              />
            </ContainerList>
          </Animated.View>
        </Animated.View>
      )
      }
      <InfoButton onPress={startAnimation}>
        {animation.info ? <Icon name="information" color="#E5293E" size={25} /> : <Icon name="information-outline" color="#E5293E" size={25} />}
      </InfoButton>
    </>
  );
};


export default DetailsModal;

DetailsModal.propTypes = {
  value: PropTypes.shape({
    details: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string,
    })),
  }).isRequired,
};
