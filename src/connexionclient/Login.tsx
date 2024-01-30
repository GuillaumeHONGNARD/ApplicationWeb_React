
import {
    Container,
    Box,
    Avatar,
    Typography,
    TextField,
    Button,
    Grid,
} from "@mui/material";

import { Link } from "react-router-dom";
import React, {useState} from "react";
import {LockOutlined} from "@mui/icons-material";
import axios from "axios";

export const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {

        // try {
        //     const response = await axios.post('http://10.0.0.172:8080/login', {
        //         username: username,
        //         password: password
        //     });
        //     console.log("RESPONSE : " + response.data); // Peut-être que vous voulez faire quelque chose avec la réponse du serveur
        // } catch (error) {
        //     console.error('Une erreur s\'est produite : ', error);
        // }

        try {
            const response = await fetch('http://10.0.0.172:8080/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username: username, password:password }),
            });

            if (response.ok) {
                console.log("LOGIN BON")
                // Traitement de la réponse, par exemple redirection vers une autre page
            } else {
                // Gestion des erreurs
                console.error('Erreur lors de la connexion');
            }
        } catch (error) {
            console.error('Erreur lors de la connexion', error);
        }


    };



    return (
        <>
            <Container maxWidth="xs">
                <Box
                    sx={{
                        mt: 20,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: "primary.light" }}>
                        <LockOutlined />
                    </Avatar>
                    <Typography variant="h5">Login</Typography>
                    <Box sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            type={"email"}
                            label="Email Address"
                            name="email"
                            autoFocus
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="password"
                            name="password"
                            label="Password"
                            type="password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={handleLogin}
                        >
                            Login
                        </Button>
                        <Grid container justifyContent={"flex-end"}>
                            <Grid item>
                                <Link to="/">Retour à l'écran d'accueil</Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </>
    );
};