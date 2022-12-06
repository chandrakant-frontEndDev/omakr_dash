import { Grid, Paper, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function dashboard() {
    return (
        <>
            <Toolbar />
            <Toolbar />
            <Grid container>
                <Grid item lg={12}>
                    <Box sx={{
                        width: '100%',
                        // height: '100px',
                        display: 'flex',
                        flexWrap: 'wrap',
                        backgroundColor: '#e3f2fd',
                        padding:'1em',
                        borderRadius: '15px',
                    }}>
                        <Grid item lg={6}>
                            {/* <Paper sx={{
                                width: '100%',
                                padding: '1em',
                            }}> */}
                                <Typography component={'h5'} variant="h5">
                                    Welcome User 👋🏻
                                </Typography>
                                <Typography component={'p'} variant='p' fontSize="medium" pt={'1em'}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi temporibus perferendis dolore sed sint autem magni natus omnis molestias maxime ipsum, esse vero, repudiandae rerum atque provident neque ea reiciendis?
                                </Typography>
                            {/* </Paper> */}
                        </Grid>
                        <Grid item lg={6}>

                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}
