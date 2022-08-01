//Base
import { Navigate } from "react-router-dom";
// Components
import CharactersList from '../../components/charactersList';
// Hooks
import useUrlParams from '../../hooks/useUrlParams';
// Styles
import styles from './style.module.css';

const Characters = () => {
  const { pageNumber } = useUrlParams();
  
  return (
    <>
      {
        (!pageNumber || pageNumber === null)
          ? <Navigate replace to='/characters/?page=1' />
          : (
            <>
              <header className={styles.header}>
                <div className={styles.backgroundContainer} />
                <h1 className={styles.title}>Explore Rick and Morty Characters</h1>
              </header>
              <main className={styles.main}>
                <CharactersList />
              </main>
            </>
          )
      }
    </>
  )
};

export default Characters;
