import styles from '../../styles/FauxPolicier.module.css';
import Head from '../../components/Head';

export default function FauxPolicier() {
  return (
    <>
      <Head />

      <div className={`${styles.container} max-width-container`}>
        <h2>Le faux policier</h2>

        <div className={styles.description}>
          <div className={styles.golfImage}>
            <img src={'/assets/images/golf-2.png'} />
          </div>
          <p>
            Embusqué dans son kart de Marshall et flanqué de son séchoir à cheveux qui lui sert de radar, le Sergent Ray
            Tracy intercepte les voiturettes et remet de fausses contraventions aux occupants médusés. Détente assurée
            et rires garantis! Idéal pour levée de fonds. Le constat (!) est clair : excellent pour briser la glace et
            détendre vos joueurs, même les plus nerveux.
          </p>
        </div>

        <h2 className={styles.tagLine}>La touche finale qui fera de votre tournoi un succès assuré!</h2>

        <div className={styles.videoWrapper}>
          <iframe
            className={styles.videoIFrame}
            src="https://player.vimeo.com/video/707592098?h=ae7a9a8aff"
            width="640"
            height="360"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>

        <h2 className={styles.tagLine}>«Désopilant... Un sens de la répartie incroyable! »</h2>

        <div className={styles.info}>
          <div className={styles.infoText}>
            <h3 className={styles.infoTextTitle}>Formule simple</h3>
            <p>Le Sergent Ray Tracy accompagne les joueurs uniquement durant le tournoi.</p>
            <h3 className={styles.infoTextTitle}>Formule combinée</h3>
            <p>
              Le Sergent Ray Tracy monte en grade et se transforme en Maître de cérémonie pour vous assister lors de la
              soirée de remise des prix : un avantage car il connaît déjà vos invités.
            </p>
          </div>

          <div className={styles.infoImage}>
            <img src={'/assets/images/sil-policier.png'} />
          </div>
        </div>
        <div className={styles.image}>
          <img src={'/assets/images/po.jpg'} />
        </div>
      </div>
    </>
  );
}
