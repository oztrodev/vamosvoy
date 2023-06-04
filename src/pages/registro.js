import React, { useState } from 'react';
import { navigate } from 'gatsby';
import {
  validateEmail,
  validateStrongPassword,
  isEmpty,
} from '../helpers/general';
import * as styles from './registro.module.css';

import AttributeGrid from '../components/AttributeGrid/AttributeGrid';
import Layout from '../components/Layout/Layout';
import FormInputField from '../components/FormInputField/FormInputField';
import Button from '../components/Button';

const RegistroPage = (props) => {
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  const errorState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  const [signupForm, setSignupForm] = useState(initialState);
  const [errorForm, setErrorForm] = useState(errorState);

  const handleChange = (id, e) => {
    const tempForm = { ...signupForm, [id]: e };
    setSignupForm(tempForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validForm = true;
    const tempError = { ...errorState };

    if (isEmpty(signupForm.firstName) === true) {
      tempError.firstName = 'Ingrese su Nombre';
      validForm = false;
    }

    if (isEmpty(signupForm.lastName) === true) {
      tempError.lastName = 'Ingrese su Apellido';
      validForm = false;
    }

    if (validateEmail(signupForm.email) !== true) {
      tempError.email =
        'Ingrese su email, ejemplo: nombreyapellido@gmail.com';
      validForm = false;
    }

    if (validateStrongPassword(signupForm.password) !== true) {
      tempError.password =
        'Su clave debe tener al menos 8 caracteres, 1 minuscula, 1 mayuscula y 1 caracter numerico.';
      validForm = false;
    }

    if (validForm === true) {
      setErrorForm(errorState);
      navigate('/cuenta-creada');
      window.localStorage.setItem('key', 'sampleToken');
      //create account endpoint
    } else {
      setErrorForm(tempError);
    }
  };

  return (
    <Layout disablePaddingBottom={true}>
      <div className={styles.root}>
        <div className={styles.signupFormContainer}>
          <h1 className={styles.title}>Crear Cuenta</h1>
          <span className={styles.subtitle}>
            Por favor complete la siguiente información:
          </span>
          <form
            noValidate
            className={styles.signupForm}
            onSubmit={(e) => handleSubmit(e)}
          >
            <FormInputField
              id={'firstName'}
              value={signupForm.firstName}
              handleChange={(id, e) => handleChange(id, e)}
              type={'input'}
              labelName={'Nombre'}
              error={errorForm.firstName}
            />

            <FormInputField
              id={'lastName'}
              value={signupForm.lastName}
              handleChange={(id, e) => handleChange(id, e)}
              type={'input'}
              labelName={'Apellido Name'}
              error={errorForm.lastName}
            />

            <FormInputField
              id={'email'}
              value={signupForm.email}
              handleChange={(id, e) => handleChange(id, e)}
              type={'email'}
              labelName={'Email'}
              error={errorForm.email}
            />

            <FormInputField
              id={'password'}
              value={signupForm.password}
              handleChange={(id, e) => handleChange(id, e)}
              type={'password'}
              labelName={'Clave'}
              error={errorForm.password}
            />

            <Button fullWidth type={'submit'} level={'primary'}>
              Crear Cuenta
            </Button>
            <span className={styles.reminder}>Ya tienes cuenta?</span>
            <Button
              type={'button'}
              onClick={() => navigate('/ingreso')}
              fullWidth
              level={'secondary'}
            >
              Ingresar
            </Button>
          </form>
        </div>

        <div className={styles.attributeGridContainer}>
          <AttributeGrid />
        </div>
      </div>
    </Layout>
  );
};

export default RegistroPage;
