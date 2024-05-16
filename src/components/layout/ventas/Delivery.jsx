/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Box, Divider } from "@mui/material";
import Typography from '@mui/material/Typography';
import imagenVentas from '../../../images/servicios/04VENTADEPESCADOSYMARISCOS.jpg';
const Delivery = () => {
    const styles = {
        contentDesktop: {
            top: 0,
            left : 0,
            width: '100%',
            textAlign: 'justify',
            position: 'relative',
            display: { xs: 'none', sm: 'block' },
            zIndex: 1,
        },
        contentMobile: {
            top: 0,
            left : 0,
            width: '100%',
            textAlign: 'justify',
            position: 'relative',
            display: { xs: 'block', sm: 'none' },
            zIndex: 1,
        },
        };
    return (
        <Box id="product" component="main" 
            sx={{ margin:0, padding: 0, paddingLeft: 0, paddingRight: 0, paddingTop: '30px', paddingBottom: '135px', minHeight: '100%', minWidth: '100%', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Box sx={styles.contentDesktop}>
                <Typography variant="h4" sx={{ minWidth: '100%', textAlign: 'center', paddingTop: '10px', backgroundColor:'#154A7D', color: '#FFFFFF' }}>Comercializacion</Typography>
            </Box>
            <Box sx={styles.contentMobile}>
                <Typography variant="h6" sx={{ backgroundColor:'#154A7D', color: '#FFFFFF' }}>Comercializacion</Typography>
            </Box>
            <Divider />
            <img width="100%" src={imagenVentas} alt="Comercializacion de Pescados y Mariscos" />
        </Box>
    );
};
export default Delivery;

