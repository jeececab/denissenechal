import styles from '../../styles/ServeurGaffeur.module.css';
import Head from '../../components/Head';

export default function ServeurGaffeur() {
  return (
    <>
      <Head
        title={'Denis Sénéchal - Divertissement corporatif pour tournois de golf et autres événements.'}
        description={
          'Comédien professionnel et membre en règle de l’UDA depuis 1987, Denis Sénéchal a cumulé les succès et fait les beaux jours de l’Agence de Divertissement Corporatif Michel Courtemanche et Concepts Signés Johanne Leblanc pendant plus de 15 ans.'
        }
      />

      <div className={`${styles.container} max-width-container`}>
        <h2>Le serveur gaffeur</h2>

        <div className={styles.info}>
          <img src="/assets/images/serveur-2.png" />
          <p>
            Dissimulé parmi le personnel en salle, le serveur Hervé Plante additionne les maladresses mais multiplie les
            prouesses pour égayer vos clients. D&apos;une redoutable efficacité, il s&apos;inscrit dans la tradition des
            Clouzot, Pierre Richard et Olivier Guimond. En faisant appel au Serveur Gaffeur, vous êtes assuré de marquer
            l&apos;imaginaire de vos employés.es. en les faisant rire aux éclats!
          </p>
        </div>
        <div className={styles.tagLine1}>
          <h2 className={styles.tagLine}>Du cocktail au dessert, il devient...UNE VÉRITABLE CATASTROPHE AMBULANTE !</h2>
          <img src="/assets/images/sil-serveur.png" />
        </div>
        <div className={styles.tagLine2}>
          <img src="/assets/images/serveur-3.png" />
          <h2 className={styles.tagLine}>QUAND LES MALHEURS DE L&apos;UN FONT LE DÉLICE DES AUTRES…!</h2>
        </div>
      </div>
    </>
  );
}
