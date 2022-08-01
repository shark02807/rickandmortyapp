// Types
import { Character } from '../../types';
//Components
import { Card } from 'primereact/card';
import StatusBadge from '../statusBadge'
// styles and assets
import styles from './style.module.css';

interface CharactersCardProps {
  character: Character;
}

const CharactersCard = ({ character }: CharactersCardProps) => {
  const { name, image, status, species, location } = character;
  
  const header = (
    <img className={styles.image} alt={name} src={image} />
  );

  return (
    <Card header={header} className={styles.card}>
      <div className={styles.name}>{name}</div>
      <div className={styles.status}>
        <StatusBadge status={status} className={styles.badge} />
        {status} - {species}
      </div>
      <div className={styles.location}>
        <div className={styles.label}>Location:</div>
        <div className={styles.locationName}>{location.name}</div>
      </div>
    </Card>
  )
};

export default CharactersCard;
