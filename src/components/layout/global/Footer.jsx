/* eslint-disable no-unused-vars */
import { Avatar, Box, Link, Typography } from "@mui/material";
import Grid from '@mui/material/Grid'; // Grid version 2
import logotipoComercial from '../../../icons/logofriopumarumecompletosinfondochico.png';
import React from "react";
import { ThemeProvider } from '@mui/material/styles';
import temaAzul from "../Colores";
const Footer = () => {
    return (
        <ThemeProvider theme={temaAzul}>
            <Box sx={{ 
                position: 'fixed', 
                display: 'flex',
                bottom: 0, 
                left: 0, 
                width: '100%', 
                bgcolor: 'azul.light', 
                padding: 1,
                justifyContent: 'center',
                zIndex:1
            }}>
                <Grid container>
                    <Grid item xs={12} sm={4} sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center'}} >
                        <Avatar
                            alt="logotipo"
                            src={logotipoComercial}
                            sx={{ width: 90, height: 70 }}
                            variant='square'
                        />
                    </Grid>
                    <Grid item xs={12} sm={4} sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }} >
                        <Typography variant="caption" color="text.secondary" align="center">
                            Copyright © FRIOPUMARUME, PPFISH SAC RUC: 20516770300
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4} sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }} >
                        <Typography variant="caption" color="text.secondary" align="center">
                            <Link color="primary" href="https://maps.app.goo.gl/XsERbMGeNSBUCSXa9">Calle A Lote 4 Sector I Sección 5, Ex Fundo Oquendo, Callao, Prov. Const. Del Callao</Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    );
};

export default Footer;