import styles from '../styles/Contact.module.css';
import Head from '../components/Head';

export default function Contact() {
  return (
    <>
      <Head />

      <div className={styles.container}>
        <div className={`${styles.content} max-width-container`}>
          <div className={styles.info}>
            <h2>Coordonnées</h2>
            <h3>Courriel</h3>
            <p>d.senechal7@gmail.com</p>
            <h3>Téléphone</h3>
            <p>514.597.1398</p>
          </div>

          <form className={styles.form} name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
            <h2>Soumission</h2>
            <input type="hidden" name="form-name" value="contact" />
            <p>
              <label htmlFor="name">
                <span>Nom</span>
                <input id="name" type="text" name="name" required />
              </label>
            </p>
            <p>
              <label htmlFor="email">
                <span>Courriel</span>
                <input
                  id="email"
                  type="email"
                  name="email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  required
                />
              </label>
            </p>
            <p>
              <label htmlFor="phone">
                <span>Téléphone</span>
                <input id="phone" type="tel" name="phone" />
              </label>
            </p>
            <p>
              <label htmlFor="message">
                <span>Détails de la demande</span>
                <textarea id="message" name="message" required></textarea>
              </label>
            </p>
            <p>
              <button type="submit">Envoyer</button>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
