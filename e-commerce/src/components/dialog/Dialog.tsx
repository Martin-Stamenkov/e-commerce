import * as React from 'react';
import Button from '@mui/material/Button';
import { Dialog as MUIDialog, SvgIconTypeMap } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { ReactElement } from 'react';
import { Box } from '@mui/system';

interface IDialog {
    open: boolean;
    handleClose?: () => void;
    handleClick?: () => void;
    title?: string;
    cancelButtonCaption?: string;
    okButtonCaption?: string;
    children?: React.ReactNode;
    icon?: ReactElement<any, any>;
}

export function Dialog({ open, handleClick, handleClose, cancelButtonCaption, okButtonCaption, title, children, icon }: IDialog) {

    return (
        <>
            <MUIDialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                    <Box display="flex" justifyContent="center" marginTop="10px">
                        {icon}
                    </Box>
                <DialogTitle sx={{paddingTop: "6px"}}>
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