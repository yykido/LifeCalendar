import React from 'react';
import Box from '@mui/material/Box';

interface LogoutPros {
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Logout({setIsLoggedIn}: LogoutPros  ){
    return (
        <Box>
            <button onClick={()=>setIsLoggedIn(false)}>Logout</button>
        </Box>
    );
};
