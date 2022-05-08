import styles from '../../styles/CovidWarning.module.css';

export default function CovidWarning() {
  return (
    <div className={styles.container}>
      <div className="max-width-container">
        <h2>PROTÉGER et SERVIR : COVID-19</h2>
        <p>
          Compte tenu de la situation qui prévaut actuellement, sachez que toutes les mesures sont prises afin d’assurer
          la sécurité des participants. Déjà vacciné une première fois en 2021, Denis Sénéchal a vite attrapé la piqûre
          (!) et en est à sa quatrième dose au moment d’écrire ces lignes ! Par ailleurs, les mesures sanitaires
          requises pouvant varier selon le type d’animation choisi (extérieure, en salle, etc.), il conviendra entre le
          client et l’animateur d’établir le protocole souhaité en fonction des objectifs et attentes de chacun.
        </p>
      </div>
    </div>
  );
}
