import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField, FormControlLabel, Checkbox } from '@mui/material';
import './Forma.css'
import { useState } from 'react';
import axios from 'axios';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ kategorija }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [name, setName] = useState('');
  const [isAnonymus, setIsAnonymus] = useState(true);
  const [title, setTitle] = useState('');
  const [selectedFile, setSelectedFile] = useState('');
  const [desc, setDesc] = useState('');

  const [vrsta, setVrsta] = useState('');
  const [lng, setLng] = useState();
  const [lat, setLat] = useState();



  const sendData = () => {
    getLngLat();
    const formData = new FormData();
    formData.append("image", selectedFile);
    formData.append("ime", name);
    formData.append("opis", desc);
    formData.append("naslov", title);
    formData.append("kategorija", kategorija);
    formData.append("lng", lng);
    formData.append("lat", lat);
    formData.append("vrsta", vrsta);

    axios.post("http://localhost:3001/api/posts/addPost", formData).then((res) => { alert("File Upload success"); }).catch((err) => alert(err));

  }


  const handleCheckbox = (e) => {
    setName(e.target.checked);
  }

  const handleName = (e) => {
    setIsAnonymus(e.target.value);
  }
  const handleTitle = (e) => {
    setTitle(e.target.value);
  }
  const handleDescription = (e) => {
    setDesc(e.target.value);
  }
  // const imgFileHandler = (e) => {
  //   setImg(URL.createObjectURL(e.target.files[0]));
  // }
  const handleChangeKategorija = (e) => {
    setVrsta(e.target.value);
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
    <div>
      <div className='buttonMix'>
      {kategorija === 0 ? <Button variant='contained' color='primary' onClick={handleOpen}>Dodaj Prijavu</Button> :
        kategorija === 1 ? <Button variant='contained' color='primary' onClick={handleOpen}>Dodaj Pohvalu</Button> :
          <Button variant='contained' color='primary' onClick={handleOpen}>Prijedlog</Button>}
          </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="Naslov">
            {
              kategorija === 0 ? <h3>Dodaj Prijavu</h3> :
                kategorija === 1 ? <h3>Dodaj Pohvalu</h3> :
                  <h3>Dodaj prijedlog</h3>
            }

          </div>
          <FormControlLabel control={<Checkbox defaultChecked />} onChange={handleCheckbox} label="Anonimno" />


          <TextField variant='outlined' label={"Ime i prezime"} margin="dense" onChange={handleName} style={{
            width: "100%"
          }} />
          <TextField variant='outlined' label={"Naslov"} margin="dense" onChange={handleTitle} style={{
            width: "100%"
          }} />
          <TextField
            onChange={handleDescription}
            margin="dense"
            id="outlined-multiline-static"
            label="Opis"
            multiline
            rows={4}
            style={{
              width: "100%"
            }}
          />
          <Typography>Slika:</Typography>
          <input
            accept="image/*"
            id="raised-button-file"
            multiple
            type="file"
            onChange={(e) => setSelectedFile(e.target.files[0])}
          />

          <select value={vrsta} onChange={handleChangeKategorija} className='dropbtn'>
            <option value={'Junk'} className='ddOption'>Junk</option>
            <option value={'Pets'} className='ddOption'>Pets</option>
            <option value={'Vandals'} className='ddOption'>Vandals</option>
            <option value={'Parking in illegal places'} className='ddOption'>Parking in illegal places</option>
            <option value={'Overtaking cars in illegal places'} className='ddOption'>Overtaking cars in illegal places</option>
            <option value={'Throwing garbage while driving'} className='ddOption'>Throwing garbage while driving</option>
            <option value={'Other'} className='ddOption'>Other</option>
          </select>


          <Button variant="contained" onClick={sendData}>Posalji</Button>

        </Box>
      </Modal>
    </div>
  );
}
