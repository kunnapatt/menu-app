import React from 'react' ;
import { Container, Box, Grid, TextField, Paper, Button } from '@mui/material';

import Navbar from "../component/navbar" ;

interface ILogin {

}

const Login = (props: ILogin) => {

    return (
        <div>
            <Navbar />
            <Container>
                <Box mt={10}>
                    <Paper
                        elevation={3}
                        sx={{
                            padding: 10
                        }}
                    >
                        <Grid 
                            container 
                            justifyContent="center" 
                            alignItems="center"
                            direction="column"
                            spacing={5}
                        >
                            <Grid
                                item
                                xs={12}
                            >
                                <TextField 
                                   label="Email" 
                                   helperText="Please enter your email"
                                />
                            </Grid>
                            <Grid
                                item
                                xs={12}
                            >
                                <TextField 
                                    label="Password" 
                                    helperText="Please enter your email"
                                />
                            </Grid>
                            <Grid
                                item
                                xs={12}
                            >
                                <Button variant="contained">Login</Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Box>
            </Container>
        </div>
    ) ;
}

export default Login ;