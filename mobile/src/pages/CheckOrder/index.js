import React, { useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { debounce } from 'debounce';

import {
  Container,
  BackgroundImage,
  PageHeader,
  PageHeaderText,
  FormContainer,
  NoteInput,
  CepInput,
  StreetInput,
  NumberInput,
  NeighborhoodInput,
  StreetLine,
  FinalizeBtn,
  FinalizeBtnText,
}
  from './styles';

import HeaderImage from '../../assets/images/header-background2x.png';

import cepApi from '../../services/cep';

import { Types as userActions } from '../../store/ducks/userPreferences';

const CheckOrder = ({ navigation }) => {
  const [userData, useUserData] = useState({
    logradouro: '',
    bairro: '',
    error: '',
    cep: '',
    number: '',
    observations: '',
  });

  const [cepInput, useCepInput] = useState({
    cep: '',
  });


  const { totalValues } = useSelector(state => state);
  const [cost, useTotalValue] = useState({
    totalCost: Number,
  });

  const getLocalData = async () => {
    const keys = ['logradouro', 'bairro', 'cep', 'number', 'observations'];

    await AsyncStorage.multiGet(keys, (err, stores) => {
      const data = stores.map((result, i, store) => {
        console.log(store);
        const savedForm = {
          logradouro: store[0][1],
          bairro: store[1][1],
          cep: store[2][1],
          number: store[3][1],
          observations: store[4][1],
        };

        return savedForm;
      });

      const {
        logradouro, bairro, cep, number, observations,
      } = data[0];

      if (!err) {
        useUserData({
          ...userData,
          logradouro,
          bairro,
          number,
          observations,
        });


        useCepInput({
          cep,
        });
      }


      console.log(number);
    });

    await AsyncStorage.multiRemove(keys);
  };

  useEffect(() => {
    const toNumber = totalValues.values.map((value) => {
      let number = value.replace('.', '');

      number = value.replace(',', '.');
      number = parseFloat(number);

      return number;
    });

    const totalValue = toNumber.reduce((num1, num2) => num1 + num2);
    const fixed = totalValue.toFixed(2);

    const coinTransform = fixed.replace('.', ',');

    useTotalValue({
      totalCost: coinTransform,
    });

    getLocalData();
  }, [totalValues]);


  const resetTotalValue = () => {
    const sizeCost = totalValues.values.find(value => value[0]);

    console.log(sizeCost);

    navigation.navigate('SelectType');
  };


  const setLocalData = async (formatedData) => {
    const {
      observations, cep, number, logradouro, bairro,
    } = formatedData;

    try {
      await AsyncStorage.setItem('logradouro', logradouro);
      await AsyncStorage.setItem('bairro', bairro);
      await AsyncStorage.setItem('observations', observations);
      await AsyncStorage.setItem('number', number);
      await AsyncStorage.setItem('cep', cep);
    } catch (err) {
      console.log(err);
    }
  };


  const dispatch = useDispatch();
  const handleSubmitValues = () => {
    const formatedData = {
      observations: userData.observations,
      cep: cepInput.cep,
      number: userData.number,
      logradouro: userData.logradouro,
      bairro: userData.bairro,
    };

    dispatch({
      type: userActions.USER_DATA,
      payload: formatedData,
    });


    setLocalData(formatedData);

    navigation.navigate('Cart');
  };

  const setAdrees = (data) => {
    useUserData({
      ...userData,
      logradouro: data.logradouro,
      bairro: data.bairro,
      error: data,
    });
  };

  const changeNumber = (num) => {
    useUserData({
      ...userData,
      number: num,
    });
  };

  const changeObservations = (text) => {
    useUserData({
      ...userData,
      observations: text,
    });
  };

  const validateCep = (text) => {
    useCepInput({
      ...cepInput,
      cep: text,
    });


    if (text === '') {
      useUserData({
        logradouro: '',
        bairro: '',
        error: '',
      });
    }

    const validacep = /^[0-8]{8}$/;
    if (validacep.test(text)) {
      debounce(cepApi.get(`/${text}/json/`).then(({ data }) => setAdrees(data)), 500);
    }
  };


  useEffect(() => {

  }, []);


  return (
    <Container>
      <BackgroundImage source={HeaderImage} />
      <PageHeader>
        <PageHeaderText>Dados para entrega</PageHeaderText>
        <PageHeaderText>{`R$ ${cost.totalCost}`}</PageHeaderText>
      </PageHeader>
      <FormContainer>
        <Formik
          initialValues={{
            note: '', cep: '', number: '',
          }}
          onSubmit={values => handleSubmitValues(values)}
          validationSchema={yup.object().shape({
            note: yup
              .string(),
            cep: yup
              .number()
              .required('O CEP é obrigatório.'),
            number: yup
              .number()
              .required('O número é obrigatório'),
          })}
        >
          {({
            values,
            handleChange,
            setFieldTouched,
          }) => (
            <>
              <NoteInput
                placeholder="Alguma observação? Ex.Apto."
                onBlur={() => setFieldTouched('note')}
                value={userData.observations}
                multiline
                onChangeText={text => changeObservations(text)}
              />
              <CepInput
                placeholder="Qual seu CEP?"
                value={cepInput.cep}
                keyboardType="number-pad"
                maxLength={8}
                onChangeText={text => validateCep(text)}
              />
              <StreetLine>
                <StreetInput
                  placeholder="Rua"
                  onBlur={() => setFieldTouched('street')}
                  value={userData.logradouro}
                  editable={false}
                  multiline
                />
                <NumberInput
                  placeholder="Nº"
                  keyboardType="number-pad"
                  onBlur={() => setFieldTouched('number')}
                  value={userData.number}
                  onChangeText={num => changeNumber(num)}
                />
              </StreetLine>
              <NeighborhoodInput
                placeholder="Bairro"
                onBlur={() => setFieldTouched('neighborhood')}
                value={userData.bairro}
                editable={false}
                onChangeText={handleChange('neighborhood')}
              />
              <FinalizeBtn onPress={() => handleSubmitValues(values)}>
                <FinalizeBtnText>
                Finalizar
                </FinalizeBtnText>
              </FinalizeBtn>
            </>
          )}
        </Formik>
      </FormContainer>
    </Container>
  );
};

CheckOrder.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default CheckOrder;
