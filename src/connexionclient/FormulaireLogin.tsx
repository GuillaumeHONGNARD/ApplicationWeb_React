// https://www.youtube.com/watch?v=sD9fZxMO1us&list=PLC3y8-rFHvwjmgBr1327BA5bVXoQH-w5s&index=31
// https://www.youtube.com/watch?v=u6PQ5xZAv7Q

import {Box, Button, Card, CardContent, TextField} from "@mui/material";
// pour test
// @ts-ignore
//npm install -D @hookform/devtools
import { DevTool } from '@hookform/devtools';
import {useForm} from "react-hook-form";



type FormValues = {
    email: string,
    password: string
}

export const FormulaireLogin = () => {

    const formulaire=useForm<FormValues>({
        defaultValues:async() =>{
            return{
                email:'',
                password:''
            }
        }
    })

    /**
     * Fonctionnalité du formulaire
     */
    const {register, handleSubmit,formState,control}=formulaire

    /**
     *Evenement lors de l'envoie du formulaire
     * **/
    const onSubmit=(valeurs:FormValues)=>{
        console.log(valeurs)
    }
    const {errors,dirtyFields}=formState

    return (
        <Box width={450} m={'auto'}>
            <Card elevation={5}>
                <CardContent>
                    <form autoComplete="off" onSubmit={handleSubmit(onSubmit)} noValidate>
                        <h1>Formulaire de Connexion</h1>
                        <TextField
                            required
                            label={'Email'}
                            color={'secondary'}
                            sx={{mb: 3}}
                            fullWidth
                            type={'email'}
                            {
                            //Ajout d'un element Email dans le register
                            ...register('email',{
                                required:'l\'email est obligatoire',
                                pattern:{
                                    value:/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/,
                                    message:'Votre email doit respecter le format xxx@xxx.xxx'
                                },
                                validate:{
                                    //Interdir certaine Adresse Mail
                                    notAdmin:(fieldValue)=>{
                                        return(fieldValue!=='michael.moser@laposte.net' || 'Email interdit')
                                    },
                                    //Regarde si une Mail existe déjâ
                                    emailAvailable: async (fieldValue)=>{
                                        const response =  await fetch(`https://jsonplaceholder.typicode.com/users?email=${fieldValue}`)
                                        const data= await response.json()
                                        return (data.length===0 || 'Email existe déja')
                                    }

                                }
                            })}
                            error={!!errors.email}
                            helperText={errors.email?.message}
                        />
                        <TextField
                            label={'Password'}
                            required
                            color={'secondary'}
                            type={'password'}
                            fullWidth
                            sx={{mb: 3}}
                            {//Ajout d'un element password dans le register
                            ...register('password',{
                                required:'le password est obligatoire',
                                pattern:{
                                    value:/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,15})$/,
                                    message:'Votre password doit respecter le format: de 8 à 15 caractères au moins ' +
                                        'une lettre minuscule au moins une lettre majuscule au moins un chiffre' +
                                        ' au moins un de ces caractères spéciaux:  @ % * + - _ !'
                                }

                            })}
                            error={!!errors.password}
                            helperText={errors.password?.message}
                        />
                        <Button
                            variant={'contained'}
                            color={'secondary'}
                            type={'submit'}
                            disabled={Boolean(errors.password || !!errors.email
                                || !(dirtyFields.password  && dirtyFields.email)
                            )}

                        >Login</Button>
                    </form>
                    <DevTool control={control}/>
                </CardContent>
            </Card>
        </Box>
    );
}
