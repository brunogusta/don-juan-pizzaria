import React, { useState } from 'react';
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

const CheckOrder = ({ navigation }) => {
  const [getAdress, useGetAdress] = useState({
    logradouro: '',
    bairro: '',
    error: '',
  });

  const [cepInput, useCepInput] = useState({
    cep: '',
  });

  const handleSubmitValues = (values) => {
    console.log(values);
  };

  const setAdrees = (data) => {
    useGetAdress({
      ...getAdress,
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
      useGetAdress({
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
        <ReturnButton onPress={() => navigation.navigate('SelectType')}>
          <Icon name="keyboard-arrow-left" size={27} color="#fff" />
          <PageHeaderText>Finalizar o Pedido</PageHeaderText>
        </ReturnButton>
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
            handleSubmit,
            handleChange,
            errors,
            isValid,
            setFieldTouched,
            touched,
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
                  value={getAdress.logradouro}
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
                value={getAdress.bairro}
                editable={false}
                onChangeText={handleChange('neighborhood')}
              />
              <FinalizeBtn>
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
