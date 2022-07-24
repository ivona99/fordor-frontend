import React from "react";
import { Card, CardMedia, CardContent, Typography, Button, Modal, Box, TextField, InputLabel } from "@mui/material";
import { useState } from "react";
import axios from 'axios';


const styleBox = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const CardOne = (props, index) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [type, setType] = useState('');
    const [selectedFile, setSelectedFile] = useState('');
    const [lng, setLng] = useState();
    const [lat, setLat] = useState();

    const sendData = () => {
        getLngLat();
        const formData = new FormData();
        formData.append("image", selectedFile);
        formData.append("ime", name);
        formData.append("opis", desc);
        formData.append("naslov", title);
        formData.append("lng", lng);
        formData.append("lat", lat);
        formData.append("vrsta", type);

        axios.post("http://localhost:3001/api/posts/addPost", formData).then((res) => { alert("File Upload success"); }).catch((err) => alert(err));

    }


    const handleChangeKategorija = (e) => {
        setType(e.target.value);
    }

    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleTitle = (e) => {
        setTitle(e.target.value);
    }
    const handleDescription = (e) => {
        setDesc(e.target.value);
    }

    const getLngLat = () => {
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);

            setLng(position.coords.longitude);
            setLat(position.coords.latitude);
        });
    }

    return (
        <Card sx={{ maxWidth: 345, display: "inline-block", margin: 3, borderRadius:"15px" }}>
            <CardMedia
                component="img"
                alt="N/A"
                height="200"
                image={`http://localhost:3001/${props.image}`}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.title}
                </Typography>
            </CardContent>
            <Button variant="contained" onClick={handleOpen} sx={{
                width: "100%"
            }}>
                Detalji
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box color="primary" variant="filled" margin="dense" sx={styleBox}>
                    <Typography variant="h3" paddingBottom={5}>Detalji</Typography>
                    <InputLabel>Naslov</InputLabel>
                    <TextField className="inputStyle" disabled color="primary" variant="outlined" margin="dense" value={props.title} sx={{
                        width: "100%"
                    }} />
                    <InputLabel>Ime</InputLabel>
                    <TextField className="inputStyle" disabled color="error" variant="outlined" margin="dense" value={props.name} sx={{
                        width: "100%"
                    }} />
                    <InputLabel>Opis</InputLabel>
                    <TextField className="inputStyle" disabled color="error" multiline variant="outlined" margin="dense" value={props.desc} sx={{
                        width: "100%"
                    }} />
                    <InputLabel>Vrsta</InputLabel>
                    <TextField className="inputStyle" disabled color="primary" variant="outlined" margin="dense" value={props.type} sx={{
                        width: "100%"
                    }} />
                </Box>
            </Modal>

        </Card>
    )
}


export default CardOne;




{/* <Box sx={styleBox}>
                    <Typography variant="h3" paddingBottom={5}>Predlozi akciju</Typography>
                    <InputLabel>Naslov</InputLabel>
                    <TextField onChange={handleTitle} color="primary" variant="outlined" margin="dense" placeholder="Unesite naziv akcije" sx={{
                        width: "100%"
                    }} />
                    <InputLabel>Ime</InputLabel>
                    <TextField onChange={handleName} color="error" variant="outlined" margin="dense" placeholder="Unesite vase ime" sx={{
                        width: "100%"
                    }} />
                    <InputLabel>Opis</InputLabel>
                    <TextField onChange={handleDescription} color="error" multiline variant="outlined" margin="dense" placeholder="Unesite opis" sx={{
                        width: "100%"
                    }} />
                    <InputLabel>Unesite sliku</InputLabel>
                    <input
                        accept="image/*"
                        id="raised-button-file"
                        multiple
                        type="file"
                        onChange={(e) => setSelectedFile(e.target.files[0])}
                    />

                    <InputLabel>Odaberite vrstu</InputLabel>

                    <select value={props.type} onChange={handleChangeKategorija} className='dropbtn' >
                        <option value={'Junk'}>Junk</option>
                        <option value={'Pets'} className='ddOption'>Pets</option>
                        <option value={'Vandals'} className='ddOption'>Vandals</option>
                        <option value={'Parking in illegal places'} className='ddOption'>Parking in illegal places</option>
                        <option value={'Overtaking cars in illegal places'} className='ddOption'>Overtaking cars in illegal places</option>
                        <option value={'Throwing garbage while driving'} className='ddOption'>Throwing garbage while driving</option>
                        <option value={'Other'} className='ddOption'>Other</option>
                    </select>

                </Box> */}