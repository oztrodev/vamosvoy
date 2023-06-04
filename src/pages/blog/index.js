import React from 'react';
import { navigate } from 'gatsby';

import BlogPreviewGrid from '../../components/BlogPreviewGrid';
import Container from '../../components/Container';
import Hero from '../../components/Hero';
import Layout from '../../components/Layout/Layout';
import ThemeLink from '../../components/ThemeLink';

import { generateMockBlogData } from '../../helpers/mock';
import * as styles from './index.module.css';

const BlogPage = (props) => {
  const blogData = generateMockBlogData(6);

  return (
    <Layout disablePaddingBottom>
      <div className={styles.root}>
        <Hero
          maxWidth={'400px'}
          image={'/blogCover.png'}
          title={`6 consejos para aumentar tus ventas`}
          ctaLink={'Leer'}
          ctaTo={'/blog/6-consejos-para-aumentar-tus-ventas'}
          header={'blog'}
        />

        <div className={styles.navContainer}>
          <ThemeLink
            onClick={() => navigate('/blog/ejemplo')}
            to={'/blog/ejemplo'}
          >
            Todos
          </ThemeLink>
          <ThemeLink
            onClick={() => navigate('/blog/ejemplo')}
            to={'/blog/ejemplo'}
          >
            Marketing
          </ThemeLink>
          <ThemeLink
            onClick={() => navigate('/blog/ejemplo')}
            to={'/blog/ejemplo'}
          >
            Programación
          </ThemeLink>
          <ThemeLink
            onClick={() => navigate('/blog/ejemplo')}
            to={'/blog/ejemplo'}
          >
            Ventas
          </ThemeLink>
          <ThemeLink
            onClick={() => navigate('/blog/ejemplo')}
            to={'/blog/ejemplo'}
          >
            Inteligencia Artificial
          </ThemeLink>
        </div>

        {/* Blog Grid */}
        <div className={styles.blogsContainer}>
          <Container size={'large'}>
            <BlogPreviewGrid data={blogData} hideReadMoreOnWeb showExcerpt />
          </Container>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;
