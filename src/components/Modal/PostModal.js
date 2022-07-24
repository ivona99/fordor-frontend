import { Modal } from 'react-bootstrap';
import './postModal.css';
import axios from 'axios';
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function PostModal({show, handleClose, category, post}) {
    const accept = () => {
        axios.put("http://localhost:3001/api/posts/odobri/5");
        handleClose();
    }

    const deny = () => {
        axios.delete(`http://localhost:3001/api/posts/deletePost/${post.id}`);
        handleClose();
    }

    const {isLoaded} = useLoadScript ({
        googleMapsApiKey: "AIzaSyAEwRZYvRAvUDqjERHWAn3dPNgYDc_f3Mo",
    });


    if(!isLoaded) {return <div className="loading">Loading...</div>}
    return (<>
        <Modal show={show} onHide={handleClose} centered={true} dialogClassName="modal-lg">
            <Modal.Header>
                {category === 'prijava' ? <div className='modalHeader'>Upravljanje prijavom</div>:
                    category === 'pohvala' ? <div className='modalHeader'>Upravljanje pohvalom</div>:
                    <div className='modalHeader'>Pregled prijedloga</div>
                }
                
            </Modal.Header>
            <Modal.Body>
                <div className='postModalContainer'>
                    <div className='naslovPosta'>{post.naslov}</div>
                    <div className='nazivKategorije'><b>Kategorija: </b>{post.vrsta}</div>
                    <div className='slikaVideoContainer'>
                        <img src={`http://localhost:3001/${post.slika}`} className='slikaPosta'/>
                    </div>
                    <div className='descriptionPosta'>{post.opis}</div>
                    <div className='mapModalContainer'>
                        <GoogleMap zoom={17} center={{lat: post.lat, lng: post.lng}} mapContainerClassName="mapContainerr">
                            <Marker position={{lat:post.lat, lng: post.lng}}/>
                        </GoogleMap>
                    </div>
                </div>
            </Modal.Body>
            {
                category !== 'aktivizam' && 
                    <Modal.Footer>
                        <div className='modalBtn' onClick={(e) => accept(e)}>Prihvati</div>
                        <div className='modalBtn' onClick={(e) => deny(e)}>Odbij</div>
                    </Modal.Footer>}
        </Modal></>
    )
}