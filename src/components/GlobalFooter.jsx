import React from 'react';
import {Link} from 'react-router-dom';
import {HiMail} from 'react-icons/hi';
import { Grid,ImageList ,Box} from '@material-ui/core';
import './styles.css';
import { ImageListItem, Typography } from '@mui/material';
import { flexbox } from '@mui/system';



const Images = () =>{
}

export const Footer = () =>{


  return(
    <div className='GlobalFooter'>
    <Box flexbox display="grid"  sx={{justifyContent:"center"}}>
      <Grid  container spacing={4} paddingBottom="2" justifyContent="center" gridTemplateColumns={3} gridTemplateRows={3}>
        <Grid item gridRow={1}>
        <ImageList  gridTemplateColumns={3} >
        <ImageListItem gridColumn={1} gridRow={1} className="footer-images" src="MNCThumbnail1.jpg" alt="default"/>
        <ImageListItem gridColumn={2} gridRow={1} className="footer-images" src="MNCThumbnail2.jpg" alt="default" />
        <ImageListItem gridColumn={3} gridRow={1} className="footer-images" src="MNCThumbnail3.jpg" alt="default" />
      </ImageList>
    </Grid>
      <Grid item gridTemplateRows={2} >
        <Typography gridRow={1} color="#c0c0c0">Copyright ©</Typography>
        <Typography gridRow={2} color="#c0c0c0">MNC Development, Inc. 2008-present. All rights reserved.</Typography>
      </Grid>
      <Grid item gridColumn={2}>
        <Typography gridRow={1} fontSize={10}>
          31 Buffalo Avenue, Brooklyn, New York 11233|Phone:1-718-771-5811 or
          1-877-732-3492|Fax: 1-877-760-2763 or 1-718-771-5900 |
        </Typography>
        <span >
          <Link gridRow={2} href="mailto:info@mncdevelopment.com">
          <HiMail/>
            <Typography>info@mncdevelopment.com</Typography>
          </Link>
        </span>
      </Grid>
      <Grid item gridRow={3}>
        <Typography >
          MNC Development and the MNC Development logos are trademarks of MNC Development,
          Inc.
        </Typography>
      </Grid>
      <Grid item >
        <Text >
          MNC Development, Inc. as a NYS licensed Real Estate Broker fully supports the
          principles of the Fair Housing Act and the Equal Opportunity Act. Listing
          information is deemed reliable, but is not guaranteed.
        </Text>
      </Grid>
    </Grid>
    </Box>
    </div>
  )
}

export default Footer;