import React from 'react';

import Attribute from '../Attribute';

import * as styles from './AttributeGrid.module.css';

const AttributeGrid = (props) => {
  return (
    <div className={styles.root}>
      <Attribute
        icon={'delivery'}
        title={'free delivery worldwide'}
        subtitle={'Lee los terminos y condiciones'}
      />
      <Attribute
        icon={'cycle'}
        title={'returns'}
        subtitle={'Devolución en 30 días'}
      />
      <Attribute
        icon={'creditcard'}
        title={'secured payment'}
        subtitle={'Compra Segura'}
      />
    </div>
  );
};

export default AttributeGrid;
