import React, { memo } from 'react'
import { useRouter } from 'next/router'
import styles from './Navigation.module.scss'
import Image from 'next/image'
import Logo from '../../../public/assets/images/Marvel_Logo.svg'



const Navigation = () => {

    const router = useRouter()
    return (
        <div className={styles.navigation}>
            <Image src={Logo} alt="logo" width={120} height={60} onClick={() => { router.push("/") }} />
        </div>
    )
}

export default memo(Navigation)