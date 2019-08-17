import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Animated,
  Easing,
  StyleSheet,
} from 'react-native';

import { ContentDetail, CloseBtn, CloseBtnText } from './styles';

const DetailsModal = ({ detailData, isVisible, changeInfoIcon }) => {
  const [animation, useAnimation] = useState({
    modalYtranslate: new Animated.Value(0),
    opacityDetail: new Animated.Value(0),
    showAnimation: false,
    data: [],
  });

  useEffect(() => {
    useAnimation({
      ...animation,
      showAnimation: true,
    });
  }, []);


  const detailsTextOpacity = animation.opacityDetail.interpolate({
    inputRange: [0, 0.25, 0.5, 0.75, 1],
    outputRange: [0, 0.25, 0.5, 0.75, 1],
  });

  const modalMoveY = animation.modalYtranslate.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -220],
  });

  const translateStyle = { transform: [{ translateY: modalMoveY }] };

  if (isVisible) {
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
  }


  const handlerEvents = () => {
    useAnimation({
      ...animation,
      showAnimation: false,
    });

    changeInfoIcon(detailData);

    console.log(animation.data);
  };

  const closeAnimation = () => {
    Animated.timing(animation.modalYtranslate, {
      toValue: 0,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => handlerEvents());
  };


  const styles = StyleSheet.create({
    box: {
      position: 'absolute',
      width: 180,
      height: 220,
      bottom: -220,
      borderRadius: 5,
      backgroundColor: '#fff',
      zIndex: 20,
    },
    detailText: {
      color: '#000',
      fontSize: 20,
      zIndex: 20,
    },
  });

  return (
    <>
      {animation.showAnimation
         && (
         <Animated.View style={[
           styles.box,
           translateStyle,
         ]}
         >
           <ContentDetail>
             <Animated.Text style={[
               styles.detailText,
               { opacity: detailsTextOpacity }]}
             >
          Hello
             </Animated.Text>
             <CloseBtn onPress={closeAnimation}>
               <CloseBtnText>Close</CloseBtnText>
             </CloseBtn>
           </ContentDetail>
         </Animated.View>
         )
    }
    </>
  );
};


export default DetailsModal;

DetailsModal.prototypes = {
  onSpin: PropTypes.bool.isRequired,
};
