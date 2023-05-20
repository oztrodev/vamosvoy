import React from 'react';
import * as styles from './ProductCollectionGrid.module.css';

import ProductCollection from '../ProductCollection';

const ProductCollectionGrid = (props) => {
  return (
    <div className={styles.root}>
      <ProductCollection
        image={'/collections/vamosvoy-transporte.png'}
        title={''}
        text={'Solicitar'}
        link={'/tienda'}
      />
      <ProductCollection
        image={'/collections/vamosvoy-limpieza.png'}
        title={''}
        text={'Solicitar'}
        link={'/tienda'}
      />
      <ProductCollection
        image={'/collections/vamosvoy-cocinamos.png'}
        title={''}
        text={'Solicitar'}
        link={'/tienda'}
      />
      <ProductCollection
        image={'/collections/vamosvoy-hacemos-tus-compras.png'}
        title={''}
        text={'Solicitar'}
        link={'/tienda'}
      />
      <ProductCollection
        image={'/collections/vamosvoy-tu-comida-semanal.png'}
        title={''}
        text={'Solicitar'}
        link={'/tienda'}
      />
      <ProductCollection
        image={'/collections/vamosvoy-manicure.png'}
        title={''}
        text={'Solicitar'}
        link={'/tienda'}
      />
    </div>
  );
};

export default ProductCollectionGrid;
