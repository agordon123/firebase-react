import React from "react";
import { db, auth, storage, signIn, signOut, signUp } from "../auth/firebase";
import { serverTimestamp } from "firebase/firestore";
import { Typography } from "@mui/material";


export const addAuditLog = (action, value) => {
  let description = "";
  let username = "";
  let UUID = "";
  let accDetails = localStorage.getItem("user");

  if (action === "Deleted Account") {
    description = "Deleted their account";
    username = localStorage.getItem("deletedUsername");
    UUID = localStorage.getItem("deletedUUID");
  } else {
    username = accDetails.Username;
    UUID = accDetails.UUID;

    if (
      action === "Added Listing" ||
      action === "Updated Listing" ||
      action === "Deleted Listing"
    ) {
      description = "<b>Listing ID: <b>" + value;
    } else if (action === "Changed Username") {
      description = "New Username: " + value;
    } else if (action === "Updated Account Type") {
      description =
        "Assigned " +
        value[0] +
        " " +
        value[2] +
        " Role<br>" +
        value[0] +
        " ID: " +
        value[1];
    }
  }

  db.collection("auditLog")
    .add({
      Action: action,
      UserID: UUID,
      Username: username,
      DateTime: serverTimestamp,
      Description: description,
    })
    .catch((error) => {
      console.log("Error with updating audit log");
      console.error(error);
      return false;
    });
  return true;
};

export const AuditLog =() => {
  document.getElementById("audit-log").style.display = "block";
  document.getElementById("admin-grid-container").style.display = "none";

  let logContainer = document.getElementById("log-container");

  let docs = [];

  db
    .collection("auditLog", "desc")
    .orderBy("DateTime")
    .limit(100)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        docs.push(doc);
      });

      for (let i = docs.length - 1; i >= 0; i--) {
        let logData = docs[i].data();
        let docId = docs[i].id;
        let dateFormat = Intl.DateTimeFormat("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        }).format(logData.DateTime.toDate());
        return (
          <div className="AuditLog">
            <Typography variant="h1" sx={{color:'black'}}>
              Audit Log
            </Typography>
            {logData.map((docID,logData) => { 
              <Container id="log-container">
                <Typography
                  sx={{
                    margin: '10px 20px',
                    color: 'white',
                    backgroundColor: 'black',
                    borderRadius: '12px',
                    padding: ' 5px 15px 5px 15px',
                    width: '100%'
                  }} label="descriptionLabel">
                  <b style="color:rgb(197,197,197">{doc.UserID}</b>
                  <br>
                  
                  </br>
                </Typography>
                </Container>
            })}
          </div>
        )
      }

        let logDiv = document.createElement("div");
        let descriptionLabel = document.createElement("label");
        let brElement = document.createElement("br");
        let dateLabel = document.createElement("label");
        let d = document.createElement("div");
        let moreDetails = document.createElement("div");
        let detailsAuthorId = document.createElement("div");
        let detailsDescription = document.createElement("p");
        let detailsAuditId = document.createElement("div");
        let descriptionBtn = document.createElement("button");

        logDiv.setAttribute("class", "log");
        descriptionLabel.innerHTML =
          '<b style="color:rgb(197, 197, 197)">' +
          logData.Username +
          "</b> " +
          logData.Action;
        descriptionLabel.setAttribute("class", "descriptionLabel");
        dateLabel.innerHTML = dateFormat;

        moreDetails.setAttribute("id", docId);
        moreDetails.setAttribute("class", "more-details");

        detailsAuditId.innerHTML = "<b>Audit ID:</b> " + docId;
        detailsAuthorId.innerHTML = "<b>Author ID:</b> " + logData.UserID;
        detailsDescription.innerHTML = logData.Description;

        descriptionBtn.setAttribute("id", docId + "_button");
        descriptionBtn.setAttribute("class", "detailsBtn");
        descriptionBtn.innerHTML = "More Details";
        descriptionBtn.setAttribute(
          "onclick",
          'openMoreDetails("' + docId + '")'
        );

        moreDetails.appendChild(detailsDescription);
        moreDetails.appendChild(detailsAuthorId);
        moreDetails.appendChild(detailsAuditId);

        d.appendChild(descriptionBtn);

        logDiv.appendChild(descriptionLabel);
        logDiv.appendChild(brElement);
        logDiv.appendChild(dateLabel);
        logDiv.appendChild(moreDetails);
        logDiv.appendChild(d);

        logContainer.appendChild(logDiv);
      
    
  return (
    <div>
      <div id="log-container">
      
      </div>
    </div>
  )
}
export default addAuditLog;