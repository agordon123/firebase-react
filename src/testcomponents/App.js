import React from "react";
import {Card,AppBar,Typography ,CardActions,CardContent,CardMedia,CssBaseline,Grid,Toolbar,Container,ButtonGroup,Button,createTheme,ThemeProvider} from "@mui/material";
import { Home, HomeMaxTwoTone } from "@mui/icons-material";
import "./styles.scss";
import MultiActionAreaCard from './MultiActionCard'

export const App = () =>{
    const theme = createTheme({
        components: {
          MuiCssBaseline: {
            styleOverrides: {
                '@global': {
                    fontFamily: 'Garamond',
            },
          },
        },
        }})

    return(
        <>
        <CssBaseline />
            <AppBar children="true" position="relative" sx={{fontFamily:'Garamond'}}>
            <HomeMaxTwoTone />
            <Typography variant="h6" color="inherit" noWrap fontFamily="Garamond"
            sx={{fontFamily:'Garamond'}}>
            </Typography>
            </AppBar>
            <main>
            <div>
            <Container maxWidth="sm">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
            Welcome to MNC Development 
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            This is a simple application to show how to use React and Material UI
            </Typography>
            </Container>
            </div>
            </main>
        </>
    )
}