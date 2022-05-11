import styles from '../../styles/ServeurGaffeur.module.css';
import Head from '../../components/Head';

export default function ServeurGaffeur() {
  return (
    <>
      <Head />

      <div className={`${styles.container} max-width-container`}>
        <h2>Le serveur gaffeur</h2>

        <div className={styles.info}>
          <div className={styles.infoImage}>
            <img src="/assets/images/serveur-2.png" />
          </div>

          <div>
            <p>
              Dissimulé parmi le personnel en salle, le serveur Hervé Plante additionne les maladresses mais multiplie
              les prouesses pour égayer vos clients. D&apos;une redoutable efficacité, il s&apos;inscrit dans la
              tradition des Clouzot, Pierre Richard et Olivier Guimond. En faisant appel au Serveur Gaffeur, vous êtes
              assurés de marquer l&apos;imaginaire de vos employés.es. en les faisant rire aux éclats!
            </p>

            <p>
              Faites appel au Serveur Gaffeur pour: soirée reconnaissance, banquet, cocktail dînatoire, souper de Noël,
              etc.
            </p>
          </div>
        </div>
        <div className={styles.tagLine1}>
          <h2 className={styles.tagLine}>Du cocktail au dessert, il devient...UNE VÉRITABLE CATASTROPHE AMBULANTE !</h2>
          <div className={styles.tagLineImage}>
            <img src="/assets/images/sil-serveur.png" />
          </div>
        </div>
        <div className={styles.tagLine2}>
          <div className={styles.tagLine2Image}>
            <img src="/assets/images/serveur-3.png" />
          </div>
          <h2 className={styles.tagLine}>QUAND LES MALHEURS DE L&apos;UN FONT LE DÉLICE DES AUTRES…!</h2>
        </div>
      </div>
    </>
  );
}
