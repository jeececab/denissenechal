import styles from '../../styles/SectionA.module.css';

export default function SectionA() {
  return (
    <div className={`${styles.container} max-width-container`}>
      <h2>« Désopilant »</h2>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <img src={'/assets/images/drole-icon.png'} />
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
          <img src={'/assets/images/vif-icon.png'} />
          <div className={styles.cardText}>
            <p>Vif d&apos;esprit</p>
            <p>
              Un sens de la
              <br />
              répartie
              <br />
              incroyable
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <img src={'/assets/images/pro-icon.png'} />
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
    </div>
  );
}
