import React, { memo } from 'react'
import 'antd/dist/antd.css';
import { useRouter } from 'next/router'
import styles from './Card.module.scss'

import { Card } from 'antd';
const Cards = ({ data }: any) => {

    const router = useRouter()

    return (
        <Card
            onClick={() => { router.push(`/detail/${data.id} `) }}
            hoverable
            className={styles.card}
            cover={<img alt={data.id} src={`${data.thumbnail.path}.${data.thumbnail.extension}`} />}
        >
            <div className={styles.title}>
                <i>
                    {data.name ? data.name : data.title}
                </i>
            </div>
        </Card>
    )
}

export default memo(Cards)