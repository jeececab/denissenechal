import Head from '../components/Head';
import SectionB from '../components/Home/SectionB';

export default function Corporatif() {
  return (
    <>
      <Head />

      <div className="max-width-container">
        <div style={{ marginTop: '6rem', marginBottom: '8rem' }}>
          <SectionB />
        </div>
      </div>
    </>
  );
}
