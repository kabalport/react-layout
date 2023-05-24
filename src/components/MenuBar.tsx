import React from 'react';
import { Link } from 'react-router-dom';
import './MenuBar.css';
import { Link as RouterLink } from 'react-router-dom';

import {Box, Typography, Toolbar, Button} from "@mui/material";  // Make sure to import the CSS

const MenuBar: React.FC = () => {
    return (
        <Box>
            <Toolbar>
                <Box display="flex" flexDirection="column" alignItems="center" width="100%">
                    <Typography variant="h6">Logo</Typography>
                    <Box>
                        <Button color="inherit" component={RouterLink} to="/">
                            Home
                        </Button>
                        <Button color="inherit" component={RouterLink} to="/about">
                            About
                        </Button>
                        <Button color="inherit" component={RouterLink} to="/contact">
                            Contact
                        </Button>
                        <div className="dropdown">
                            <Button color="inherit" component={RouterLink} to="/products">
                                Products
                            </Button>
                            <div className="dropdownContent">
                                <Link to="/products/shirts">Shirts</Link>
                                <Link to="/products/pants">Pants</Link>
                                <Link to="/products/shoes">Shoes</Link>
                            </div>
                        </div>
                    </Box>
                </Box>
            </Toolbar>
        </Box>
    );
};

export default MenuBar;
