import {Stack} from "@mui/material";
import {WebSocketValue} from "../../websocket/WebSocketValue";
import React, {useState} from "react";
import ModValue from "../../models/ModValue";
import {WS_SERVER, WS_SERVER_CONFIG} from "../../websocket/paramsURL";
import useWebSocket from "react-use-websocket";
import ModId from "../../models/ModId";


export const MuiLayoutValue = () => {

    const [etatWs, setEtatWs] = useState<string>("close")
    const [valueWs, setWsValue] = useState<ModId[]>([])
    const [socketUrl, setSocketUrl] = useState<string>(WS_SERVER_CONFIG)


    useWebSocket(socketUrl, {
        onOpen: () => setEtatWs('open'),
        shouldReconnect: (closeEvent) => true,
        onMessage: (eventMessage) => {

            const objJSON = JSON.parse(eventMessage.data)
            setWsValue([])
            setWsValue(objJSON)

        }
    })


    return(
        <Stack padding={5} spacing={4} direction={'row'} useFlexGap flexWrap={'wrap'}
               justifyContent="space-evenly"
               alignItems="flex-start">
            {valueWs?.map(value => <WebSocketValue id={value.idClient}/> )}
        </Stack>
    )

}