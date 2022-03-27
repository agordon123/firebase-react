import { React,useState,useEffect, Component ,useContext} from 'react';
import {collection, getDocs, addDoc,updateDoc,doc}from 'firebase/firestore';
import { db,auth,provider } from './firebase';
import { signOut } from 'firebase/auth';
import {AdminPage} from './components/Admin';
import {Header} from './components/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {AspectRatio,Container,Flex,Grid,GridItem,GridItemProps} from '@chakra-ui/react';
import {AuthContext, AuthProvider} from './contexts/AuthContext';


export const  App =() =>{
  


 
  return (
    
    
      <Container maxW="100vh" fle>
        <Header>
        <Flex wrap="wrap" p="0" h="100%" w="100%" align="center">
        <AspectRatio ratio={16 / 9}>
            <iframe title="map"
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng'
            alt='demo'
            />
        </AspectRatio>
        
        </Flex>
    </Header>
    <Grid autoColumns={3}>
      <Flex justify="center" align="center" bg="teal.500" p={4}>
      <h1>Welcome to the Admin Page</h1>
      </Flex>
      </Grid>
      </Container>
    
    
     
  );
  }



    

export default App;
