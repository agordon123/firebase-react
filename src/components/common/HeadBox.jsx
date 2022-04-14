import * as React from 'react';
import Box from '@mui/material/Box';



export default function HeaderBox(props){
    const {HeaderStyle} = props;
    return(
        
        <Box id="navbar"
        flex={true}
        container
        props={HeaderStyle}
       >
        </Box>
     
    )
}