import {
    Grid, Paper, Toolbar, Box, Typography, Button, Divider, TableContainer, Table, TableBody, TableRow, TableCell, TextField, FormControl,
    InputLabel, OutlinedInput, InputAdornment, IconButton
} from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import React, { useState } from 'react'
function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function profile() {
    const [ShowPass, setShowPass] = useState(false)
    const togglePass = () => {
        setShowPass(!ShowPass)
    }
    return (
        <>
            <Toolbar />
            <Toolbar />
            <Grid container sx={{ backgroundColor: '#fff', padding: "1em", borderRadius: "5px" }}>
                <Grid item lg={12}>
                    <Box>
                        {/* <Paper sx={{ width: "100px", height: '100px', borderRadius: '50%', overflow: "hidden", margin: "1em" }}>
                            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="user" style={{ width: "100%", height: "100%", objectFit: 'cover' }} />
                        </Paper> */}
                        <Grid container >

                            <Grid item lg={6}>
                                <Box sx={{ margin: '1em' }}>
                                    <Typography variant='h5' component={'h5'} fontWeight="bold">
                                        User Name
                                    </Typography>
                                    <Typography variant='p' component={'p'}>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci quam id, exercitationem rerum eius esse illo porro, temporibus a vel cumque rem aut obcaecati laborum maiores corporis cum iure dolore!
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item lg={12}>
                    <Divider>Personal Details </Divider>
                    <Box sx={{ display: 'flex', alignItems: "center", flexWrap: 'wrap', margin: '1em 0em' }}>
                        <Typography sx={{ width: '200px', fontSize: "1em", fontWeight: '400', color: "grey", letterSpacing: "0.6px" }}>
                            Name
                        </Typography>
                        <TextField autoComplete='off' size='small' id="outlined-basicName" variant="outlined" value={"demo"} />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: "center", flexWrap: 'wrap', margin: '1em 0em' }}>
                        <Typography sx={{ width: '200px', fontSize: "1em", fontWeight: '400', color: "grey", letterSpacing: "0.6px" }}>
                            Email
                        </Typography>
                        <TextField autoComplete='off' size='small' type={'email'} id="outlined-basicEmail" variant="outlined" value={"demo@gmail.com"} />
                    </Box>
                    <Divider>Authentication</Divider>
                    <Box sx={{ display: 'flex', alignItems: "center", flexWrap: 'wrap', margin: '1em 0em' }}>
                        <Typography sx={{ width: '200px', fontSize: "1em", fontWeight: '400', color: "grey", letterSpacing: "0.6px" }}>
                            Current Password
                        </Typography>
                        <TextField autoComplete='off' disabled size='small' type={ShowPass ? 'text' : 'password'} id="outlined-basicCurrentPassword" variant="outlined" value={"demo@gmail.com"} />
                        <IconButton aria-label="delete" onClick={togglePass}>
                            <Visibility />
                        </IconButton>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: "center", flexWrap: 'wrap', margin: '1em 0em' }}>
                        <Typography sx={{ width: '200px', fontSize: "1em", fontWeight: '400', color: "grey", letterSpacing: "0.6px" }}>
                            New Password
                        </Typography>
                        <TextField autoComplete='off' size='small' type={'text'} id="outlined-basicNewPassword" variant="outlined" />
                    </Box>
                    <Box sx={{ alignItems: "flex-start", display: "flex", justifyContent: "flex-start", height: "100%" }}>
                        <Button variant='outlined' sx={{ margin: "1em" }}>Save</Button>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}
