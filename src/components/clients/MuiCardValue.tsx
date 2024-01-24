import ModValue from "../../models/ModValue";
import React from "react";
import {Box, Card, CardContent, CardMedia, Typography} from "@mui/material";
import ModId from "../../models/ModId";

interface Props {
    valeurs:ModValue
}

export const MuiCardValue = (props:Props) => {

    const logo = require("../../images/image.jpg")

    return(

            <Card elevation={24} sx={{ width: 300 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={logo}
                />
                <CardContent>

                    <Typography gutterBottom variant="h5" component="div">
                        Client : {props.valeurs.id}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        Valeur 1 : {props.valeurs.val1}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        Valeur 2 : {props.valeurs.val2}
                    </Typography>

                </CardContent>
            </Card>


    )

}