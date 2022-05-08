import Image from 'next/image';
import styles from '../../styles/SectionA.module.css';
import droleIcon from '../../public/assets/images/drole-icon.png';
import vifIcon from '../../public/assets/images/vif-icon.png';
import proIcon from '../../public/assets/images/pro-icon.png';

export default function SectionA() {
  return (
    <div className={`${styles.container} max-width-container`}>
      <h2>« Désopilant »</h2>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <Image src={droleIcon} />
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
          <Image src={vifIcon} />
          <div className={styles.cardText}>
            <p>Vif d'esprit</p>
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
          <Image src={proIcon} />
          <div className={styles.cardText}>
            <p>Professionnel</p>
            <p>
              Toujours à votre
              <br />
              écoute tout en
              <br />
              s'adaptant à vos besoins
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}