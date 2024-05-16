/* eslint-disable no-unused-vars */
import React from "react";
import { Box, Divider, ImageList, ImageListItem, ImageListItemBar, Typography } from "@mui/material";
import videoAcercade from "../../../../images/servicios/ACERCADE.mp4";
import "./About.css";
import MapView from "./MapView";
import imageData from "./dataImagenes";
import useMediaQuery from '@mui/material/useMediaQuery';

const About = () => {
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
    const isMobile = useMediaQuery('(max-width:428px)');
    const isTablet = useMediaQuery('(min-width:429px) and (max-width:834px)');
    const isDesktop = useMediaQuery('(min-width:835px)');    
    function srcset(image, width, height, rows = 1, cols = 1) {
        return {
          src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
          srcSet: `${image}?w=${width * cols}&h=${
            height * rows
          }&fit=crop&auto=format&dpr=2 2x`,
        };
      }
    return (
        <Box id="about" component="main" 
            sx={{ margin:0, padding: 0, paddingLeft: 0, paddingRight: 0, paddingTop: '30px', paddingBottom: '135px', minHeight: '100%', minWidth: '100%', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Box sx={styles.contentDesktop}>
                <Typography variant="h4" sx={{ paddingTop: '10px', backgroundColor:'#154A7D', color: '#FFFFFF' }}>Acerca de</Typography>
                <Divider />
                <Typography variant="body1" sx={{ backgroundColor:'#FFFFFF', color: '#707070' }}>
                    Fundada en 2007, PPFISH SAC tiene una rica historia de compromiso con la experiencia y la innovación en productos del mar. Desde nuestros inicios como planta de almacenamiento, congelamiento y procesador de productos hidrobiologicos, construimos nuestro negocio sobre la excelencia en el servicio al cliente y la calidad del producto. Nuestros ambiciosos planes de crecimiento se basan en un compromiso con la sostenibilidad y las innovaciones con visión de futuro.
                </Typography>
            </Box>
            <Box sx={styles.contentMobile}>
                <Typography variant="h6" sx={{ backgroundColor:'#154A7D', color: '#FFFFFF' }}>Acerca de</Typography>
                <Divider />
                <Typography variant="caption" sx={{ backgroundColor:'#FFFFFF', color: '#707070' }} display="block" gutterBottom>
                    Fundada en 2007, PPFISH SAC tiene una rica historia de compromiso con la experiencia y la innovación en productos del mar. Desde nuestros inicios como planta de almacenamiento, congelamiento y procesador de productos hidrobiologicos, construimos nuestro negocio sobre la excelencia en el servicio al cliente y la calidad del producto. Nuestros ambiciosos planes de crecimiento se basan en un compromiso con la sostenibilidad y las innovaciones con visión de futuro.
                </Typography>
            </Box>
            <Divider />
            <video className="video-about" muted autoPlay loop>
                <source src={videoAcercade} type="video/mp4" media="(max-width: 600px)" />
                <source src={videoAcercade} type="video/mp4" />
            </video>
            <Divider />
            <Box sx={styles.contentDesktop}>
                <Typography variant="h4" sx={{ paddingTop: '10px', backgroundColor:'#154A7D', color: '#FFFFFF' }}>Servicios que Ofrecemos</Typography>
            </Box>
            <Box sx={styles.contentMobile}>
                <Typography variant="h6" sx={{ backgroundColor:'#154A7D', color: '#FFFFFF' }}>Servicios que Ofrecemos</Typography>
            </Box>
            <Divider />
            <ImageList cols={isMobile ? 1 : isTablet ? 2 : 4} rowHeight={isMobile ? 200 : 250}>
                {imageData.map((item) => (
                    <ImageListItem key={item.url} 
                        sx={{ 
                        position: 'relative', 
                        overflow: 'hidden',
                        '&:hover img': {
                            transform: 'scale(1.5)', // Escala la imagen al pasar el mouse sobre ella
                            },
                        }}> 
                        <img src={item.url} alt={item.title} loading="eager" style={{ transition: 'transform 0.5s ease' }}/>
                        <ImageListItemBar
                            sx={{
                                width: '100%', // Ajusta el ancho del ImageListItemBar
                                '& .MuiImageListItemBar-title': {
                                    fontSize: '14px', // Tamaño del texto del título
                                    lineHeight: '1.2', // Espaciado entre líneas del título
                                    whiteSpace: 'normal', // Permite que el texto se ajuste al contenedor sin cortarse
                                    overflow: 'hidden', // Evita que el texto sobresalga del contenedor
                                    textOverflow: 'ellipsis', // Agrega puntos suspensivos si el texto es demasiado largo
                                },
                                '& .MuiImageListItemBar-subtitle': {
                                    display: 'none', // Oculta el subtítulo inicialmente
                                    fontSize: '12px', // Tamaño del texto del subtítulo
                                    lineHeight: '1.2', // Espaciado entre líneas del subtítulo
                                    whiteSpace: 'normal', // Permite que el texto se ajuste al contenedor sin cortarse
                                    overflow: 'hidden', // Evita que el texto sobresalga del contenedor
                                    textOverflow: 'ellipsis', // Agrega puntos suspensivos si el texto es demasiado largo
                                },
                                '&:hover .MuiImageListItemBar-subtitle': {
                                    display: 'block', // Muestra el subtítulo al pasar el mouse sobre la imagen
                                },
                            }}
                            title={item.title}
                            subtitle={item.body}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
            <Box sx={styles.contentDesktop}>
                <Typography variant="h4" sx={{ paddingTop: '10px', backgroundColor:'#154A7D', color: '#FFFFFF' }}>Ubicación</Typography>
            </Box>
            <Box sx={styles.contentMobile}>
                <Typography variant="h6" sx={{ backgroundColor:'#154A7D', color: '#FFFFFF' }}>Ubicación</Typography>
            </Box>
            <MapView />
        </Box>
    );
};

export default About;

