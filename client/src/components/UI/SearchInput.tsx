import { FiSearch } from 'react-icons/fi'
import { FC } from 'react'

export const SearchInput: FC = () => {
    return (
        <div className="search">
            <input type="text" className="search__input" placeholder='Поиск' />
            <FiSearch className='search__img' />
        </div>
    )
}
