/* eslint-disable no-unused-vars */
import React from 'react';
import { createTheme } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
const temaAzul = createTheme({
    palette: {
        azul: {
            light: blue[50],
            main: blue[500],
            dark: blue[800],
            darker: blue[900],
        },
    },
});

export default temaAzul;