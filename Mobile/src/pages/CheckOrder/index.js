import React, { useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

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


const CheckOrder = ({ navigation }) => {
  const [events, useEvents] = useState({
  });

  const handleSubmitValues = (values) => {
    console.log(values);
  };

  const onSizeChange = ({ nativeEvent: event }) => {
    useEvents({ textareaHeight: event.contentSize.height });
  };
  return (
    <Container>
      <BackgroundImage source={HeaderImage} />
      <PageHeader>
        <ReturnButton onPress={() => navigation.navigate('SelectType')}>
          <Icon name="keyboard-arrow-left" size={27} color="#fff" />
          <PageHeaderText>Finalizar o Pedido</PageHeaderText>
        </ReturnButton>
        <PageHeaderText>R$107,00</PageHeaderText>
      </PageHeader>
      <FormContainer>
        <Formik
          initialValues={{
            note: '', cep: '', street: '', number: '', neighborhood: '',
          }}
          onSubmit={values => handleSubmitValues(values)}
          validationSchema={yup.object().shape({
            note: yup
              .string(),
            cep: yup
              .number()
              .required('O CEP é obrigatório.'),
            street: yup
              .string(),
            number: yup
              .number()
              .required('O número é obrigatório'),
            neighborhood: yup
              .string()
              .required('O bairro é obrigatório'),
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
                onContentSizeChange={onSizeChange}
              />
              <CepInput
                placeholder="Qual seu CEP?"
                onBlur={() => setFieldTouched('cep')}
                value={values.cep}
                keyboardType="number-pad"
                maxLength={5}
                onChangeText={handleChange('cep')}
              />
              <StreetLine>
                <StreetInput
                  placeholder="Rua"
                  onBlur={() => setFieldTouched('street')}
                  value={values.street}
                  onChangeText={handleChange('street')}
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
                value={values.neighborhood}
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
