import React from 'react';
import {Link} from 'react-router-dom';
import {LinkBox,Image, Box, Grid,GridItem,Text,Container, Flex} from '@chakra-ui/react';
import {HiMail} from 'react-icons/hi';
import './styles.css';

export const Footer = () =>{


  return(
    
    <Flex  className="footer-container" paddingBottom="2" justifyContent="center">

    <Grid className="footer-grid" gridTemplateColumns={3} gridTemplateRows={3}>
        <GridItem className="Footer"  gridRow={1}>
        <Image gridColumn={1} className="footer-images" src="MNCThumbnail1.jpg" alt=""/>
        <Image gridColumn={2} className="footer-images" src="MNCThumbnail2.jpg" alt="" />
        <Image gridColumn={3} className="footer-images" src="MNCThumbnail3.jpg" alt="" />
      </GridItem>

      <GridItem gridTemplateRows={2} >
        <Text gridRow={1} color="gray.300">Copyright ©</Text>
        <Text gridRow={2}color="gray.300">MNC Development, Inc. 2008-present. All rights reserved.</Text>
      </GridItem>
      <GridItem gridColumn={2}>
        <Text gridRow={1}>
          31 Buffalo Avenue, Brooklyn, New York 11233|Phone:1-718-771-5811 or
          1-877-732-3492|Fax: 1-877-760-2763 or 1-718-771-5900 |
        </Text>
        <span >
          <Link gridRow={2} href="mailto:info@mncdevelopment.com">
          <HiMail/>
            <Text>info@mncdevelopment.com</Text>
          </Link>
        </span>
      </GridItem>
      <GridItem gridColumn={3}>
        <span >
          MNC Development and the MNC Development logos are trademarks of MNC Development,
          Inc.
        </span>
      </GridItem>
      <GridItem >
        <Text >
          MNC Development, Inc. as a NYS licensed Real Estate Broker fully supports the
          principles of the Fair Housing Act and the Equal Opportunity Act. Listing
          information is deemed reliable, but is not guaranteed.
        </Text>
      </GridItem>
    </Grid>
    </Flex>
  )
}

export default Footer;