import { Link, navigate } from 'gatsby';
import React from 'react';
import * as styles from './AccountNav.module.css';

const AccountNav = (props) => {
  const handleLogout = () => {
    window.localStorage.removeItem('key');
    navigate('/');
  };

  return (
    <div className={styles.root}>
      <div className={styles.webRoot}>
        <Link
          activeClassName={styles.activeLink}
          to={'/cuenta/ordenes/'}
          className={styles.webLink}
        >
          Ordenes
        </Link>
        <Link
          activeClassName={styles.activeLink}
          to={'/cuenta/direccion/'}
          className={styles.webLink}
        >
          Direcciones
        </Link>
        <Link
          activeClassName={styles.activeLink}
          to={'/cuenta/configuracion/'}
          className={styles.webLink}
        >
          Configuración
        </Link>
        <Link
          activeClassName={styles.activeLink}
          to={'/cuenta/vistas/'}
          className={styles.webLink}
        >
          Vistos Recientemente
        </Link>
        <span
          role={'presentation'}
          onClick={handleLogout}
          className={styles.webLink}
        >
          Logout
        </span>
      </div>
    </div>
  );
};

export default AccountNav;
