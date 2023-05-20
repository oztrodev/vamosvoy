import React from 'react';

import Attribute from '../Attribute';

import * as styles from './AttributeGrid.module.css';

const AttributeGrid = (props) => {
  return (
    <div className={styles.root}>
      <Attribute
        icon={'delivery'}
        title={'Asociados Verificados'}
        subtitle={'Lee los terminos y condiciones'}
      />
      <Attribute
        icon={'cycle'}
        title={'Re-Agenda'}
        subtitle={'Amarás Nuestro Servicio'}
      />
      <Attribute
        icon={'creditcard'}
        title={'Pago Seguro'}
        subtitle={'Nos Cuidamos Mutuamente'}
      />
    </div>
  );
};

export default AttributeGrid;
