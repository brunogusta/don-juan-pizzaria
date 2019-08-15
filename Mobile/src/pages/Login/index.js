import React, { useState, useEffect } from "react";
import { KeyboardAvoidingView } from "react-native";
import { showMessage } from "react-native-flash-message";
import PropTypes from "prop-types";
import { Formik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";

import { Types as LoginActions } from "../../store/ducks/userLogin";

import {
  ImageBackground,
  Container,
  ContainerLogo,
  Logo,
  Form,
  Input,
  BtnLogin,
  LoginText,
  BtnRegister,
  RegisterText,
  TextError
} from "./styles";

import BackgroundImage from "../../assets/images/background_login.png";
import Logoimg from "../../assets/images/logo.png";
import Spin from "../../utils/loading/spin";

const Login = props => {
  // User form
  const [useLoginForm, setUserFormValue] = useState({
    spin: false,
    success: false,
    error: false,
    errorMessage: ""
  });

  console.log(useLoginForm.spin);
  const dispatch = useDispatch();

  const hadleSubmitValues = values => {
    const data = {
      email: values.email,
      password: values.password
    };

    setUserFormValue({
      ...useLoginForm,
      spin: true
    });

    dispatch({
      type: LoginActions.LOGIN_REQUEST,
      payload: data
    });
  };

  const { userLogin } = useSelector(state => state);
  const { error } = userLogin.errorMessage;

  useEffect(() => {
    setUserFormValue({
      error: userLogin.error,
      success: userLogin.success,
      errorMessage: error
    });

    dispatch({
      type: LoginActions.LOGIN_RESET
    });

    if (useLoginForm.success) {
      props.navigation.navigate("Menu");
    }
  }, [
    dispatch,
    error,
    props.navigation,
    useLoginForm.success,
    userLogin.error,
    userLogin.success
  ]);

  return (
    <ImageBackground source={BackgroundImage}>
      {useLoginForm.error &&
        showMessage({
          message: useLoginForm.errorMessage,
          type: "error",
          backgroundColor: "#E5293E"
        })}

      {/* eslint-disable-next-line react-native/no-inline-styles */}
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
        <Container>
          <ContainerLogo>
            <Logo source={Logoimg} />
          </ContainerLogo>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={values => hadleSubmitValues(values)}
            validationSchema={yup.object().shape({
              email: yup
                .string()
                .email("O E-mail informado não é válido.")
                .required("O E-mail é obrigatório."),
              password: yup
                .string()
                .min(6, "A senha deve ter no mínimo 6 caracteres.")
                .required("A senha é obrigatória.")
            })}
          >
            {({
              values,
              handleSubmit,
              handleChange,
              errors,
              isValid,
              setFieldTouched,
              touched
            }) => (
              <Form>
                <Input
                  placeholder="E-mail"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  onBlur={() => setFieldTouched("email")}
                  value={values.email}
                  onChangeText={handleChange("email")}
                />
                {touched.email && errors.email && (
                  <TextError>{errors.email}</TextError>
                )}
                <Input
                  placeholder="Senha secreta"
                  onBlur={() => setFieldTouched("password")}
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={handleChange("password")}
                  secureTextEntry
                />
                {touched.password && errors.password && (
                  <TextError>{errors.password}</TextError>
                )}

                <BtnLogin onPress={handleSubmit} disabled={!isValid}>
                  {useLoginForm.spin ? (
                    <Spin onSpin={useLoginForm.spin} />
                  ) : (
                    <LoginText>Entrar</LoginText>
                  )}
                </BtnLogin>

                <BtnRegister
                  onPress={() => props.navigation.navigate("Register")}
                >
                  <RegisterText>Registrar-se</RegisterText>
                </BtnRegister>
              </Form>
            )}
          </Formik>
        </Container>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
};

export default Login;
