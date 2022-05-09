import styles from '../../styles/Temoignages.module.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Temoignages() {
  return (
    <div className="max-width-container">
      <div className={styles.container}>
        <h2>Témoignages</h2>
        <Carousel showThumbs={false} autoPlay infiniteLoop interval={10000}>
          <div className={styles.card}>
            <p>
              « Laissez-moi vous dire que toute notre clientèle était agréablement surprise de rencontrer ce drôle de
              policier hurluberlu. Sa performance pour la soirée d&apos;animation n&apos;a récolté que des éloges :
              professionnel, rapide, compréhensif. »<br />
              <br />
              Manon
            </p>
          </div>
          <div className={styles.card}>
            <p>
              « Denis Sénéchal a fait sensation devant nos invités, tant par ses jeux de mots bien sentis et à propos
              que par son humour et sa personnalité. Des millions de mercis! »<br />
              <br />
              François
            </p>
          </div>
          <div className={styles.card}>
            <p>
              « Notre équipe a beaucoup apprécié le numéro du serveur maladroit et ses nombreuses gaffes ! Il a vraiment
              réussi à créer une ambiance incroyable pour notre soirée. Nous n&apos;hésiterons pas à le recommander à
              quiconque voulant amener un brin de folie à leur évènement. »
              <br />
              <br />
              Bruno
            </p>
          </div>
        </Carousel>
      </div>
      <div className={styles.imageWrapper}>
        <img src={'/assets/images/scene.png'} />
      </div>
    </div>
  );
}
