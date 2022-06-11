import { useContext, useEffect } from 'react';
import FullPageSection from '../components/FullPageSection';
import SupPage from '../components/SubPage';
import useIntersectionObserver from '../hooks/IntersectionObserver';
import { VisibleContext } from '../context/VisibleContext';
import useWindowSize from '../hooks/WindowSize';

const imgHouseAtreides = 'https://i.imgur.com/KCTNGEd.png';
const imgHouseHarkonen = 'https://i.imgur.com/t0gt77R.png';
const imgHouseCorrino = 'https://i.imgur.com/hMC8Wdu.png';

function Houses() {
  const [containerRef, isVisible] = useIntersectionObserver({
    root: null,
    rootMargin: '0px',
    threshold: 0.06,
  });
  const { setIsVisibleData } = useContext(VisibleContext);
  const size = useWindowSize();

  useEffect(() => {
    if (isVisible && size.width < 600) {
      setIsVisibleData(true);
    } else {
      setIsVisibleData(false);
    }
  }, [isVisible]);
  const page = 'houses';
  const title = 'Las Casas';
  const paragraphs = [
    'Una "Casa", o "Gran Casa", durante los tiempos del Imperio, era una gran dinastia de poder, a veces limitada a un cierto planeta, y a veces expandiendose a muchos más. Numerosas casas existieron durante la permanencia del Imperio, y colectivamente conformaron el Landsraad, que era gobernado por El alto concejo. Las casas, generalmente, se diferenciaban en "Casas mayores" y "Casas menores".',
    'Normalemnte, una casa mayor era una dinastía familiar que gobernaba uno o varios planetas. Durante los tiempos del Emperador Padishah, solían formar grandes feudos imperiales. Las casas mayores tenian la potestad para controlar el mundo al que pertenecian, siempre y cuando aplicasen la ley del imperio. Usualmente, las grandes casas tenían sus propios ejercitos, banderas, insignias, estandartes y uniformes',
    'Las casas menores fueron dinastias aristocráticas pequeñas, que se asentaban en planetas, pero no llegaban a controlarlos. Sin embargo, eran consideros como miemrbos nobles y contaban con cierta capacidad de voto en el Landsraad. Usualmente, los miembros de las casas menores se mezclaban en las fiestas y eventos de las casas mayores.',
    'El Landsraad era el órgano que representaba a las Grandes Casas durante los días del Imperio. Estaba gobernado por el Alto Consejo que a su vez estaba supervisado por el Emperador Padishah. En Consejo del Landsraad se reunía con regularidad, proveía de un foro en el que las Grandes Casas podían relacionarse unas con otras, o bien tomar acuerdos, crear alianzas, los procedimientos formales de venganza o disputa. También se supone que protegía a las Grandes Casas de ser eliminadas por la Casa Imperial.',
  ];
  const subTitleOne = 'Casa Atreides';
  const subParagraphsOne = [
    'La Casa Atredies fue una de las Grandes Casas dentro de la infraestructura del Imperio. Se regía por el patriarca de la familia Atreides, quien tenía el título de Duque.',
    'la Casa de Atreides mantuvo el feudo planetario y centro de operaciones en el planeta Caladan, el cual fue gobernado durante veinte generaciones. La Casa de Atreides había perfeccionado una forma de gobernar que resultó en una sociedad bien organizada con un pueblo espiritualmente satisfecho. Además, la Casa Atreides mantuvo Caladan como un próspero y exuberante paraíso con un nivel de industrialización relativamente bajo, al contrario que la capital de la Casa Harkonnen, Giedi Prime.',
  ];
  const subTitleTwo = 'Casa Harkonnen';
  const subParagraphsTwo = [
    'La Casa Harkonnen fue una Gran Casa durante la época de los Emperadores Padishah. Su capital era Giedi Prime, un planeta ampliamente industrializado con un nivel de fotosíntesis muy bajo. La Casa Harkonnen era muy conocida por sus siniestras tácticas de política, y por un antigua enemistad que mantenía con otra Gran Casa, la Casa Atredies, Además la Casa Harkonnen tenía una reputación por la ambición, la maldad, el odio y la brutalidad. Normalmente estaba regida por un Barón Siridar.',
  ];
  const subTitleThree = 'Casa Corrino';
  const subParagraphsThree = [
    'La Casa Imperial Corrino fue una vez la Casa Mayor más grande y mortífera encontrada dentro del universo conocido, durante miles de años perteneció a la familia imperial. La residencia oficial de la Casa Imperial Corrino era el planeta Kaitain, mientras que su feudo personal era el ancestral planeta exiliado Salusa Secundus.',
    'Durante su dominio imperial, la Casa Corrino mantuvo posiblemente el ejército más poderoso del universo conocido: el Sardaukar . A través de sus habilidades superiores, los Corrinos fueron capaces de aplastar cualquier oposición militar. Se dijo que la única forma en que el Corrino Sardaukar podría ser derrotado sería a través de las fuerzas combinadas de todas las Grandes Casas del Landsraad .',
  ];

  return (
    <>
      <FullPageSection page={page} title={title} paragraphs={paragraphs} />;
      <div className="houses__container" ref={containerRef}>
        <SupPage title={subTitleOne} paragraphs={subParagraphsOne}>
          <img src={imgHouseAtreides} alt="Casa Atreides" />
        </SupPage>
        <SupPage title={subTitleTwo} paragraphs={subParagraphsTwo}>
          <img src={imgHouseHarkonen} alt="Casa Harkonnen" />
        </SupPage>
        <SupPage title={subTitleThree} paragraphs={subParagraphsThree}>
          <img src={imgHouseCorrino} alt="Casa Corrino" />
        </SupPage>
      </div>
    </>
  );
}

export default Houses;
