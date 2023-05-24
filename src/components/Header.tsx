import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Box } from '@mui/material';

const Header: React.FC = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Box display="flex" justifyContent="flex-end" width="100%">
                    <Button color="inherit" component={Link} to="/signup">
                        회원가입
                    </Button>
                    <Button color="inherit" component={Link} to="/login">
                        로그인
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
