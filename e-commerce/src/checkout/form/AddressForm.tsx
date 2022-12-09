import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { useForm, FormProvider, FieldValues } from 'react-hook-form'
import { CustomTextField } from '../components'

interface IAdressFormProps {
    next: (data: FieldValues) => void
}

export function AddressForm({ next }: IAdressFormProps) {
    const methods = useForm()
    return (
        <>
            <Typography sx={{ fontWeight: "700" }} >
                Вашите данни за поръчка
            </Typography>
            <FormProvider {...methods} >
                <form onSubmit={methods.handleSubmit((data) =>  next(data))}>
                    <Grid container spacing={3}>
                        <CustomTextField name="firstName" label="Име" required />
                        <CustomTextField name="lastName" label="Фамилия" required />
                        <CustomTextField name="address" multiline label="Адрес/ул./бл./номер" required />
                        <CustomTextField name="email" label="Имейл" />
                        <CustomTextField name="city" label="Град" required />
                        <CustomTextField name="postal" label="Пощенски код" required />
                    </Grid>
                    <Box sx={{ mb: 2 }}>
                        <>
                            <Button
                                variant="contained"
                                type="submit"
                                sx={{ marginTop: 3, width: "150px" }}
                            >
                                Плащане
                            </Button>
                        </>
                    </Box>
                </form>
            </FormProvider>
        </>
    )
}
