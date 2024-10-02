import * as React from 'react';
import Button from '@mui/material/Button';
import { Avatar, Box } from '@mui/material';
import LoginList from './LoginList';

const Header: React.FC = () => {
    const [showLoginList, setShowLoginList] = React.useState<boolean>(false);
    const loginListRef = React.useRef<HTMLDivElement>(null);
    const avatarRef = React.useRef<HTMLDivElement>(null);

    const handleAvatarClick = () => {
        setShowLoginList((prev) => !prev); // Toggle the visibility of LoginList
    };

    // Close the LoginList when clicking outside
    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            // Check if click is outside of Avatar and LoginList
            if (
                loginListRef.current && 
                !loginListRef.current.contains(event.target as Node) &&
                avatarRef.current && 
                !avatarRef.current.contains(event.target as Node)
            ) {
                setShowLoginList(false);
            }
        };

        // Add the event listener to the document
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            // Remove the event listener when the component is unmounted
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    

    return (
        <Box display="flex" justifyContent="space-between" alignItems="center" position="relative">
            <Box width="100px" height="50px"></Box>
            <Box>
                <h1>Life Calendar</h1>
            </Box>
            <Box>
                <Box width="100px" height="50px" ref={avatarRef}>
                    <Avatar 
                        src="/broken-image.jpg" 
                        onClick={handleAvatarClick} // Add click handler
                    />
                </Box>
                {showLoginList && (
                    <Box 
                        position="absolute" 
                        top="100%" // Position below the Avatar
                        right="30px" // Align to the left of the Avatar
                        bgcolor="white" 
                        boxShadow={1} 
                        borderRadius={1} 
                        zIndex={1}
                        mt={1} // Margin top to create space below the avatar
                        ref={loginListRef} // Reference for click detection
                    >
                        <LoginList />
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default Header;