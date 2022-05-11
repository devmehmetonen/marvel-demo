import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { AppState } from '..';
import { fetchCharacter, fetchCharacterById, fetchComicsById } from './characterAPI';



interface IState {
    characters: Array<any>,
    currentCharacter: any,
    comics: Array<any>,
}
const initialState: IState = {
    characters: [],
    currentCharacter: null,
    comics: [],
};

export const CharacterSlice = createSlice({
  name: 'marvelCharacters',

  initialState,

  reducers: {

    setCharacters: (state, action) => {
      let newCharacters = state.characters.concat(action.payload)
      state.characters = newCharacters
    },
    setCurrentCharacter: (state, action) => {
      state.currentCharacter = action.payload
    },
    setComics: (state, action) => {
      state.comics = action.payload
    },
  },
  extraReducers:  {

    [HYDRATE]: (state, action) => {
        if(action.payload.characters.characters.length>0){
          state.characters = action.payload.characters.characters
        }
        if(action.payload.characters.currentCharacter){
          state.currentCharacter=action.payload.characters.currentCharacter
        }
        if(action.payload.characters.comics.length>0){
          state.comics=action.payload.characters.comics
        }
        
    }
  }
});

export const  getCharacterAsync  = createAsyncThunk(
  'marvelCharacters/fetchCharacter',
  async (offset:number) => {
      const response = await fetchCharacter(offset);
      return response.results;

  }
);

export const getCharacterByIdAsync = createAsyncThunk(
  'marvelCharacters/fetchCharacterById',
  async (char_id: any) => {
    const response = await fetchCharacterById(char_id);
    return response.results[0];
  }
);

export const getComicsByIdAsync = createAsyncThunk(
  'marvel/fetchComics',
  async (char_id:any) => {
      const response = await fetchComicsById(char_id);

      return response.results;
  }
);


 export const { setCharacters,setCurrentCharacter,setComics} = CharacterSlice.actions;


export const selectCharacters = (state: AppState) => state.characters.characters;
export const selectComics = (state: AppState) => state.characters.comics;
export const selectCurrentCharacter =  (state: AppState) => state.characters.currentCharacter;




export default CharacterSlice.reducer;