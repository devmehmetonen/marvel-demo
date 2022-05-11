import type { NextPage } from 'next'
import { wrapper } from '../app/store';
import { getCharacterAsync, setCharacters } from '../app/store/slices/characterSlice'
import Navigation from '../app/components/Navigation'
import HomePage from '../app/components/Home/Home';


const Home: NextPage = () => {

  return (
      <div>
      <Navigation/>
      <HomePage/>
      </div>
  )
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  let data = await store.dispatch(getCharacterAsync(0));
  store.dispatch(setCharacters(data.payload))
  return {
    props: {}
  };
});

export default wrapper.withRedux(Home)


