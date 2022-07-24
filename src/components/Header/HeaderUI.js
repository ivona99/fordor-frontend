import React from "react";
import './HeaderUI.css'
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


const HeaderUI = () => {
    
    const navigate = useNavigate();

    const handlePrijavaNavigation = () =>{
      navigate('/prijava');
    }

    const handlePohvaliNavigation = () =>{
        navigate('/pohvala');
      }

     const handleAboutNavigation = () =>{
        navigate('/about')
     }

     const handleContactNavigation = () =>{
        navigate('/contact')
     }

     const handleAddAction = () =>{
        navigate('/addIdea')
     }
    return (
        <div className="headerUI">
            <div className="logoUI">
                <NavLink to='/'><h1 className="zuco">ŽućoBiH</h1></NavLink>
                <ul className="unorderedList">
                    <li onClick={handleAboutNavigation}>Zajednica</li>
                    <li onClick={handleContactNavigation}>Kontakt</li>
                    <li onClick={handlePrijavaNavigation}>Prijave</li>
                    <li onClick={handlePohvaliNavigation}>Pohvale</li>
                    <li onClick={handleAddAction}>Projekti</li>
                </ul>
            </div>
            {/* <div className="dvaButtona">
                <Button variant="contained" onClick={handlePrijavaNavigation} style={{
                    margin:"10px"
                }}>Prijavi</Button>
                <Button variant="contained" onClick={handlePohvaliNavigation} style={{
                    margin:"10px"
                }}>Pohvali</Button>
            </div> */}
            
        </div>
    )
}

export default HeaderUI;