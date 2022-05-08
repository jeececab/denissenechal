import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import golf from '../../public/assets/images/golf.png';
import serveur from '../../public/assets/images/serveur.png';

export default function HomeCarousel() {
  return (
    <div className="max-width-container">
      <Carousel showThumbs={false} autoPlay infiniteLoop interval={5000}>
        <div>
          <Image src={golf} />
        </div>
        <div>
          <Image src={serveur} />
        </div>
      </Carousel>
    </div>
  );
}
