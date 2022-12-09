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

export function CustomTextField({ label, name, required, multiline, value, onChange }: ICustomTextField) {
    const { control } = useFormContext()
    return (
        <Grid item xs={12} sm={5}>
            <Controller name={name} control={control}
                render={({ field, fieldState }) => (
                    <TextField
                        label={label}
                        multiline={multiline}
                        variant="standard"
                        value={value}
                        required={required}
                        onChange={onChange}
                        error={!!fieldState.error}
                        helperText={fieldState.error ? fieldState.error.message : null}
                    />
                )} />
        </Grid>
    )
}
