import { FaRegComment, FaRegBookmark } from 'react-icons/fa'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { RouteNames } from '../router'

export const PostCard: FC = () => {
    return (
        <div className="post-card">
            <div className="post-card__author">Имя Фамилия</div>
            <div className="post-card__body">
                <div className="post-card__info">
                    <h1 className="post-card__title">Это название статьи</h1>
                    <p className="post-card__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non unde enim assumenda voluptatibus voluptatum distinctio reiciendis facilis, architecto, rerum atque eos eveniet, numquam repudiandae iusto omnis! Consequatur veritatis similique quasi.</p>
                </div>
                <img src="https://tproger.ru/signed_image/KGhvNyrAsa2nP5JyfQGPCOSuLjOixmI2-Eo2EVzAm-U/rs:fit:90:0:1/cb:vimg_1/f:webp/aHR0cHM6Ly9tZWRpYS50cHJvZ2VyLnJ1L3VwbG9hZHMvMjAyMi8wOC81MDEwMTM4X2JveF9kZWxpdmVyeV9sb2dpc3RpY19wYWNrYWdlX3NvcnRfaWNvbi1jb3Zlci1pY29uLW9yaWdpbmFsLnBuZw" alt="" className="post-card__img" />
            </div>
            <div className="post-card__footer">
                <div className="post-card__icon post-card__bookmark">
                    <FaRegBookmark /> <span>4</span>
                </div>
                <Link to={RouteNames.HOME} className="post-card__icon post-card__comment">
                    <FaRegComment /> <span>4</span>
                </Link>
            </div>
        </div>
    )
}
