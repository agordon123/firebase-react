import { db, auth, storage, signIn, signOut, signUp } from "../auth/firebase";
import React, {useState} from 'react';
import { serverTimestamp } from "firebase/firestore";
import { Typography,Divider,ListItem, List, Stack} from "@mui/material";
import Box from '@mui/material/Box';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';
import styledComponents from "styled-components";


const renderAuditLogRow =(props) =>{

  const { loggedAt,auditId,userName,Action,Description,userID} = props;
  
  const getAuditLog = () => {
    
    db.collection("auditLog")
      .orderBy("DateTime", "desc")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const logData = [{
            loggedAt: doc.data().DateTime,
            auditId: doc.id,
            userName: doc.data().UserName,
            Action: doc.data().Action,
            Description: doc.data().Description,
            userID: doc.data().UserID,
          } ]
          logData.map((log) => {
            
            log.loggedAt = props.loggedAt;
            log.auditId = props.auditId;
            log.userName = props.userName;
            log.Action = props.Action;
            log.Description = props.Description;
            log.userID = props.userID;
          })
          console.log(logData);
          return (
            <Box component="AdminPage"
              sx={{ backgroundColor: 'black',color:'white',fontFamily:'Garamond' }}>
            <Stack direction="column" spacing={2}>
                   <List>
                      <ListItem key={props.auditId} component="AuditLog" disablePadding>
                          <ListItemText primary={`AuditID : ${props.logData.auditId}`} />
                      <ListItemText
            primary={`User: ${props.logData.userName}`}
          ></ListItemText>
          <ListItemText
            primary={`User ID: ${props.logData.userID}`}
          ></ListItemText>
          <ListItemText
            primary={`Date/Time: ${props.logData.dateTime}`}
          ></ListItemText>
          <ListItemText
            primary={`Action : ${props.logData.Action}`}
          ></ListItemText>
          <ListItemText
            primary={`Description: ${props.logData.Description}`}
          ></ListItemText>
        </ListItem>
      </List>
              </Stack>
          </Box>
          )
        });
      });
  };


  return (
    <Box
      className="log-container"
      sx={{
        boxSizing: "border-box",
        color: "white",
        padding: "5px 15px 5px 15px",
        backgroundColor: "rgb(37,37,37)",
        borderRadius: "12px",
        margin: "10px 20px",
        display: "block",
        fontFamily: "Garamond",
      }}
    >

    </Box>
  );
}

export const VirtualizedLog = () => {
  const [active, setActive] = React.useState(false);
  

   const useEffect =(() => { 
    getAuditLog();
    setActive(true)
  }, [active]);
  return (
    <Box
      sx={{ width: '100%', height: 400, maxWidth: 360, backgroundColor: 'black ',color:'white' }}
    >
      <FixedSizeList
        height={400}
        width={360}
        itemSize={100}
        itemCount={200}
        overscanCount={5}
        justifyContent="center"
        alignItems="center"
      >
        {renderAuditLogRow}
      </FixedSizeList>
    </Box>
  );
}


export default VirtualizedLog;


