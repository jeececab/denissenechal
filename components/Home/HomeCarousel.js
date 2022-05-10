import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from '../../styles/HomeCarousel.module.css';

export default function HomeCarousel() {
  return (
    <div className="max-width-container">
      <Carousel showThumbs={false} autoPlay infiniteLoop interval={5000}>
        <div className={styles.image}>
          <img src="/assets/images/golf-mobile.png" />
          <img src="/assets/images/golf.png" />
        </div>
        <div className={styles.image}>
          <img src="/assets/images/serveur-mobile.png" />
          <img src="/assets/images/serveur.png" />
        </div>
      </Carousel>
    </div>
  );
}
