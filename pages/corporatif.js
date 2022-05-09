import Head from '../components/Head';
import SectionB from '../components/Home/SectionB';

export default function Corporatif() {
  return (
    <>
      <Head
        title={'Denis Sénéchal - Corporatif'}
        description={
          'Comédien professionnel et membre en règle de l’UDA depuis 1987, Denis Sénéchal a cumulé les succès et fait les beaux jours de l’Agence de Divertissement Corporatif Michel Courtemanche et Concepts Signés Johanne Leblanc pendant plus de 15 ans.'
        }
      />

      <div className="max-width-container">
      <div style={{ marginTop: '6rem', marginBottom: '8rem' }}>
          <SectionB />
        </div>
      </div>
    </>
  );
}
