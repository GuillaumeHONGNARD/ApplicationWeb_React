import {useNavigate} from "react-router-dom";
import {MuiLayout} from "../components/mainpage/MuiLayout";
import React from "react";
import {MuiLayoutValue} from "../components/clients/MuiLayoutValue";

export const Home = () => {
    const navigate = useNavigate()
    return(
        <>
            <MuiLayout/>
        </>
    )
}