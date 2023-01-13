import { Grid, TextField } from '@mui/material'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

interface ICustomTextField {
    name: string;
    label: string;
    required?: boolean;
    multiline?: boolean;
    value?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;

}

export function CustomTextField({ label, name }: ICustomTextField) {
    return (
        <Grid item xs={12} sm={5}>
            <Controller name={name}
                render={({ field }) => (
                    <TextField
                        label={label}
                        variant="standard"
                        {...field}
                        required
                        
                    />
                )} />
        </Grid>
    )
}
