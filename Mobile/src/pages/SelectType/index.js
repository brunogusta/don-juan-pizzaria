import React, {useState} from 'react';
import {FlatList} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';


import {
  Container,
  BackgroundImage,
  ItemBox,
  ItemText,
  FlatListHeight,
  SelectButton,
  PageHeader,
  PageHeaderText,
  ReturnButton,
  ItemBoxHeader
} from './styles';

import HeaderImage from '../../assets/images/header-background2x.png';


const SelectSize = ({ navigation }) => {
const [useEvents, setEvents] = useState({
  selected:false,
  keys:[]
})


const setSelected = (key) => {
  setEvents({
    selected: true,
    keys: [...useEvents.keys, key]
  })
}

return (
  <Container>
    <BackgroundImage source={HeaderImage} />
    <PageHeader>
      <ReturnButton onPress={() => navigation.navigate('SelectSize')}>
        <IconMaterial name="keyboard-arrow-left" size={27} color="#fff" />
        <PageHeaderText>Selecione a Pizza</PageHeaderText>
      </ReturnButton>
    </PageHeader>
    <FlatListHeight>
        <FlatList
        data={[
          {key:'Devin'},
          {key:'mark'},
          {key:'devan'},
          {key:'batata'},
          {key:'repolho'},
          {key:'teste'},
          {key:'arroz'},
          {key:'feijão'},
        ]}
        renderItem={({item}) => (
          <SelectButton onPress={() => setSelected(item.key)}>
          <ItemBox>
              <ItemBoxHeader>
                {useEvents.selected && item.key === useEvents.keys ? <Icon name='checkbox-marked-circle' size={27} color={'#06E206'} /> : null}
              </ItemBoxHeader>
              <ItemText>{item.key}</ItemText>
            </ItemBox>
          </SelectButton>
        )}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'center'}}
        />
    </FlatListHeight>
  </Container>
  )
}

SelectSize.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
export default SelectSize;
