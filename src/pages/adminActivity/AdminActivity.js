import Header from '../../components/Header/Header';
import PostItem from '../../components/postItem/PostItem';
import './adminActivity.css'
import { useEffect, useState } from 'react';
import {Modal} from 'react-bootstrap';
import axios from 'axios';
import { getAccordionDetailsUtilityClass } from '@mui/material';

export default function AdminActivity() {
    const [posts, setPosts] = useState([]);
    const [content, setContent] = useState('projekti');
    const [contentCategory, setcontentCategory] = useState('All');
    const [location, setLocation] = useState({});
    const [inputs, setInputs] = useState({
        title: '',
        description: '',
        category: 'Junk'
    });
    const [selectedFile, setSelectedFile] = useState('');
    const { title, description, category} = inputs;
    
    const onChange = e => {
        setInputs({...inputs, [e.target.name] : e.target.value});
      }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const openModal = async(id) => {
        // const result = await axios(`https://amsfs.herokuapp.com/api/tretman/${terminn.tretman}`);
        // setChoosenPrijava(result.data);
        setShow(true);
    }

    const getPosts = async() => {
        const result = await axios(`http://localhost:3001/api/posts/getKategoriesVrsta/3`);
        setPosts(result.data);
    }

    useEffect(() => {
        getPosts();
    }, []);
    
    const getLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLocation({
                lng: position.coords.longitude,
                lat: position.coords.latitude
            });
            console.log(location);
        });
    }

    const addNewProject = () => {
        getLocation();
        console.log(location.lat);
        const formData = new FormData();
        formData.append("image", selectedFile);
        formData.append("ime", "nema");
        formData.append("opis", description);
        formData.append("naslov", title);
        formData.append("kategorija", 3);
        formData.append("lng", location.lng);
        formData.append("lat", location.lat);
        formData.append("vrsta", category);

        axios.post("http://localhost:3001/api/posts/addPost", formData).then((res) => {getPosts()}).catch((err) => alert("File Upload Error"));

        setInputs({
            title: '',
            description: '',
            category: 'Junk'
        })
        setShow(false);
        getPosts();
    }

    const handleChange = async (event) => {
        setContent(event.target.value);
        let result;
        content === "prijedlozi"?
        result = await axios(`http://localhost:3001/api/posts/getKategoriesVrsta/3`) :
        result = await axios(`http://localhost:3001/api/posts/getKategoriesVrsta/2`)
        setPosts(result.data);
    }

    const handleChangeCategory = (e) => {
        setInputs({...inputs, category : e.target.value});
    }

    const handleChangeContentCategory = async(e) => {
        setcontentCategory(e.target.value);
    }
    return (
        <div>
            <Header isAdmin={true} page={'adminactivity'} />
            <div className='dodajProjekatBtnContainer'><div className='dodajProjekat' onClick={(e) => openModal(e)}>Dodaj novi projekat</div></div>

            <div className='selectContainer'>
                <div className='ddinline'>
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
                
                <div className='ddinline'>
                    <select value={content} onChange={(e) => handleChange(e)} className='dropbtn'>
                        <option value={'projekti'} className='ddOption'>Projekti</option>
                        <option value={'prijedlozi'} className='ddOption'>Prijedlozi</option>
                    </select>
                </div>
            </div>

            <div className='adminPrijavaContainer' style={{overflow: 'auto', height: 'inherit'}}>
                {
                    contentCategory !== "All"?
                    posts.map((p, index) => p.vrsta === contentCategory && <PostItem category={'aktivizam'} key={index} post={p}/>):
                    posts.map((p, index) => <PostItem category={'aktivizam'} key={index} post={p}/>)
                }
            </div>

            <Modal show={show} onHide={handleClose} centered={true} dialogClassName="modal-lg">
                <Modal.Header>
                    <div className='dodajProjekatNaslov'> Dodaj novi projekat </div>
                </Modal.Header>
                <Modal.Body>
                    <label htmlFor="title" className="inputNaslovLbl">Slika:</label>
                    <input type="file" name='image' className='imgInput' onChange={(e) => setSelectedFile(e.target.files[0])}/>

                    <label htmlFor="title" className="inputNaslovLbl">Naslov:</label>
                    <input type="text" name="title" required className="inputNaslov" value={title} onChange={e => onChange(e)} style={{ width: '100%'}}/>

                    <label htmlFor="description" className="inputNaslovLbl">Opis:</label>
                    <textarea type="text" name="description" required className="inputNaslov" value={description} onChange={e => onChange(e)} style={{ width: '100%', height: '6em'}}/>
                    
                    <select value={category} onChange={(e) => handleChangeCategory(e)} className='dropbtn'>
                        <option value={'Junk'} className='ddOption'>Junk</option>
                        <option value={'Pets'} className='ddOption'>Pets</option>
                        <option value={'Vandals'} className='ddOption'>Vandals</option>
                        <option value={'Parking in illegal places'} className='ddOption'>Parking in illegal places</option>
                        <option value={'Overtaking cars in illegal places'} className='ddOption'>Overtaking cars in illegal places</option>
                        <option value={'Throwing garbage while driving'} className='ddOption'>Throwing garbage while driving</option>
                        <option value={'Other'} className='ddOption'>Other</option>
                    </select>
                </Modal.Body>
                <Modal.Footer>
                    <div className='modalBtn' onClick={(e) => addNewProject(e)}>Dodaj</div>
                </Modal.Footer>
            </Modal>
        </div >
    )
}