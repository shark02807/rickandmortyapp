// Hooks
import useController from './useController';
// Component
import Card from '../characterCard';
import { Paginator } from 'primereact/paginator';
import { ProgressSpinner } from 'primereact/progressspinner';
// styles and assets
import styles from './style.module.css';

const CharactersList = () => {
  const { state, onBasicPageChange } = useController();
  const {
    charactersPageData,
    basicFirst,
    loading
  } = state;
  const { results: characters, info: pageInfo } = charactersPageData || {};

  return (
    <div className={styles.container}>
      { loading ? <div className={styles.loader}><ProgressSpinner/></div> : null }
      { charactersPageData ? (
        <>
          <div className={styles.list}>
            { characters?.length ? (
              characters.map(character => (
                <Card key={character.id} character={character} />
              ))
            ) : null }
          </div>
          <Paginator
            first={basicFirst}
            rows={20}
            totalRecords={pageInfo.count}
            onPageChange={onBasicPageChange}
            className={styles.paginator}
          ></Paginator>
        </>
      ) : null }
    </div>
  )
};

export default CharactersList;
