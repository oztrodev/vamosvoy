import React from 'react';

import { navigate } from 'gatsby';
import Icon from '../Icons/Icon';
import * as styles from './LayoutOption.module.css';

const LayoutOption = (props) => {
  return (
    <div className={styles.root}>
      <div
        className={styles.layoutIconContainer}
        onClick={() => navigate('/tienda')}
        role={'presentation'}
      >
        <Icon symbol={'list'}></Icon>
      </div>
      <div
        className={styles.layoutIconContainer}
        onClick={() => navigate('/tienda')}
        role={'presentation'}
        style={{ transform: 'rotate(-90deg)' }}
      >
        <Icon symbol={'list'}></Icon>
      </div>
    </div>
  );
};

export default LayoutOption;
