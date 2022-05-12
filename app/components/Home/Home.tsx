import React from 'react'
import { Col, Row } from 'antd'
import Cards from '../Card'
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from 'react-redux';
import { getCharacterAsync, selectCharacters, setCharacters } from '../../store/slices/characterSlice';

const Home = () => {

  const dispatch = useDispatch();
  const characters = useSelector(selectCharacters)

  const fetchMoreData = async () => {
    let data = await dispatch<any>(getCharacterAsync(characters.length))
    dispatch<any>(setCharacters(data.payload))
  }

  return (
    <div className='container'>
      <InfiniteScroll
        dataLength={characters.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<p style={{ color: "#E62429", fontSize:24,fontWeight:600 }}>Loading...</p>}
      >
        <Row gutter={24}>
          {characters.map((character: any, i: number) =>
          (<Col xs={24} sm={12} md={12} lg={8} xl={8} key={i}>
            <Cards data={character} />
          </Col>)
          )}
        </Row>
      </InfiniteScroll>

    </div >
  )
}

export default Home