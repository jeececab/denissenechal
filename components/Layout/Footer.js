import styles from '../../styles/Footer.module.css';
import { useRouter } from 'next/router';

export default function Footer() {
  const router = useRouter();

  return (
    <footer className={`${styles.container} ${router.pathname === '/contact' ? styles.invert : ''}`}>
      <div className={styles.content}>
        <span>
          Denis Sénéchal<span> - Comédien Animateur</span>
        </span>
        <span>© 2022</span>
      </div>
    </footer>
  );
}
