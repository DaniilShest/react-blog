import { BsFillPencilFill } from 'react-icons/bs'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'

export const WritePost: FC = () => {
    return (
        <Link to={'/'} className='write'>
            <BsFillPencilFill />
            <span>Написать пост</span>
        </Link>
    )
}
