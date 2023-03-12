import { Button, Dialog, DialogActions, DialogContent, DialogContentText, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/app/store';


export default function DialogBox() {

    const DialogBoxState = useSelector((state: RootState) => state.dialogBox)

    return (
        <Dialog
            open={DialogBoxState.open}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            maxWidth='sm' fullWidth={true}
        >
            <DialogContent >
                <DialogContentText id="alert-dialog-description" component='div'>
                    <Typography variant="h5" >
                        {DialogBoxState.message}
                    </Typography>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button variant="outlined" className="heading-btn back-btn" onClick={DialogBoxState.secondaryAction}>{DialogBoxState.btnSecondaryText}</Button>
                <Button variant="outlined" color='error' className="save-next-btn heading-btn" onClick={DialogBoxState.primaryAction}>
                    {DialogBoxState.btnPrimaryText}
                </Button>
            </DialogActions>
        </Dialog>
    )
}