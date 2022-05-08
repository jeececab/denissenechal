import styles from '../../styles/Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <span>Denis Sénéchal - Comédien Animateur</span>
        <span>© 2022</span>
      </div>
    </div>
  );
}