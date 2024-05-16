/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAcceptedCookies } from '../../redux/features/inicio';
import { Box, Button, Typography } from "@mui/material";

const CookieConsent = () => {
    const acceptedCookies = useSelector(state => state.inicio.acceptedCookies);
    const dispatch = useDispatch();
    console.log(acceptedCookies, localStorage.getItem('cookiesAccepted'));
    const acceptCookies = () => {
        localStorage.setItem('cookiesAccepted', 'true');
        dispatch(setAcceptedCookies(true));
    };

    if (!acceptedCookies ) {
        return (
            <Box className="cookie-consent" sx={{ position: 'fixed', zIndex: 9999, top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(173, 216, 230, 0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.2)'}}>
                <Box sx={{ zIndex: 10000, textAlign: 'center', padding: '20px', backgroundColor: '#fff', borderRadius: '5px' }}>
                    <Typography>Este sitio web utiliza cookies. Al continuar navegando, aceptas el uso de cookies.</Typography>
                    <Button onClick={acceptCookies} variant="contained" sx={{ marginTop: 2 }}>Aceptar</Button>
                </Box>
            </Box>
        );
    }

    return null;
};

export default CookieConsent;