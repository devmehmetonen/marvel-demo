import React from 'react'
import Image from 'next/image'
import Ghost from '../public/assets/images/ghost2.svg'
import { useRouter } from 'next/router'


const NotFoundPage = () => {
    const router = useRouter()
    return (
        <div className='NotFoundPage'>
            <h1>4<span><div></div><Image height={200} width={230} src={Ghost} alt="ghost"/></span>4</h1>
            <h2>Error: 404 page not found</h2>
            <button onClick={()=>router.push("/")}>Home Page</button>
        </div>

    )
};

export default NotFoundPage
