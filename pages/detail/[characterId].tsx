import React from 'react'
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
  let currentCharacter = await store.dispatch(getCharacterByIdAsync(String(query.characterId)))
  
  let comics = await store.dispatch(getComicsByIdAsync(String(query.characterId)))
  if(comics.payload.length===0 || !currentCharacter.payload){
    return{
      redirect: {
        destination: '/404',
        permanent: false,
      },
    }
  }
  store.dispatch(setCurrentCharacter(currentCharacter.payload))
  store.dispatch(setComics(comics.payload))
  return {
    props: {}
  };
  
});

export default wrapper.withRedux(DetailPage)