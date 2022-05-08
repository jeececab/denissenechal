import styles from '../../styles/SectionB.module.css';
import Image from 'next/image';
import policierPortrait from '../../public/assets/images/policier-portrait.png';
import serveurPortrait from '../../public/assets/images/serveur-portrait.png';
import Link from 'next/link';

export default function SectionB() {
  return (
    <div className={`${styles.container} max-width-container`}>
      <Link href="/corporatif/faux-policier">
        <div className={styles.card}>
          <Image src={policierPortrait} />

          <p>Le faux policier</p>
        </div>
      </Link>
      <Link href="/corporatif/serveur-gaffeur">
        <div className={styles.card}>
          <Image src={serveurPortrait} />

          <p>Le serveur gaffeur</p>
        </div>
      </Link>
    </div>
  );
}
