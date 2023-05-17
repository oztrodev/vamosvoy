import React from 'react';
import * as styles from './ProductCollectionGrid.module.css';

import ProductCollection from '../ProductCollection';

const ProductCollectionGrid = (props) => {
  return (
    <div className={styles.root}>
      <ProductCollection
        image={'/collections/collection1.png'}
        title={'Men'}
        text={'COMPRAR AHORA'}
        link={'/tienda'}
      />
      <ProductCollection
        image={'/collections/collection2.png'}
        title={'Women'}
        text={'COMPRAR AHORA'}
        link={'/tienda'}
      />
      <ProductCollection
        image={'/collections/collection3.png'}
        title={'Accessories'}
        text={'COMPRAR AHORA'}
        link={'/tienda'}
      />
      <ProductCollection
        image={'/collections/collection4.png'}
        title={'Simple Cotton'}
        text={'COMPRAR AHORA'}
        link={'/tienda'}
      />
    </div>
  );
};

export default ProductCollectionGrid;
