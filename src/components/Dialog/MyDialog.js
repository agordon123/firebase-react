import React, { useState, useContext, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { withStyles,useStyles } from "@mui/material/styles";
import MuiDialogTitle from "@mui/material/DialogTitle";
import MuiDialogContent from "@mui/material/DialogContent";
import MuiDialogActions from "@mui/material/DialogActions";
import IconButton from "@@mui/material/IconButton";

const DialogTitle = withStyles(theme => ({
    root: {
        backgroundColor: "#00000080",
    }
}))