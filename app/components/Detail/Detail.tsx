import { Col, Row } from 'antd'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import styles from './Detail.module.scss'
import { selectComics, selectCurrentCharacter } from '../../store/slices/characterSlice'
import Card from '../Card'

const Detail = () => {
    const currentCharacter = useSelector(selectCurrentCharacter)
    const comics = useSelector(selectComics)

    useEffect(() => {
        console.log(currentCharacter)
    }, [currentCharacter])

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
                {comics.map((comic, i) => {
                    if(i%4 == 0){
                        return (<Col sm={24} xl={16} key={i}>
                            <Card data={comic} />
                        </Col>)
                    }else if(i%4 == 1){
                        return (<Col sm={24} xl={8} key={i}>
                            <Card data={comic} />
                        </Col>)
                    }else if(i%4 == 2){
                        return (<Col sm={24} xl={8} key={i}>
                            <Card data={comic} />
                        </Col>)
                    }else if(i%4 == 3){
                        return (<Col sm={24} xl={16} key={i}>
                            <Card data={comic} />
                        </Col>)
                    }
                    
                }


                )}
            </Row>
        </div>
    )
}

export default Detail