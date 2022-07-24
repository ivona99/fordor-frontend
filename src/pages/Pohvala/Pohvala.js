import HeaderUI from '../../components/Header/HeaderUI';
import Forma from '../../components/Forma/Forma';
import { useState, useEffect } from 'react';
import axios from 'axios'
import CardOne from '../../components/Forma/Card/Card';

export default function Pohvala() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getAllPosts = async () => {
        const result = await axios(`http://localhost:3001/api/posts/getKategories/1`);
        console.log(result.data)
        setPosts(result.data);
        setIsLoading(false)
    }

    useEffect(() => {
        getAllPosts();
        console.log(posts)
    }, [])

    const renderPosts = posts?.map((post, index) => ((
        <CardOne
            key={index}
            title={post.naslov}
            name={post.ime}
            image={post.slika}
            desc = {post.opis}
            type={post.vrsta}
        />
    ))
    )
    return (
        <>
            <HeaderUI isAdmin={false} page={'pohvala'}/>
            <Forma kategorija={1}/>

            <div className='renderPosts'>
                {isLoading ? <div>"loading"</div> : renderPosts}
            </div>
        </>
    )
}