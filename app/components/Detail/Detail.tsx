import { Col, Row } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'
import styles from './Detail.module.scss'
import { selectComics, selectCurrentCharacter } from '../../store/slices/characterSlice'
import Card from '../Card'

const Detail = () => {
    const currentCharacter = useSelector(selectCurrentCharacter)
    const comics = useSelector(selectComics)

    return (
        <div className='container'>
            <Row gutter={24} className={styles.characterDetail}>
                <Col sm={24} lg={8} className={styles.characterImg}>
                    {currentCharacter?.thumbnail && <img src={`${currentCharacter.thumbnail.path}.${currentCharacter.thumbnail.extension}`} />}
                </Col>
                <Col sm={24} lg={16} className={styles.characterDesc}>
                    <h2>
                        {currentCharacter?.name && currentCharacter.name}
                    </h2>
                    <p>
                        {currentCharacter?.description ? currentCharacter.description : 'I am a Legend!!'}
                    </p>
                </Col>
            </Row>
            <Row gutter={24}>
                {comics.map((comic, i) => 
                   <Col xs={24} sm={12} md={8} lg={8} xl={6} key={i}>
                   <Card data={comic} big />
               </Col>
                
                )}
            </Row>
        </div>
    )
}

export default Detail