import React, { useEffect } from 'react'
import Detail from '../../app/components/Detail/Detail'
import Navigation from '../../app/components/Navigation'
import { wrapper } from '../../app/store'
import { getCharacterByIdAsync,getComicsByIdAsync,setComics,setCurrentCharacter } from '../../app/store/slices/characterSlice'

const DetailPage = () => {

  return (
    <div>
        <Navigation/>
        <Detail/>
    </div>
  )
}
export const getServerSideProps = wrapper.getServerSideProps((store) => async ({query}) => {
  let currentCharacter = await store.dispatch(getCharacterByIdAsync(query.characterId))
  store.dispatch(setCurrentCharacter(currentCharacter.payload))
  let comics = await store.dispatch(getComicsByIdAsync(query.characterId))
  store.dispatch(setComics(comics.payload))
  return {
    props: {}
  };
});

export default wrapper.withRedux(DetailPage)