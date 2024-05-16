/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from 'prop-types';
import { Box, Fade } from "@mui/material";
import useScrollTrigger from '@mui/material/useScrollTrigger';

const ScrollTop = (props)=> {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
    });
    const handleClick = (event) => {
      const anchor = (event.target.ownerDocument || document).querySelector(
        '#back-to-top-anchor',
      );
      if (anchor) {
        anchor.scrollIntoView({
          block: 'center',
        });
      }
    };
    return (
      <Fade in={trigger}>
        <Box
          onClick={handleClick}
          role="presentation"
          sx={{ position: 'fixed', bottom: 16, right: 16 }}
        >
          {children}
        </Box>
      </Fade>
    );
  }
  ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
  };
  export default ScrollTop;