import * as React from 'react';
import Button from '@mui/material/Button';
import { Dialog as MUIDialog } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

interface IDialog {
    open: boolean;
    handleClose?: () => void;
    handleClick?: () => void;
    title?: string;
    cancelButtonCaption?: string;
    okButtonCaption?: string;
    children?: React.ReactNode;
}

export function Dialog({ open, handleClick, handleClose, cancelButtonCaption, okButtonCaption, title, children }: IDialog) {

    return (
        <>
            <MUIDialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle>
                    {title}
                </DialogTitle>
                <DialogContent>
                   {children}
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" onClick={handleClose}>{cancelButtonCaption}</Button>
                    <Button variant="contained" onClick={handleClick} autoFocus>
                       {okButtonCaption}
                    </Button>
                </DialogActions>
            </MUIDialog>
        </>
    );
}