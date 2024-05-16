/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Box, Card, CardActions, CardContent, CardHeader, CardMedia, Divider } from "@mui/material";
import "./Product.css";
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import imageData from "../global/about/dataImagenes";
const Product = () => {
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
    const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }));

    const ExpandMore = styled((props) => {
      const { expand, ...other } = props;
      return <IconButton {...other} />;
    })(({ theme, expand }) => ({
      transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    }));
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    return (
        <Box id="product" component="main" 
            sx={{ margin:0, padding: 0, paddingLeft: 0, paddingRight: 0, paddingTop: '30px', paddingBottom: '135px', minHeight: '100%', minWidth: '100%', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Box sx={styles.contentDesktop}>
                <Typography variant="h4" sx={{ paddingTop: '10px', backgroundColor:'#154A7D', color: '#FFFFFF' }}>Productos y Servicios</Typography>
            </Box>
            <Box sx={styles.contentMobile}>
                <Typography variant="h6" sx={{ backgroundColor:'#154A7D', color: '#FFFFFF' }}>Productos y Servicios</Typography>
            </Box>
            <Divider />
            <Box>
              <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }}>
                {imageData.map((item) => (
                  <Card key={item.url} sx={{ maxWidth: '100%' }}>
                    <CardHeader
                      title={item.title}
                      sx={{ backgroundColor: '#325474', color: '#FFFFFF', height: '100px' }}
                    />
                    <CardMedia
                      component="img"
                      height="auto"
                      image={item.url}
                      alt={item.title}
                      sx={{ height: '300px' }}
                    />
                    <CardContent>
                      <Typography variant="body2" color="text.secondary" justifyContent={"justify"}>
                        {item.body}
                      </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                      <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                        sx={{ marginLeft: 'auto', marginRight: 'auto' }}
                      >
                      <ExpandMoreIcon />
                      </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                      <CardContent>
                        <Typography sx={{ fontStyle:'bold' }} paragraph>{item.subtitulo01}</Typography>
                        <Typography variant="caption" paragraph>
                          {item.parrafo01}
                        </Typography>
                        <Typography sx={{ fontStyle:'bold' }} paragraph>{item.subtitulo02}</Typography>
                        <Typography variant="caption" paragraph>
                          {item.parrafo02}
                        </Typography>
                        <Typography sx={{ fontStyle:'bold' }} paragraph>{item.subtitulo03}</Typography>
                        <Typography variant="caption" paragraph>
                          {item.parrafo03}
                        </Typography>
                      </CardContent>
                    </Collapse>
                  </Card>
                ))}
              </Stack>
            </Box>
        </Box>
    );
};
export default Product;

