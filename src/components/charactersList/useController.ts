// Base
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// Store
import { AppDispatch } from '../../store/store';
import {
  fetchAsyncCharacters,
  getAllCharacters,
  isLoading
} from '../../store/reducers/charactersReducer';
//Types
import { CharactersSchema } from '../../types';
// Hooks
import useUrlParams from '../../hooks/useUrlParams';

const useController = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const charactersPageData: CharactersSchema = useSelector(getAllCharacters);
  const loading = useSelector(isLoading);
  const { pageNumber } = useUrlParams();
  const paginatorPageState = (+pageNumber! - 1) * 20;
  const [basicFirst, setBasicFirst] = useState(paginatorPageState);

  useEffect(() => {
    if (pageNumber !== null) {
      dispatch(fetchAsyncCharacters(+pageNumber));
    }
  }, [dispatch, pageNumber]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const navigateToPage = basicFirst / 20 + 1;
    navigate({
      pathname: `/characters/`,
      search: `?page=${navigateToPage}`
    });
  }, [basicFirst, navigate]);

  const onBasicPageChange = (event: any) => {
    setBasicFirst(event.first);
  }

  const state = {
    charactersPageData,
    basicFirst,
    pageNumber,
    loading
  };

  return {
    state,
    onBasicPageChange
  }
}

export default useController;
