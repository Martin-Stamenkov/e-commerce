import React from 'react'
import { Backdrop as MUIBackdrop, CircularProgress } from "@mui/material"

interface IBackdrop {
    open?: boolean
}

export function Backdrop({ open = true }: IBackdrop) {
    return (
        <MUIBackdrop
            sx={{ color: '#fff', zIndex: (theme: { zIndex: { drawer: number; }; }) => theme.zIndex.drawer + 1 }}
            open={open}
        >
            <CircularProgress color="inherit" />
        </MUIBackdrop>
    )
}
