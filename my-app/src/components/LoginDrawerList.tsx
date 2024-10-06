import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import TextField from '@mui/material/TextField';



export default function DrawerList() {
    return(
        <Box sx={{ width: 250 }} role="presentation" >
            <TextField
                required
                id="outlined-required"
                label="Required"
                defaultValue="Hello World"
            />
            <TextField
                required
                id="outlined-required"
                label="Required"
                defaultValue="Hello World"
            />
        </Box>
    )
} 
