import React from 'react';
import * as styles from './ordenes.module.css';

import AccountLayout from '../../components/AccountLayout/AccountLayout';
import Breadcrumbs from '../../components/Breadcrumbs';
import Layout from '../../components/Layout/Layout';
import OrderItem from '../../components/OrderItem/OrderItem';
import { isAuth } from '../../helpers/general';
import { navigate } from 'gatsby';

const OrderPage = (props) => {
  if (isAuth() === false) {
    navigate('/ingreso');
  }

  const sampleOrder1 = {
    id: '2',
    orderPlaced: 'Jun 06, 2023',
    lastUpdate: 'Jun 06, 2023',
    status: 'pendiente',
    items: [
      {
        image: '/productos/shirt1.jpg',
        alt: 'order 1 product 1',
        name: 'Lambswool Crew Neck Jumper',
        quantity: '2',
        price: '100',
      },
      {
        image: '/productos/shirt2.jpg',
        alt: 'order 1 product 2',
        name: 'Lambswool Crew Neck Jumper',
        quantity: '1',
        price: '300',
      },
    ],
    shippingAddress: {
      name: 'John Doe',
      address: '1 Steam Mill Lane, Haymerket',
      postal: '2000',
      state: 'NSW',
      country: 'Australia',
    },
    billingAddress: {
      name: 'John Doe',
      address: '1 Steam Mill Lane, Haymerket',
      postal: '2000',
      state: 'NSW',
      country: 'Australia',
    },
  };

  const sampleOrder2 = {
    id: '1',
    orderPlaced: 'Jun 04, 2023',
    lastUpdate: 'Jun 05, 2023',
    status: 'Pagado',
    items: [
      {
        image: '/productos/shirt1.jpg',
        alt: 'order 1 product 1',
        name: 'Lambswool Crew Neck Jumper',
        quantity: '2',
        price: '100',
      },
    ],
    shippingAddress: {
      name: 'John Doe',
      address: '1 Steam Mill Lane, Haymerket',
      postal: '2000',
      state: 'NSW',
      country: 'Australia',
    },
    billingAddress: {
      name: 'John Doe',
      address: '1 Steam Mill Lane, Haymerket',
      postal: '2000',
      state: 'NSW',
      country: 'Australia',
    },
  };

  return (
    <Layout>
      <AccountLayout>
        <Breadcrumbs
          crumbs={[
            { link: '/', label: 'Inicio' },
            { link: '/cuenta', label: 'Cuenta' },
            { link: '/cuenta/ordenes/', label: 'Ordenes' },
          ]}
        />
        <h1>Ordenes</h1>
        <div className={`${styles.tableHeaderContainer} ${styles.gridStyle}`}>
          <span className={styles.tableHeader}>Orden #</span>
          <span className={styles.tableHeader}>Servicio</span>
          <span className={styles.tableHeader}>Última Actualización</span>
          <span className={styles.tableHeader}>Estado</span>
        </div>

        <OrderItem order={sampleOrder1} headerStyling={styles.gridStyle} />
        <OrderItem order={sampleOrder2} headerStyling={styles.gridStyle} />
      </AccountLayout>
    </Layout>
  );
};

export default OrderPage;
