import React, { useState } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const DoB: React.FC = () => {
    const [dob, setDob] = useState<string>('');

    const handleDobChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        console.log("called!!!!");
        setDob(event.target.value);
    };

    return (
        <div>
            <h1>Life Calendar</h1>
            <div><span className="material-icons-outlined">account_circle</span></div>
            <div><Button variant="contained">Contained</Button></div>
            <div><IconButton aria-label="delete" size="large">
  <DeleteIcon fontSize="inherit" />
</IconButton></div>
            
            <input 
                type="date" 
                value={dob} 
                onChange={handleDobChange} 
                placeholder="Enter your date of birth" 
            />

        </div>
    );
};

export default DoB;