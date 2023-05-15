import React, { useState, useEffect } from 'react';
import { navigate } from 'gatsby';
import * as styles from './soporte.module.css';

import Banner from '../components/Banner';
import Contact from '../components/Contact';
import Layout from '../components/Layout/Layout';
import ThemeLink from '../components/ThemeLink';
import Politicas from '../components/Politicas';
import Compras from '../components/Compras';
import Seguridad from '../components/Seguridad';
import Terminos from '../components/Terminos';
import Container from '../components/Container';

const SoportePage = (props) => {
  const subpages = [
    { title: 'Compras', key: 'compras' },
    { title: 'Políticas de Privacidad', key: 'politicas' },
    { title: 'Seguridad', key: 'seguridad' },
    { title: 'Contacto', key: 'contact' },
    { title: 'Terminos y Condiciones', key: 'terminos' },
  ];

  const [current, setCurrent] = useState(subpages[3]);

  const renderElement = (key) => {
    let tempElement = <React.Fragment />;

    switch (key) {
      case 'compras':
        tempElement = <Compras />;
        break;
      case 'politicas':
        tempElement = <Politicas />;
        break;
      case 'seguridad':
        tempElement = <Seguridad />;
        break;
      case 'contact':
        tempElement = <Contact />;
        break;
      case 'terminos':
        tempElement = <Terminos />;
        break;
      default:
        break;
    }
    return tempElement;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (props.location.hash !== '' && props.location.hash !== undefined) {
      const hash = props.location.hash.substring(1);
      const tempCurrent = subpages.filter((detail) => detail.key === hash)[0];
      if (tempCurrent.key !== current.key) {
        setCurrent(tempCurrent);
        window.scrollTo(0, 475);
      }
    }

    //  eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.location]);

  return (
    <Layout disablePaddingBottom>
      <div className={styles.root}>
        <Banner
          maxWidth={'650px'}
          name={current.title}
          bgImage={'/support.png'}
          color={'var(--standard-white)'}
          height={'350px'}
        />

        <div className={styles.navContainer}>
          {subpages.map((details, index) => {
            return (
              <ThemeLink
                onClick={(e) => {
                  navigate(`/soporte#${details.key}`);
                }}
                key={details.key}
                isActive={current.key === details.key}
                to={`/soporte#${details.key}`}
              >
                {details.title}
              </ThemeLink>
            );
          })}
        </div>

        <div className={styles.pageContainer}>
          <Container size={'large'} spacing={'min'}>
            {subpages.map((details) => {
              return (
                <div
                  key={details.key}
                  className={`${styles.content} ${
                    current.key === details.key ? styles.show : styles.hide
                  }`}
                >
                  {renderElement(details.key)}
                </div>
              );
            })}
          </Container>
        </div>
      </div>
    </Layout>
  );
};

export default SoportePage;
