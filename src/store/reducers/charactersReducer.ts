import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCharacters } from 'rickmortyapi';
import { CharactersStore, CharactersSchema } from '../../types';

export const fetchAsyncCharacters = createAsyncThunk(
  'characters/fetchAllCharacters',
  async (page: number) => {
    try {
      const { data } = await getCharacters({ page });
      return data;
    }
    catch (error) {
      console.log({ error });
    }
});

const initialState = {
  characters: null,
  loading: false
};

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsyncCharacters.pending.toString()]: (state) => {
      console.log('Pending');
      return { characters: null, loading: true}
    },
    [fetchAsyncCharacters.fulfilled.toString()]: (state, { payload }) => {
      console.log('Characters fetched successfully.', payload);
      return { characters: payload, loading: false}
    },
    [fetchAsyncCharacters.rejected.toString()]: (state) => {
      console.log('Characters fetch rejected.');
      return { characters: null, loading: false}
    },
  }
});

export const isLoading = (state: CharactersStore): boolean => state.characters.loading;
export const getAllCharacters = (state: CharactersStore): CharactersSchema => state.characters.characters;

export default charactersSlice.reducer;
