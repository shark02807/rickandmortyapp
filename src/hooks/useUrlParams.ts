import { useSearchParams } from 'react-router-dom';

const useUrlParams = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const pageNumber = searchParams.get('page');

  return {
    pageNumber,
    setSearchParams
  }
}

export default useUrlParams;
