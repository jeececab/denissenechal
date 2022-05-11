import CovidWarning from '../components/Home/CovidWarning';
import Head from '../components/Head';
import HomeCarousel from '../components/Home/HomeCarousel';
import SectionA from '../components/Home/SectionA';
import SectionB from '../components/Home/SectionB';
import Temoignages from '../components/Home/Temoignages';

export default function Home() {
  return (
    <>
      <Head />
      <HomeCarousel />
      <SectionA />
      <SectionB />
      <Temoignages />
      <CovidWarning />
    </>
  );
}
