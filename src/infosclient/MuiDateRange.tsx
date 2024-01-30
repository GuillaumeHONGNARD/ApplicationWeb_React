//https://www.youtube.com/watch?v=5t6gWvUMw0A
//npm install @mui/x-date-pickers
//npm install dayjs
//npm install luxon
//npm install date-fns


import React, {useState} from "react";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {DatePicker} from "@mui/x-date-pickers";

import {Box, IconButton, Paper, Stack, Typography} from "@mui/material";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import CheckIcon from '@mui/icons-material/Check';

import 'dayjs/locale/fr';
import {useAppStore} from "./Store";
import { FormatageDate } from "../helpers/FormatageDate";


export const MuiDateRange = () => {
    const [selectedInitDate, setSelectedInitDate] = useState<Date | null>(null)
    const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null)
    const [maxInitDate, setmaxInitDate] = useState<Date | null>(null)
    const [minEndDate, setMinEndDate] = useState<Date | null>(null)
    const{setDateDebut , setDateFin }=useAppStore()

    const handleChangeStart=(date:Date | null)=>{
            setSelectedInitDate(date!!)
            console.log(FormatageDate(date!!.toString()))

    }
    const handleChangeEnd=(date:Date | null)=>{
            setSelectedEndDate(date!!)
            console.log(FormatageDate(date!!.toString()))
    }

    const miseAjourCourbe = () => {
        setDateDebut(FormatageDate(selectedInitDate!!.toString()).substring(0,10))
        setDateFin(FormatageDate(selectedEndDate!!.toString()).substring(0,10))
    };

    return (
            <Paper sx={{padding:'20px'}}>
                <Box>
                    <Typography variant={'h5'} color={'secodary'} align={'center'}>
                    </Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fr">
                        <DatePicker
                            maxDate={selectedEndDate}
                            label={'Date de départ'}
                            value={selectedInitDate}
                            onChange={(newValue)=>handleChangeStart(newValue)}

                        />
                    </LocalizationProvider>
                </Box>
                <br/>
                <Box>
                    <Typography variant={'h5'} color={'secodary'} align={'center'}>
                    </Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fr">
                        <DatePicker
                            minDate={selectedInitDate}
                            label={'Date de fin'}
                            value={selectedEndDate}
                            onChange={(newValue)=>handleChangeEnd(newValue)}

                        />
                    </LocalizationProvider>
                </Box>
                <IconButton aria-label={'valid'} color={'success'} size={'medium'} onClick={() => miseAjourCourbe()}>
                    <CheckIcon/>
                </IconButton>
            </Paper>
     );
 }
