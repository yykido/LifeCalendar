import * as React from 'react';
import Button from '@mui/material/Button';
import { Avatar, Box } from '@mui/material';
import TemporaryDrawer from './TemporaryDrawer';
import Logout from './Logout';

const Header: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);
    

    return (
        <Box display="flex" justifyContent="space-between" alignItems="center" position="relative">
            <Box width="100px" height="50px"></Box>
            <Box>
                <h1>Life Calendar</h1>
            </Box>
            <Box>
                <Box width="100px" height="50px" >
                {isLoggedIn ? (
                        <Logout setIsLoggedIn={setIsLoggedIn}/>
                    ) : (
                        <Box display="flex" >
                            <TemporaryDrawer setIsLoggedIn={setIsLoggedIn}/>
                            <Box>sign up</Box>
                        </Box>
                    )}
                </Box>
                
            </Box>
        </Box>
    );
};

export default Header;