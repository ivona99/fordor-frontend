import Forma from '../../components/Forma/Forma';
import HeaderUI from '../../components/Header/HeaderUI';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../../components/Forma/Card/Card';

export default function Prijava() {

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getAllPosts = async () => {
        const result = await axios(`http://localhost:3001/api/posts/getKategories/0`);
        console.log(result.data)
        setPosts(result.data);
        setIsLoading(false)
    }

    useEffect(() => {
        getAllPosts();
        console.log(posts)
    }, [])

    const renderPosts = posts?.map((post, index) => ((
        <Card
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
            <HeaderUI isAdmin={false} page={'prijava'} />
            <Forma kategorija={0} />
            <div className='renderPosts'>
                {isLoading ? <div>"loading"</div> : renderPosts}
            </div>
        </>
    )
}