import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import { debounce } from 'debounce';

import {
  Container,
  BackgroundImage,
  PageHeader,
  PageHeaderText,
  ReturnButton,
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
  });

  const [cepInput, useCepInput] = useState({
    cep: '',
  });


  const { totalValues } = useSelector(state => state);
  const [cost, useTotalValue] = useState({
    totalCost: Number,
  });


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

    console.log(totalValues.values);
  }, [totalValues]);


  const resetTotalValue = () => {
    const sizeCost = totalValues.values.find(value => value[0]);

    console.log(sizeCost);

    navigation.navigate('SelectType');
  };

  const dispatch = useDispatch();
  const handleSubmitValues = (values) => {
    const formatedData = {
      observations: values.note,
      cep: cepInput.cep,
      number: values.number,
      logradouro: userData.logradouro,
      bairro: userData.bairro,
    };

    dispatch({
      type: userActions.USER_DATA,
      payload: formatedData,
    });

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


  return (
    <Container>
      <BackgroundImage source={HeaderImage} />
      <PageHeader>
        <ReturnButton onPress={resetTotalValue}>
          <Icon name="keyboard-arrow-left" size={27} color="#fff" />
          <PageHeaderText>Finalizar o Pedido</PageHeaderText>
        </ReturnButton>
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
                value={values.note}
                multiline
                onChangeText={handleChange('note')}
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
                  value={values.number}
                  onChangeText={handleChange('number')}
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
