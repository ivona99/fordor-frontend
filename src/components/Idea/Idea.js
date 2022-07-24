import HeaderUI from "../Header/HeaderUI";
import Forma from "../Forma/Forma";
import CardOne from "../Forma/Card/Card";
import { useState, useEffect } from "react";
import axios from 'axios'

const Idea = () =>{

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getAllPosts = async () => {
        const result = await axios(`http://localhost:3001/api/posts/getKategories/2`);
        console.log(result.data)
        setPosts(result.data);
        setIsLoading(false)
    }

    useEffect(() => {
        getAllPosts();
        console.log(posts)
    }, [])

    const renderIdeas = posts?.map((post, index) => ((
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

    return(
        <>
        <HeaderUI />
        <Forma kategorija={2}/>
        <div className='renderPosts'>
                {isLoading ? <div>"loading"</div> : renderIdeas}
            </div>
        </>
    )
}

export default Idea;