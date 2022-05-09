import styles from '../../styles/SectionB.module.css';
import Link from 'next/link';

export default function SectionB() {
  return (
    <div className={`${styles.container} max-width-container`}>
      <Link href="/corporatif/faux-policier">
        <div className={styles.card}>
          <img src={'/assets/images/policier-portrait.png'} />

          <p>Le faux policier</p>
        </div>
      </Link>
      <Link href="/corporatif/serveur-gaffeur">
        <div className={styles.card}>
          <img src={'/assets/images/serveur-portrait.png'} />

          <p>Le serveur gaffeur</p>
        </div>
      </Link>
    </div>
  );
}
