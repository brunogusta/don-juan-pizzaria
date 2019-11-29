import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { KeyboardAvoidingView } from 'react-native';
import { showMessage } from 'react-native-flash-message';

import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { Types as RegisterType } from '../../store/ducks/userRegister';

import {
  ImageBackground,
  Container,
  ContainerLogo,
  Logo,
  Form,
  Input,
  BtnRegisterSubmit,
  BtnRegisterSubmitText,
  TextError,
  BtnReturnToLogin,
  BtnReturnToLoginText,
} from './styles';

import BackgroundImage from '../../assets/images/background_login.png';
import Logoimg from '../../assets/images/logo.png';
import Spin from '../../utils/loading/spin';

const Register = (props) => {
  const [useEvents, setEvents] = useState({
    spin: false,
    success: false,
    error: false,
    errorMessage: '',
  });

  const dispatch = useDispatch();

  const hadleSubmitValues = ({ email, password, name }) => {
    const data = {
      name,
      email,
      password,
    };

    dispatch({
      type: RegisterType.REGISTER_REQUEST,
      payload: data,
    });

    setEvents({
      ...useEvents,
      spin: true,
    });
  };

  const { userRegister } = useSelector(value => value);

  useEffect(() => {
    setEvents({
      ...useEvents,
      error: userRegister.error,
      success: userRegister.success,
      spin: userRegister.spinOff,
      errorMessage: userRegister.errorMessage,
    });

    if (useEvents.success) {
      props.navigation.navigate('Login');
    }

    dispatch({
      type: RegisterType.REGISTER_RESET,
    });
  }, [userRegister.error || userRegister.success]);


  return (
    <ImageBackground source={BackgroundImage}>
      {useEvents.error
        && showMessage({
          message: useEvents.errorMessage,
          type: 'error',
          backgroundColor: '#E5293E',
        })}
      {useEvents.success
        && showMessage({
          message: 'Cadastrado com sucesso!',
          type: 'success',
        })}

      {/* eslint-disable-next-line react-native/no-inline-styles */}
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
        <Container>
          <Formik
            initialValues={{
              email: '', name: '', password: '', confirmPassword: '',
            }}
            onSubmit={values => hadleSubmitValues(values)}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email('O E-mail informado não é válido.')
                .required('O E-mail é obrigatório.'),
              name: Yup.string()
                .required('O nome é obrigatório.'),
              password: Yup.string()
                .min(1, 'A senha deve ter no mínimo 6 caracteres.')
                .required('A senha é obrigatória.'),
              confirmPassword: Yup.string().test('', 'As senhas não são idênticas', function test(
                value,
              ) {
                return this.parent.password === value;
              }),
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
              <Form>
                <Input
                  placeholder="E-mail"
                  keyboardType="email-address"
                  autoCorrect={false}
                  autoCapitalize="none"
                  value={values.email}
                  onBlur={() => setFieldTouched('email')}
                  onChangeText={handleChange('email')}
                />
                {touched.email && errors.email && <TextError>{errors.email}</TextError>}
                <Input
                  placeholder="Nome"
                  keyboardType="default"
                  autoCorrect={false}
                  value={values.name}
                  onBlur={() => setFieldTouched('name')}
                  onChangeText={handleChange('name')}
                />
                {touched.name && errors.name && <TextError>{errors.name}</TextError>}
                <Input
                  placeholder="Senha secreta"
                  onBlur={() => setFieldTouched('password')}
                  value={values.password}
                  autoCorrect={false}
                  autoCapitalize="none"
                  onChangeText={handleChange('password')}
                  secureTextEntry
                />
                {touched.password && errors.password && <TextError>{errors.password}</TextError>}
                <Input
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholder="Confirmar senha"
                  value={values.confirmPassword}
                  onBlur={() => setFieldTouched('confirmPassword')}
                  onChangeText={handleChange('confirmPassword')}
                  secureTextEntry
                />
                {touched.confirmPassword && errors.confirmPassword && (
                  <TextError>{errors.confirmPassword}</TextError>
                )}

                <BtnRegisterSubmit onPress={handleSubmit} disabled={!isValid}>
                  {useEvents.spin ? <Spin /> : <BtnRegisterSubmitText>Enviar</BtnRegisterSubmitText>}
                </BtnRegisterSubmit>

                <BtnReturnToLogin onPress={() => props.navigation.navigate('Login')}>
                  <BtnReturnToLoginText>Já tenho cadastro</BtnReturnToLoginText>
                </BtnReturnToLogin>
              </Form>
            )}
          </Formik>
        </Container>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

Register.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Register;
