import React, {useState, useEffect} from 'react';
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
  ItemBoxHeader,
  PizzaImage,
  MoreDetailsBox,
  DetailButton,
  Title
} from './styles';

import HeaderImage from '../../assets/images/header-background2x.png';
import Pizza from '../../assets/images/pizzas/1.png'

const SelectSize = ({ navigation }) => {
const [useEvents, setEvents] = useState({
  info: false,
  selected:false,
  keys:[],
  keysInfo :[]
})


const setSelected = (key) => {
  const isSeted = useEvents.keys.find(keyItem => keyItem === key)


  if(useEvents.selected && isSeted) {
    const filtered = useEvents.keys.filter(key => key !== isSeted)

    setEvents({
      ...useEvents,
      selected: true,
      keys: filtered
    })
    return
  }
  setEvents({
    ...useEvents,
    selected: true,
    keys: [...useEvents.keys, key]
  })
}

const changeInfo = (key) => {
  const isSeted = useEvents.keysInfo.find(keyItem => keyItem === key)


  if(useEvents.selected && isSeted) {
    const filtered = useEvents.keysInfo.filter(key => key !== isSeted)

    setEvents({
      ...useEvents,
      info: true,
      keysInfo: filtered
    })
    return
  }
  setEvents({
    ...useEvents,
    info: true,
    keysInfo: [...useEvents.keysInfo, key]
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
          {key:'Calabresa'},
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
                {useEvents.selected && useEvents.keys.find(keyItem => keyItem === item.key ) ?
                <Icon name='checkbox-marked-circle' size={27} color={'#06E206'} /> : null}
              </ItemBoxHeader>
              <PizzaImage source={Pizza}/>
              <MoreDetailsBox>
                <Title>
                  <ItemText>{item.key}</ItemText>
                </Title>
                <DetailButton onPress={() => changeInfo(item.key)}>
                  {useEvents.info && useEvents.keysInfo.find(keyItem => keyItem === item.key)
                    ?
                    <Icon name='information' color={'#E5293E'} size={25} />
                    :
                    <Icon name='information-outline' color={'#E5293E'} size={25} />}
                </DetailButton>
              </MoreDetailsBox>
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
