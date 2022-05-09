import styles from '../../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <span>Denis Sénéchal<span> - Comédien Animateur</span></span>
        <span>© 2022</span>
      </div>
    </footer>
  );
}
