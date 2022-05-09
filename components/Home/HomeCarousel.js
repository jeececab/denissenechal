import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function HomeCarousel() {
  return (
    <div className="max-width-container">
      <Carousel showThumbs={false} autoPlay infiniteLoop interval={5000}>
        <div>
          <img src="/assets/images/golf.png" />
        </div>
        <div>
          <img src="/assets/images/serveur.png" />
        </div>
      </Carousel>
    </div>
  );
}
