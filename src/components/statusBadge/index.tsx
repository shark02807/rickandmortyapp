// Base
import cn from 'classnames';
// Types
import { Status } from '../../types';
// HF
import { characterStatus } from '../../constants/character'
// styles and assets
import styles from './style.module.css';

interface StatusBadgeProps {
  status: Status;
  className: string;
}

const StatusBadge = ({ status, className }: StatusBadgeProps) => (
  <div className={cn(styles.badge, className, {
    [styles.red]: status === characterStatus.dead,
    [styles.green]: status === characterStatus.alive,
    [styles.grey]: status === characterStatus.unknown
  })} />
);

export default StatusBadge;
