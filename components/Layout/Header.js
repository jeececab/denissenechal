import { useState } from 'react';

import styles from '../../styles/Header.module.css';

import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const close = () => {
    setIsOpen(false);
  };

  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <h1>
          <Link href="/">Denis Sénéchal</Link>
          <Link href="/">- Comédien Animateur</Link>
        </h1>

        <div role="button" onClick={handleClick} className={`${styles.hamburger} ${isOpen ? styles.opened : ''}`}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className={`${styles.menu} ${isOpen ? styles.opened : ''}`}>
          <ul>
            <li onClick={close} className={router.pathname === '/' ? styles.active : ''}>
              <Link href="/">Accueil</Link>
            </li>
            <li onClick={close} className={router.pathname === '/a-propos' ? styles.active : ''}>
              <Link href="/a-propos">À Propos</Link>
            </li>
            <li
              onClick={close}
              className={`${router.pathname.includes('corporatif') ? styles.active : ''} ${styles.menuDropdown}`}
            >
              <Link href="/corporatif">Corporatif</Link>
              <ul>
                <li onClick={close} className={router.pathname === '/corporatif/faux-policier' ? styles.active : ''}>
                  <Link href="/corporatif/faux-policier">Faux policier</Link>
                </li>
                <li onClick={close} className={router.pathname === '/corporatif/serveur-gaffeur' ? styles.active : ''}>
                  <Link href="/corporatif/serveur-gaffeur">Serveur gaffeur</Link>
                </li>
                <li></li>
              </ul>
            </li>
            <li onClick={close} className={router.pathname === '/contact' ? styles.active : ''}>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
