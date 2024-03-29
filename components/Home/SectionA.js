import styles from '../../styles/SectionA.module.css';

export default function SectionA() {
  return (
    <div className={`${styles.container} max-width-container`}>
      <h1>Divertissement corporatif pour vos événements des fêtes / congrès / tournois de golf / etc</h1>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <div className={styles.image}>
            <img src={'/assets/images/drole-icon.png'} />
          </div>
          <div className={styles.cardText}>
            <p>Drôle</p>
            <p>
              Divertissement
              <br />
              et fous rires
              <br />
              garantis
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.image}>
            <img src={'/assets/images/vif-icon.png'} />
          </div>
          <div className={styles.cardText}>
            <p>Vif d&apos;esprit</p>
            <p>
              S&apos;adapte à
              <br />
              toutes les
              <br />
              situations
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.image}>
            <img src={'/assets/images/pro-icon.png'} />
          </div>
          <div className={styles.cardText}>
            <p>Professionnel</p>
            <p>
              À l&apos;écoute des <br />
              besoins du
              <br />
              client
            </p>
          </div>
        </div>
      </div>
      <h2 className={styles.tagLine}>
        « Je recommande fortement et sans hésitations Denis Sénéchal. Succès garanti! »
      </h2>
      <h2 className={styles.tagLine2}>
        Michel Courtemanche des Divertissements corporatifs et Salon Événementiel Momentum
      </h2>
    </div>
  );
}
