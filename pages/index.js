import CovidWarning from '../components/Home/CovidWarning';
import Head from '../components/Head';
import HomeCarousel from '../components/Home/HomeCarousel';
import SectionA from '../components/Home/SectionA';
import SectionB from '../components/Home/SectionB';
import Temoignages from '../components/Home/Temoignages';

export default function Home() {
  return (
    <>
      <Head
        title={'Denis Sénéchal - Comédien Animateur'}
        description={
          'Comédien professionnel et membre en règle de l’UDA depuis 1987, Denis Sénéchal a cumulé les succès et fait les beaux jours de l’Agence de Divertissement Corporatif Michel Courtemanche et Concepts Signés Johanne Leblanc pendant plus de 15 ans.'
        }
      />
      <HomeCarousel />
      <SectionA />
      <SectionB />
      <Temoignages />
      <CovidWarning />
    </>
  );
}
