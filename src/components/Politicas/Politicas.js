import React from 'react';
import * as styles from './Politicas.module.css';
// import { Link } from 'gatsby';

const Politicas = (props) => {
  return (
    <div className={styles.root}>
      <div className={styles.section}>
        <h3>1. Introducción</h3>
        <p>La presente Política de Privacidad tiene como objetivo informar a los usuarios de la plataforma VamosVoy sobre cómo recopilamos, utilizamos, almacenamos y protegemos sus datos personales. Al utilizar nuestros servicios, usted acepta y consiente el tratamiento de sus datos personales según lo establecido en esta Política de Privacidad.</p>
      </div>

      <div className={styles.section}>
        <h3>2. Datos personales que recopilamos</h3>
        <p>VamosVoy recopila y almacena la siguiente información personal de sus usuarios:</p>
        <ol>
          <li>Nombre y apellido</li>
          <li>Dirección de correo electrónico</li>
          <li>Número de teléfono</li>
          <li>Dirección postal</li>
          <li>Información de pago, como tarjeta de crédito o débito</li>
          <li>Cualquier otra información que el usuario proporcione voluntariamente</li>
        </ol>
          
      </div>
      <div className={styles.section}>
        <h3>3. Finalidad del tratamiento de los datos personales</h3>
        <p>VamosVoy utiliza los datos personales de sus usuarios para los siguientes fines:</p>
        <ol>
          <li>Procesar y gestionar las compras realizadas en nuestra plataforma</li>
          <li>Procesar y gestionar las compras realizadas en nuestra plataforma</li>
          <li>Ofrecer soporte y atención al cliente</li>
          <li>Enviar notificaciones y actualizaciones sobre nuestros servicios</li>
          <li>Realizar análisis de datos para mejorar nuestros servicios y personalizar la experiencia del usuario</li>
          <li>Cumplir con las obligaciones legales y regulatorias aplicables</li>
        </ol>
      </div>
      <div className={styles.section}>
        <h3>4. Cumplir con las obligaciones legales y regulatorias aplicables</h3>
        <p>VamosVoy no vende ni comparte sus datos personales con terceros, excepto en los casos necesarios para prestar nuestros servicios, cumplir con nuestras obligaciones legales o proteger nuestros derechos y los de nuestros usuarios. Podemos compartir sus datos personales con:</p>
        <ol>
          <li>Vendedores que ofrezcan sus productos en nuestra plataforma, únicamente en la medida necesaria para gestionar las compras y garantizar un servicio adecuado</li>
          <li>Proveedores de servicios que nos ayuden en el funcionamiento de nuestra plataforma, como proveedores de alojamiento web, servicios de pago y análisis de datos</li>
          <li>Autoridades gubernamentales o reguladoras, cuando así lo exija la ley o en respuesta a una solicitud legal</li>
        </ol>
      </div>
      <div className={styles.section}>
        <h3>5. Seguridad de los datos personales</h3>
        <p>VamosVoy se compromete a proteger la seguridad de los datos personales de sus usuarios. Implementamos medidas técnicas y organizativas adecuadas para proteger sus datos personales contra la pérdida, el uso indebido, la alteración y el acceso no autorizado. Sin embargo, tenga en cuenta que ninguna transmisión de datos a través de Internet puede garantizar una seguridad absoluta.</p>
      </div>
      <div className={styles.section}>
        <h3>6. Retención de los datos personales</h3>
        <p>VamosVoy retiene los datos personales de sus usuarios durante el tiempo necesario para cumplir con los fines descritos en esta Política de Privacidad, a menos que la ley exija o permita un período de retención más largo.</p>
      </div>
      <div className={styles.section}>
        <h3>7. Derechos del usuario</h3>
        <p>Los usuarios de VamosVoy tienen derecho a acceder, rectificar, cancelar y oponerse al tratamiento de sus datos personales. Para ejercer estos derechos, puede ponerse en contacto con nosotros a través de los canales de comunicación disponibles en nuestra plataforma.</p>
      </div>
      <div className={styles.section}>
        <h3>8. Cambios en la Política de Privacidad</h3>
        <p>VamosVoy se reserva el derecho de modificar esta Política de Privacidad en cualquier momento y sin previo aviso. Las modificaciones entrarán en vigor en el momento de su publicación en nuestra plataforma. Al continuar utilizando nuestros servicios después de la publicación de los cambios, usted acepta y se compromete a cumplir con la Política de Privacidad modificada. Le recomendamos revisar periódicamente esta Política de Privacidad para mantenerse informado sobre cómo protegemos sus datos personales.</p>
      </div>
      <div className={styles.section}>
        <h3>9. Transferencias internacionales de datos</h3>
        <p>En algunos casos, VamosVoy puede transferir sus datos personales a terceros ubicados en países que no ofrecen el mismo nivel de protección de datos que el país en el que reside. En tales casos, nos aseguraremos de que se implementen salvaguardias adecuadas, como acuerdos contractuales y cláusulas de protección de datos, para garantizar la seguridad y confidencialidad de sus datos personales.</p>
      </div>
      <div className={styles.section}>
        <h3>10. Enlaces a sitios web de terceros</h3>
        <p>Nuestra plataforma puede contener enlaces a sitios web de terceros que no están bajo nuestro control. VamosVoy no se hace responsable de las prácticas de privacidad ni del contenido de dichos sitios web. Le recomendamos revisar las políticas de privacidad de los sitios web de terceros antes de proporcionarles sus datos personales.</p>
      </div>
      <div className={styles.section}>
        <h3>11. Menores de edad</h3>
        <p>VamosVoy no está dirigido a menores de edad y no recopila intencionadamente datos personales de personas menores de la edad legal establecida en su país de residencia. Si tomamos conocimiento de que hemos recopilado datos personales de un menor sin el consentimiento de sus padres o tutores legales, tomaremos medidas para eliminar dichos datos de nuestros sistemas.</p>
      </div>
      <div className={styles.section}>
        <h3>11. Contacto</h3>
        <p>Si tiene alguna pregunta o comentario sobre nuestra Política de Privacidad, no dude en ponerse en contacto con nosotros a través de los canales de comunicación disponibles en nuestra plataforma. Estaremos encantados de atender sus consultas y resolver sus inquietudes.</p>
      </div>
   
    </div>
  );
};

export default Politicas;
