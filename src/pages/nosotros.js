import React, { useRef } from 'react';

import Container from '../components/Container';
import Hero from '../components/Hero';
import ThemeLink from '../components/ThemeLink';
import Layout from '../components/Layout/Layout';

import * as styles from './nosotros.module.css';
const NosotrosPage = (props) => {
  let historiaRef = useRef();
  let misionRef = useRef();
  let visionRef = useRef();

  const handleScroll = (elementReference) => {
    if (elementReference) {
      window.scrollTo({
        behavior: 'smooth',
        top: elementReference.current.offsetTop - 280,
      });
    }
  };

  return (
    <Layout disablePaddingBottom>
      <div className={styles.root}>
        {/* Hero Container */}
        <Hero
          maxWidth={'900px'}
          image={'/about.png'}
          title={`VAMOSVOY \n La Comunidad de Negocios`}
        />

        <div className={styles.navContainer}>
          <ThemeLink onClick={() => handleScroll(historiaRef)} to={'#historia'}>
            Historia
          </ThemeLink>
          <ThemeLink onClick={() => handleScroll(misionRef)} to={'#mision'}>
            Misión
          </ThemeLink>
          <ThemeLink
            onClick={() => handleScroll(visionRef)}
            to={'#vision'}
          >
            Visión
          </ThemeLink>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.detailContainer} ref={historiaRef}>
            <p>
              VamosVoy es una innovadora plataforma creada para impulsar el crecimiento de negocios, emprendedores y personas talentosas, permitiéndoles concentrarse en sus labores principales mientras nosotros nos encargamos de potenciar sus ventas. Nuestro enfoque se basa en el entendimiento profundo de las necesidades y objetivos de cada cliente, y en la implementación de estrategias de marketing y ventas eficaces que generen resultados tangibles. Con un equipo de profesionales altamente capacitados y apasionados por el éxito de nuestros clientes, VamosVoy se convierte en el aliado perfecto para llevar tu negocio al siguiente nivel.
            </p>
            <br />
            <br />
            {/* <p>
              En VamosVoy, nos enorgullecemos de ofrecer soluciones personalizadas y a la medida para cada uno de nuestros clientes. Nuestro enfoque multidisciplinario combina la experiencia en marketing digital, análisis de datos, redes sociales y gestión de ventas para diseñar estrategias integrales que se adapten a las particularidades de cada negocio o proyecto.
              <br />
              Nuestros servicios incluyen la creación y optimización de tiendas en línea, desarrollo de campañas publicitarias, gestión de redes sociales, posicionamiento SEO, análisis de métricas y seguimiento de resultados, entre otros. Todo esto con el objetivo de incrementar la visibilidad de tu negocio, atraer a nuevos clientes y fidelizar a los ya existentes.
              <br />
              Además, en VamosVoy, nos esforzamos por mantenernos actualizados con las últimas tendencias y tecnologías del mercado, lo que nos permite estar siempre a la vanguardia y ofrecer a nuestros clientes soluciones innovadoras y efectivas.
              <br />
              Trabajando juntos, construiremos una relación sólida y de confianza, donde tu éxito es nuestro éxito. Con VamosVoy, podrás enfocarte en lo que mejor sabes hacer, mientras nosotros nos encargamos de impulsar tus ventas y expandir tu negocio en el competitivo mundo digital.
            </p> */}
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'shirt brand'} src={'/about1.png'}></img>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.content}>
            <h3>Nuestra Misión</h3>
            <div ref={misionRef}>
              <p>Nuestra misión en VamosVoy es empoderar a negocios, emprendedores y personas talentosas, ofreciéndoles soluciones integrales y personalizadas en marketing y ventas que les permitan alcanzar sus metas y superar sus expectativas. Nos comprometemos a ser un aliado estratégico y de confianza, trabajando con pasión, innovación y excelencia para potenciar el crecimiento y éxito sostenible de nuestros clientes en el dinámico entorno digital.</p>
              <ol>
                <li>Enfoque Personalizado</li>
                <li>Equipo Experto y Apasionado</li>
                <li>Innovación y Adaptabilidad</li>
              </ol>
              <img alt={'founder'} src={'/about2.png'}></img>
            </div>
            <h3>Visión</h3>
            <div id={'#vision'} ref={visionRef}>
              <p>Nuestra visión en VamosVoy es convertirnos en líderes globales en el ámbito del marketing y ventas, siendo reconocidos por nuestra capacidad de impulsar el crecimiento y éxito de negocios, emprendedores y personas talentosas a través de soluciones innovadoras, personalizadas y efectivas. Aspiramos a ser el aliado de confianza y referencia en la industria, construyendo relaciones sólidas y duraderas con nuestros clientes, mientras promovemos un entorno de aprendizaje continuo y colaboración que fomente el desarrollo y crecimiento de nuestro talentoso equipo.</p>
              <p>Nos esforzamos por ofrecer soluciones de la más alta calidad, asegurándonos de que cada proyecto sea abordado con meticulosidad, creatividad y eficiencia. Nuestro compromiso con la excelencia nos permite proporcionar un servicio excepcional a nuestros clientes y superar sus expectativas.</p>
              <p>Priorizamos la construcción de relaciones sólidas y duraderas con nuestros clientes, basadas en la confianza, la comunicación y el apoyo mutuo. Al entender y atender sus necesidades específicas, nos convertimos en un aliado estratégico que contribuye activamente a su crecimiento y éxito a largo plazo.</p>
              <p>Trabajamos constantemente para expandir nuestra presencia a nivel mundial, llegando a nuevos mercados y ofreciendo nuestros servicios a una amplia gama de negocios, emprendedores y personas talentosas. Esta expansión nos permitirá aprender de diferentes contextos y culturas, enriqueciendo nuestra experiencia y mejorando aún más nuestras soluciones.</p>
              <p>Al combinar estos elementos clave, VamosVoy logrará su visión de liderazgo global y consolidará su posición como referente en el ámbito del marketing y ventas, impulsando el éxito de nuestros clientes y nuestro equipo.</p>
            </div>
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'shirt backwards'} src={'/about3.png'}></img>
        </div>
      </div>
    </Layout>
  );
};

export default NosotrosPage;
