import React from 'react';
import * as styles from './cuenta-creada.module.css';

import ActionCard from '../components/ActionCard';
import Container from '../components/Container';
import Layout from '../components/Layout/Layout';

const AccountSuccessPage = (props) => {
  return (
    <Layout disablePaddingBottom>
      <Container size={'medium'}>
        <div className={styles.root}>
          <h1>Cuenta Creada</h1>
          <p>
            Te enviaremos un email dentro de 72 horas con un enlace y un código. Revisa Spam.
          </p>
          <div className={styles.actionContainer}>
            <ActionCard
              title={'Cuenta'}
              icon={'user'}
              subtitle={'Revisa tu configuración'}
              link={'/cuenta/configuracion'}
            />

            <ActionCard
              title={'Tienda'}
              icon={'bag'}
              subtitle={'Continue Comprando'}
              link={'/tienda'}
            />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default AccountSuccessPage;
