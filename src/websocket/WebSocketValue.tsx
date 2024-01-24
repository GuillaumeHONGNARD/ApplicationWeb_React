import React, {useState} from "react";
import ModValue from "../models/ModValue";
import {WS_SERVER} from "./paramsURL";
import useWebSocket from "react-use-websocket";
import {Stack} from "@mui/material";
import {MuiCardValue} from "../components/clients/MuiCardValue";

interface Props{
    id:number
}
export const WebSocketValue = (props:Props) => {
    const [etatWs, setEtatWs] = useState<string>("close")
    const [valueWs, setWsValue] = useState<ModValue>(new ModValue(0,0,0))
    const [socketUrl, setSocketUrl] = useState<string>(WS_SERVER+`${props.id}`);

    
    useWebSocket(socketUrl, {
        onOpen: () => setEtatWs('open'),
        shouldReconnect: (closeEvent) => true,
        onMessage: (eventMessage) => {

            let objJSON = JSON.parse(eventMessage.data)
            setWsValue(new ModValue(
                objJSON.id,
                objJSON.valeur1,
                objJSON.valeur2
            ))
        }
    })


    return(
        <Stack>
            <MuiCardValue valeurs={valueWs}/>
        </Stack>
    )

}