import Header from '../../components/Header/Header';
import PostItem from '../../components/postItem/PostItem';
import './adminReport.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function AdminReport() {
    const [posts, setPosts] = useState([]);
    const [contentCategory, setContentCategory] = useState('All');

    const getPosts = async() => {
        const result = await axios(`http://localhost:3001/api/posts/getKategoriesVrsta/0`);
        setPosts(result.data);
    }

    useEffect(() => {
        getPosts();
    }, []);

    const handleChangeContentCategory = (e) => {
        setContentCategory(e.target.value);
    }
    return (<>
        <div>
            <Header isAdmin={true} page={'adminreport'}/>
            
            <div className='ddContainer'>
                <select value={contentCategory} onChange={(e) => handleChangeContentCategory(e)} className='dropbtn'>
                    <option value={'All'} className='ddOption'>Kategorija</option>
                    <option value={'Junk'} className='ddOption'>Junk</option>
                    <option value={'Pets'} className='ddOption'>Pets</option>
                    <option value={'Vandals'} className='ddOption'>Vandals</option>
                    <option value={'Parking in illegal places'} className='ddOption'>Parking in illegal places</option>
                    <option value={'Overtaking cars in illegal places'} className='ddOption'>Overtaking cars in illegal places</option>
                    <option value={'Throwing garbage while driving'} className='ddOption'>Throwing garbage while driving</option>
                </select>
            </div>

            <div className='adminPrijavaContainer'>
            {
                contentCategory !== "All"?
                    posts.map((p, index) => p.vrsta === contentCategory && <PostItem category={'prijava'} key={index} post={p}/>):
                    posts.map((p, index) => <PostItem category={'prijava'} key={index} post={p}/>)
            }
            </div>
        </div>
        </>
    )
}