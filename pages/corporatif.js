import Head from 'next/head';
import SectionB from '../components/Home/SectionB';

export default function Corporatif() {
  return (
    <>
      <Head>
        <title>Denis Sénéchal - Corporatif</title>
        <meta
          name="description"
          content="Comédien professionnel et membre en règle de l’UDA depuis 1987, Denis Sénéchal a cumulé les succès et fait les beaux jours de l’Agence de Divertissement Corporatif Michel Courtemanche et Concepts Signés Johanne Leblanc pendant plus de 15 ans."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width"></meta>
      </Head>

      <div className="max-width-container">
        <div style={{ marginTop: '10rem' }}>
          <SectionB />
        </div>
      </div>
  </>
  );
}
