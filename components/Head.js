import _Head from 'next/head';

export default function Head() {
  return (
    <_Head>
      <meta charset="utf-8"></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"></meta>
      <meta httpEquiv="x-ua-compatible" content="ie=edge"></meta>

      <link rel="apple-touch-icon" sizes="180x180" href="assets/favicon/apple-touch-icon.png"></link>
      <link rel="icon" type="image/png" sizes="32x32" href="assets/favicon/favicon-32x32.png"></link>
      <link rel="icon" type="image/png" sizes="16x16" href="assets/favicon/favicon-16x16.png"></link>
      <link rel="manifest" href="assets/favicon/site.webmanifest"></link>

      <title>Denis Sénéchal - Divertissement corporatif pour tournois de golf et autres événements.</title>
      <meta
        name="description"
        content="Service d’animation et divertissement pour événements corporatifs, tournois de golf, mariages, party de bureau, soirées cocktails, etc. Grand Montréal, Laval, Laurentides, Rive-Sud, Montérégie, Estrie, Québec."
      />

      <meta
        property="og:title"
        content="Denis Sénéchal - Divertissement corporatif pour tournois de golf et autres événements."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.animationdenissenechal.com" />
      <meta property="og:image" content="assets/images/golf.png" />
    </_Head>
  );
}
