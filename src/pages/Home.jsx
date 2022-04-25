import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { commonLinks } from "../data/data.js";
import  ResponsiveAppBar  from "../components/ResponsiveAppBar";
import { db, auth, storage, signIn, signOut, signUp } from '../auth/firebase';
import { serverTimestamp } from "firebase/firestore";
import { Grid, Button, Link, ButtonGroup,Input, AppBar, Box } from '@mui/material';
import { Modals } from "../components/Modals.js";







export const Home = () => {

  const searchListings = (e) => {
    e.preventDefault();
    let query = e.target.value;
  }
  return (
    <div className="Home">
      <ResponsiveAppBar />
      <Grid className="grid-container">
        
        <section className="grid-item header">
      
          <ButtonGroup sx={{width:'60%'}}>
          <div id='searchBox' method="GET">
              <Link to="rent.html">
                <Button id="search-bar-rent">
                  Rent
                </Button>
                </Link>
              <Link to="/">
              <Button id="search-bar-buy">
              Buy
              </Button>
              </Link>
              <Link href="sold.html">
              <Button id="search-bar-sold">
                Sold
              </Button>
            </Link>
            <Input id='searchBar' type="search"
              placeholder="Neighborhood, City, State, Address, Zip, Listing ID">
            <Button id="searchBtn" onclick="fillInAddress()"><i class="fa fa-search"></i></Button></Input>
          </div>
        </ButtonGroup>
    </section>
      </Grid>
      </div>
  );
};

export const HomePageSearchSection = () => {
  
  const fillInAddress = () => {
    

  }
  const handleOnClick = () => {
    
  }

  return (
    <div className="HomePageSearchSection">
    <Box className="grid-item header">
      <ButtonGroup component={HomePageSearchSection} orientation="horizontal" size="small">
        <div id="searchBox" method="GET">
          <Link to="rent.html">
            <Button children={HomePageSearchSection} id="search-bar-rent">Rent</Button>
          </Link>
          <Link to="/">
            <Button id="search-bar-buy">Buy</Button>
          </Link>
          <Link href="sold.html">
            <Button id="search-bar-sold">Sold</Button>
          </Link>
          <Input
            id="searchBar"
            type="search"
            placeholder="Neighborhood, City, State, Address, Zip, Listing ID"
          >
            <Button id="searchBtn" onClick={fillInAddress}>
              <i class="fa fa-search"></i>
            </Button>
          </Input>
        </div>
      </ButtonGroup>
      </Box>
      </div>
  );
}


export default Home;
