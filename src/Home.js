import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDev } from '@fortawesome/free-brands-svg-icons';

function Home() {
  return (
    <div className="home">
      <p id="title">
        Hello, I am 
      </p>
      <p id="name">
        Ajai Sharan Velmurugan <FontAwesomeIcon icon={faDev} />
      </p>
      <p id="developer">
        A PASSONATE SOFTWARE DEVELOPER
      </p>
    </div>
  );
}