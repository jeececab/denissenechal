import Head from 'next/head';

export default function ServeurGaffeur() {
  return (
    <>
      <Head>
        <title>Denis Sénéchal - Corporatif - Serveur Gaffeur</title>
        <meta
          name="description"
          content="Comédien professionnel et membre en règle de l’UDA depuis 1987, Denis Sénéchal a cumulé les succès et fait les beaux jours de l’Agence de Divertissement Corporatif Michel Courtemanche et Concepts Signés Johanne Leblanc pendant plus de 15 ans."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width"></meta>
      </Head>

      <div className="max-width-container">
        <h1>Corporatif - serveur gaffeur</h1>
      </div>
    </>
  );
}
