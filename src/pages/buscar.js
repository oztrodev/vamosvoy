import React from 'react';
import { parse } from 'query-string';

import Breadcrumbs from '../components/Breadcrumbs';
import Layout from '../components/Layout/Layout';
import Container from '../components/Container/Container';
import ProductCardGrid from '../components/ProductCardGrid';

import { generateMockProductData } from '../helpers/mock';

import * as styles from './buscar.module.css';

const SearchPage = (props) => {
  const params = parse(props.location.search);
  const searchQuery = params.q ? params.q : '';

  const sampleData = generateMockProductData(3, 'mujer');

  return (
    <Layout>
      <div className={styles.root}>
        <Container size={'large'} spacing={'min'}>
          <Breadcrumbs
            crumbs={[
              { link: '/', label: 'Inicio' },
              { label: `Resultado para: '${searchQuery}'` },
            ]}
          />
          <div className={styles.searchLabels}>
            <h4>Resultado para: '{searchQuery}'</h4>
            <span>3 coincidencias</span>
          </div>
          <ProductCardGrid
            showSlider={false}
            height={580}
            columns={3}
            data={sampleData}
          />
        </Container>
      </div>
    </Layout>
  );
};

export default SearchPage;
