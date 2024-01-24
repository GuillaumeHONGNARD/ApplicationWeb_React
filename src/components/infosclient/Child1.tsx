import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {Card, CardContent, List, Stack, Typography} from "@mui/material";
import {useAppStore} from "./Store";

export const Child1 = () => {
    const {dateDeDebut,dateDeFin} = useAppStore()


    return(
        <Stack padding={5} spacing={4} direction={'row'} useFlexGap flexWrap={'wrap'}
               justifyContent="space-evenly"
               alignItems="flex-start">
            <Card elevation={15}>
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        Date de debut : {dateDeDebut}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        Date de fin: {dateDeFin}
                    </Typography>

                </CardContent>

            </Card>


        </Stack>
    )
}