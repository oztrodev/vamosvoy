import React from 'react';
import * as styles from './cuenta-creada.module.css';

import ActionCard from '../components/ActionCard';
import Container from '../components/Container';
import Layout from '../components/Layout/Layout';

const OrderConfirmPage = (props) => {
  return (
    <Layout disablePaddingBottom>
      <Container size={'medium'}>
        <div className={styles.root}>
          <h1>Muchas Gracias!</h1>
          <p>
            Hemos recibido tu compra y nos pondremos en contacto pronto.
            Te escribiremos desde nuestro email vamosvoy@gmail.com
          </p>
          <div className={styles.actionContainer}>
            <ActionCard
              title={'Estado de la Orden'}
              icon={'Finalizada'}
              subtitle={'Revisa tu orden'}
              link={'/cuenta/ordenes'}
              size={'lg'}
            />

            <ActionCard
              title={'Tienda'}
              icon={'bag'}
              subtitle={'Continue Comprnado'}
              link={'/tienda'}
            />

            <ActionCard
              title={'Preguntas Frecuentes'}
              icon={'question'}
              subtitle={'Revisa las Preguntas Frecuentes'}
              link={'/preguntas-frecuentes'}
            />

            <ActionCard
              title={'Contacto'}
              icon={'phone'}
              subtitle={'respondemos siempre'}
              link={'/soporte#contacto'}
            />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default OrderConfirmPage;
