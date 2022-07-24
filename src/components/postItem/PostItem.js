import noimage from '../../no-image.jpg'
import './PostItem.css'

import { useState } from 'react';
import PostModal from '../Modal/PostModal'



export default function PostItem({category, post}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const openModal = async(e) => {
        setShow(true);
    }

    return (
        <>
        <div className="postItemDiv" onClick={(e) => openModal(e)}>
            <div ><img src={`http://localhost:3001/${post.slika}`} alt="noimage" className='slikaPostItem'/></div>
            <div className="desnoContainer">
                <div className="naslovPostItem">{post.naslov}</div>
                <div className="description">{post.opis.substring(0,180)}...</div>
                <div className="datumKreiranja">{new Date(post.createdAt).toLocaleDateString()}</div>
            </div>

        </div>
        
            <PostModal show={show} handleClose={handleClose} category={category} post={post}/>
        </>
    )
}