// import '../assets/styles/components/about.scss';
// import img from '../assets/static/duneAbout.jpg';

import FullPageSection from '../components/FullPageSection';

function About() {
  const page = 'about';
  const title = 'About';
  const paragraphs = [
    'Dune es una saga literaria escrita por el autor Frank Herbert que fue publicada por primera vez en 1965, y que a la fecha es considerada como una pieza fundamental en el mundo de la ciencia ficción. Crucial. Así de simple. Y es que nada de lo que conocemos actualmente, en términos de ciencia ficción, sería lo mismo sin la existencia de este universo',
    'La historia comienza a más de 10 000 años en el futuro, en nuestra galaxia, en un gran imperio galáctico de estructura feudal. El Imperio se divide en cuasi-feudos o señoríos planetarios que son controlados por familias nobles, conocidas como Las Grandes Casas, que se agrupan en un gran consejo, llamado Landsraad, y rinden tributo al Emperador Padishah Shaddam IV, de la Casa Corrino.',
    'La clave es el control del planeta del desierto Arrakis, la única fuente de la valiosa mezcla de especias, que brinda a quienes lo ingieren una vida prolongada y una conciencia premonitoria. la especia es el centro de los eventos en el mundo de dune y quien controle esta, controla el universo',
  ];
  return <FullPageSection page={page} title={title} paragraphs={paragraphs} />;
}
export default About;
