import {Child1} from "../components/infosclient/Child1";
import {MuiDateRange} from "../components/infosclient/MuiDateRange";
import {Stack} from "@mui/material";
import React from "react";

export const InfosClient = () => {



    return(
            <Stack
                direction={'row'}
                spacing={'8px'}
            >

                <MuiDateRange/>
                <Child1/>


            </Stack>
    )
}