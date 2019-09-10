import React, { Fragment, useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { Container, FormContainer, LogoImg } from './styles';
import 'react-toastify/dist/ReactToastify.css';

import Logo from '../../images/logo@3x.png';
import LoadingIcon from '../../components/loading';

import { Types as LoginActions } from '../../store/ducks/userLogin';

const SignIn = () => {
  const [login, useLogin] = useState({
    inLoading: false,
  });

  const dispatch = useDispatch();


  const HandleSubmitValues = (values) => {
    const data = {
      email: values.email,
      password: values.password,
    };


    dispatch({
      type: LoginActions.LOGIN_REQUEST,
      payload: data,
    });

    useLogin({
      ...login,
      inLoading: true,
    });
  };

  const { userLogin } = useSelector(state => state);

  const ResetLoading = () => {
    useLogin({
      ...login,
      inLoading: false,
    });
  };

  useEffect(() => {
    if (userLogin.error) {
      toast.error(`${userLogin.errorMessage.error}`, {
        position: toast.POSITION.BOTTOM_RIGHT,
        draggable: false,
        autoClose: 8000,
      });
    }

    ResetLoading();

    dispatch({
      type: LoginActions.LOGIN_RESET,
    });
  }, [userLogin.error]);


  useEffect(() => {
    push('/main');
  }, []);

  return (
    <Fragment>
      <Container>
        <ToastContainer />
        <FormContainer>
          <LogoImg src={Logo} alt="logo" />
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={values => HandleSubmitValues(values)}
            validationSchema={Yup.object().shape({
              email: Yup
                .string()
                .email('O E-mail informado não é válido.')
                .required('O E-mail é obrigatório.'),
              password: Yup
                .string()
                .required('A senha é obrigatória.'),
            })}
            render={({
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email && <div>{errors.email}</div>}
                <input
                  type="password"
                  name="password"
                  placeholder="Senha secreta"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {errors.password && touched.password && <div>{errors.password}</div>}
                <button type="submit">{login.inLoading ? <LoadingIcon /> : 'Entrar'}</button>
              </form>
            )}
          />
        </FormContainer>
      </Container>
    </Fragment>
  );
};
export default SignIn;
