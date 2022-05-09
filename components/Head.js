import _Head from 'next/head';

export default function Head({ title, description }) {
  return (
    <_Head>
      <meta charset="utf-8"></meta>
      {/* <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta> */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"></meta>
      <meta httpEquiv="x-ua-compatible" content="ie=edge"></meta>
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
      <meta name="description" content={description} />
    </_Head>
  );
}
