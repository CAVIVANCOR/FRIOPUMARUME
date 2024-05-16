/* eslint-disable no-unused-vars */
import { Box, Button } from "@mui/material";
import React from "react";
import "./Home.css";
import videoPromocionServiciosMobile from "../../../images/servicios/INTROPPFISH40.mp4";
import videoPromocionServiciosDesktop from "../../../images/servicios/INTROPPFISH60.mp4";
import temaAzul from "../Colores";
import {ThemeProvider} from '@mui/material/styles';
import { Link } from "react-router-dom";
const Home = () => {
    console.log("Inicio");
    return (
        <ThemeProvider theme={temaAzul}>
            <Box id="hero" component="main" 
                sx={{ 
                    minHeight: '100vh', 
                    minWidth: '100vw', 
                    position:'relative', 
                    display: 'flex', 
                    justifyContent: 'center'}}>
                <Link to='/product' style={{ textDecoration: 'none'}}>
                    <Button 
                        size='medium' 
                        variant='contained'
                        sx={{ bgcolor: 'azul.darker', marginTop: 10, zIndex: 2, position: 'fixed', left: '50%', transform: 'translateX(-50%)' }}>
                        Ir a Productos y Servicios
                    </Button>
                </Link>
                <video className="video-home" muted autoPlay loop >
                    <source src={videoPromocionServiciosMobile} type="video/mp4" media="(max-width: 600px)"/>
                    <source src={videoPromocionServiciosDesktop} type="video/mp4"/>
                </video>
                <Box component="div" className="capa" 
                    sx={{ 
                        position: 'fixed', 
                        top: 0, left: 0, 
                        width: '100%', 
                        height: '100%', 
                        backgroundColor: '#ffffff', 
                        opacity: 0.3, 
                        mixBlendMode: 'overlay', 
                        display: 'flex',
                        alignContent: 'center',
                        justifyContent: 'center', 
                        alignItems: 'center' }}>
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default Home;