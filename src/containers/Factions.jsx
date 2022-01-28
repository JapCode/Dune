import FullPageSection from '../components/FullPageSection';
import SubPage from '../components/SubPage';
import imgMentats from '../assets/static/duneFactionsMentats.jpg';
import imgBene from '../assets/static/duneFactionsBene.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import imgNavigatorOne from '../assets/static/duneFactionNavigator1.jpg';
import imgNavigatorTwo from '../assets/static/duneFactionNavigator2.jpg';
import imgNavigatorThree from '../assets/static/duneFactionNavigator3.jpg';
import SlideFaction from '../components/SlideFaction';
import useIntersectionObserver from '../hooks/IntersectionObserver';
import { useContext, useEffect } from 'react';
import { VisibleContext } from '../context/VisibleContext';
import useWindowSize from '../hooks/WindowSize';

function Factions() {
  const [containerRef, isVisible] = useIntersectionObserver({
    root: null,
    rootMargin: '0px',
    threshold: 0.06,
  });
  const size = useWindowSize();
  const { setIsVisibleData } = useContext(VisibleContext);

  useEffect(() => {
    if (isVisible && size.width < 600) {
      setIsVisibleData(true);
    } else {
      setIsVisibleData(false);
    }
  }, [isVisible]);
  const page = 'factions';
  const title = 'Las Facciones';
  const paragraphs = [
    'Diez mil años antes del comienzo de la historia, la raza humana había purgado todas las máquinas que replicaban muchas de las funciones de la mente humana. Este evento, conocido como la Jihad Butleriana, como resultado de esta se crean prohibiciones en contra de la creacion de de maquinas a semejanza de la mente humana',

    '¿Como puede el ser humano viajar, comunicarse, organizarse y sobrevir en este imperio galactico? la respuesta la hallamos en la especia o Melange, un compuesto que solo puede encontrarse en el desierto del planeta arrakis, es un narcótico usado para alterar el espectro de la consciencia y el subconsciente humano, tomada regularmente fortalece todos los niveles de salud, el uso sostenido de la especia provoca que los ojos humanos se decoloraran para que todo el ojo se manchara de azul ',

    'Existen varias facciones de gran importancia en el imperio galactico que hacen uso de la especia y permiten el funcionamiento de la sociedad galactica tales como los Mentats, la cofradia espacial y la benne gesserith',
  ];
  const SubTitleOne = 'Los Mentats';
  const subParagraphsOne = [
    'Los Mentats son seres humanos que remplazaron la labor de las computadoras y maquinas de pensamiento. A traves del uso de la especia y un entrenamiento intensivo son capaces de entrar en un estado mental elevado que les permite realizar calculos logicos complejos. ',
    'Los Mentats fueron usados extensamente por las Grandes Casas, principalmente como consejeros políticos (todo esto antes de la llegada al poder del Dios Emperador). Gracias a la gran capacidad de cálculo y su intachable habilidad para procesar grandes cantidades de información, los Mentats eran fuentes de consejo clave para cualquier gobernante.',
    'Para poder desempeñar el rol de un Mentat, se necesita de una gran disposición mental y de cálculo, y no se puede de otra forma. Sin embargo, hay que tener en cuenta que no todos los Mentats son iguales, como alguna especie de máquina producida en masa, sino que cada uno tiene sus peculiaridades.',
    'Los Mentats no son solamente computadoras humanas, por así decir, sino que también gozan de una increíble capacidad de memoria y percepción cognitiva, detectando con relativa facilidad posibles amenazas. La gran habilidad táctica y estratégica de los Mentat supera, de hecho, a las antiguas máquinas pensantes pre-Yihad Butleriana. Tan eficaces pueden ser algunos Mentat que hasta los mismisimos emperadores temen de su poder',
  ];
  const subImgMentats = imgMentats;
  const SubTitleTwo = 'La Cofradia Espacial';
  const subParagraphsTwo = [
    'Es una organización apolítica, y su interés es que la “especia fluya” por el universo, mantienen un monopolio total en el transporte interestelar, ya que son los únicos con navegantes capaces de guiar a las naves a través del espacio. los navegadores, humanos que han remplazado a las maquinas en el complejo trazado de los viajes espaciales,',
    ' usan una mezcla de la especia y otras drogas para obtener habilidades profeticas limitadas, lo que les permite usar de manera segura la tegnologia de espacio de pliegue, que permite el viaje instantaneo a cualquier lugar de la galaxia. Para conseguirlo los navegadores deben de vivir en una capsula llena de especia en forma liquida esto deforma el cuerpo de los navegadores , mutando a seres parecidos a reptiles',
  ];
  const SubTitleThree = 'La Bene Gesserith';
  const subParagraphsThree = [
    'Las Bene Gesserit son una orden poderosa y antigua de mujeres cuyos objetivos y acciones formaron un elemento crítico en la evolución de la humanidad y muchos de los principales desarrollos de la trama.',
    'El objetivo principal de Bene Gesserit era lograr más poder e influencia y ayudar a dirigir a la humanidad a lo largo de un camino de perspicacia y estabilidad',
    'Las escuelas Bene Gesserit fueron diseñadas para maximizar el potencial físico y mental de la humanidad, especialmente las mujeres. Como resultado, las adeptas Bene Gesserit poseían habilidades que nadie más podía rivalizar en el universo conocido. Bene Gesserit podría controlar cada músculo y nervio de su cuerpo, hasta las fibras individuales, una voz que le permite influir directamente en las personas, un sentido de la verdad que les permite reconocer las mentiras y un control de su fertilidad cosa que les permite decidir cuando quedarse embarazadas o el sexo del embrion, el mayor poder de una Bene Gesserit lo obtiene cuando pasa de acolita a reverenda madre, tras sobrevivir a un proceso llamdo la agonia obtienen sus recuerdos ancestrales la experiencia de vida de sus ancestros femeninos',
  ];
  const subImgBene = imgBene;
  const subImgNavigatorOne = imgNavigatorOne;
  const subImgNavigatorTwo = imgNavigatorTwo;
  const subImgNavigatorThree = imgNavigatorThree;
  return (
    <>
      <FullPageSection page={page} title={title} paragraphs={paragraphs} />;
      <div className="factions__container" ref={containerRef}>
        <SubPage title={SubTitleOne} paragraphs={subParagraphsOne}>
          <img src={subImgMentats} alt={SubTitleOne} />
        </SubPage>
        <SubPage title={SubTitleTwo} paragraphs={subParagraphsTwo}>
          <SlideFaction
            imgOne={subImgNavigatorOne}
            imgTwo={subImgNavigatorTwo}
            imgThree={subImgNavigatorThree}
          />
        </SubPage>
        <SubPage title={SubTitleThree} paragraphs={subParagraphsThree}>
          <img src={subImgBene} alt={SubTitleThree} />
        </SubPage>
      </div>
    </>
  );
}

export default Factions;
