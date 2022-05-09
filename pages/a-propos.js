import styles from '../styles/APropos.module.css';
import Head from '../components/Head';

export default function APropos() {
  return (
    <>
      <Head
        title={'Denis Sénéchal -  À propos'}
        description={
          'Comédien professionnel et membre en règle de l’UDA depuis 1987, Denis Sénéchal a cumulé les succès et fait les beaux jours de l’Agence de Divertissement Corporatif Michel Courtemanche et Concepts Signés Johanne Leblanc pendant plus de 15 ans.'
        }
      />

      <div className={styles.container}>
        <img src={'/assets/images/headshot.png'} />
        <div className={styles.text}>
          <p>
            Comédien professionnel et membre en règle de l’UDA depuis 1987, Denis Sénéchal a cumulé les succès et fait
            les beaux jours de l’Agence de Divertissement Corporatif Michel Courtemanche et Concepts Signés Johanne
            Leblanc pendant plus de 15 ans. Ayant à son actif plus de 3000 représentations, il comprend les besoins des
            responsables et collabore avec ceux-ci de manière à faire de leurs événements un succès assuré.
          </p>
          <p>
            Comédien versatile, tant au théâtre (La Licorne, Théâtre Denise Pelletier, l’Opsis, etc.) qu’au petit écran
            (Lance et Compte, Scoop, Le Grand Remous), il se spécialise dans l’humour dès les années 90, en travaillant
            notamment comme auteur et scripteur pour les Productions Samedi de Rire et Science-Friction (Télé-Québec),
            et collabore au défunt Magazine humoristique CROC. Doté d’un sens inné de l’improvisation, remportant
            notamment le trophée Yvan Ponton en tant que joueur étoile et meilleur compteur sur l’Île de Montréal, il
            saura s’adapter à toutes les situations pour le plus grand plaisir de vos convives !
          </p>
        </div>
      </div>
    </>
  );
}
